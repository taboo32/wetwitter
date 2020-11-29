import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { authService, dbService, storageService } from "fbase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Profile = ({ refreshUser, userObj }) => {
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const [newProfilePic, setNewProfilePic] = useState(userObj.profilePic);

  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };

  const getMyWetweets = async () => {
    const wetweets = await dbService
      .collection("wetweets")
      .where("creatorId", "==", userObj.uid)
      .orderBy("createdAt")
      .get();

    console.log(wetweets.docs.map((doc) => doc.data()));
  };
  useEffect(() => {
    getMyWetweets();
  }, []);

  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;

    // 여러 파일을 가져올 수 있지만 input은
    // 하나의 파일만 허용하므로 첫 번째 파일을 가져온다.
    const theFile = files[0];
    const reader = new FileReader();

    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;

      setNewProfilePic(result);
    };

    reader.readAsDataURL(theFile);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    let photoPath = "";
    // 유저이름혹은 프로필 사진이 변경되지않으면 작동하지않도록
    if (
      userObj.displayName !== newDisplayName ||
      userObj.ProfilePic !== newProfilePic
    ) {
      try {
        if (userObj.photoURL !== newProfilePic) {
          const photoURLRef = storageService
            .ref()
            .child(`${userObj.uid}/${uuidv4()}`);

          const response = await photoURLRef.putString(
            newProfilePic,
            "data_url"
          );
          photoPath = await response.ref.getDownloadURL();

          await userObj.updateProfile({
            displayName: newDisplayName,
            profilePic: photoPath,
          });
        }
        await userObj.updateProfile({
          displayName: newDisplayName,
        });

        refreshUser();
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  return (
    <div
      style={{
        maxWidth: 890,
        width: "100%",
        margin: "0 auto",
        marginTop: 80,
        display: "flex",
        justifyContent: "center",
        color: "black",
      }}
    >
      <div className="container">
        <form onSubmit={onSubmit} className="profileForm">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            {newProfilePic ? (
              <img
                src={newProfilePic}
                width="100px"
                height="100px"
                alt="profileImage"
                style={{ borderRadius: "50%" }}
              />
            ) : (
              <img
                src="https://lh3.googleusercontent.com/proxy/m4bOSiyaKmuhH0faWpGGxfYoBlCGVbwGTzdduGm5nLu65bcV7z8YL0sNJvjEn14rxIfKKn0KNN0URxOQvY66dVP03IOtda3gwHlU40747FPzBE09geQ9ciFj8vUagyBKua1BeirREwVqVoHdfhQFuByxRcLGIDMA"
                width="100px"
                height="100px"
                alt="profileImage"
                style={{ borderRadius: "50%" }}
              />
            )}

            <label htmlFor="attach-file" className="factoryInput__label">
              <span>Change photos</span>
              <FontAwesomeIcon icon={faPlus} />
            </label>
            <input
              id="attach-file"
              type="file"
              accept="image/*"
              onChange={onFileChange}
              style={{
                opacity: 0,
              }}
            />
          </div>

          <input
            onChange={onChange}
            type="text"
            autoFocus
            placeholder="Display name"
            value={newDisplayName}
            className="formInput"
          />
          <input
            type="submit"
            value="Update Profile"
            className="formBtn"
            style={{
              marginTop: 10,
            }}
          />
        </form>
        <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
          Log Out
        </span>
      </div>
    </div>
  );
};

export default Profile;
