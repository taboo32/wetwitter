import { dbService, storageService } from "fbase";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Wetweet = ({ wetweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newWetweet, setNewWetweet] = useState(wetweetObj.text);
  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this this?");
    if (ok) {
      // Delete Wetweet
      await dbService.doc(`wetweets/${wetweetObj.id}`).delete();
      await storageService
        .refFromURL(wetweetObj.attachmentUrl)
        .firebase.storage.delete();
    }
  };
  const toggleEditing = () => setEditing((prev) => !prev);
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`wetweets/${wetweetObj.id}`).update({
      text: newWetweet,
    });
    setEditing(false);
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewWetweet(value);
  };
  return (
    <div className="wetweet">
      {editing ? (
        <>
          {isOwner && (
            <>
              <form onSubmit={onSubmit} className="container wetweetEdit">
                <input
                  type="text"
                  placeholder="Edit your Wetweet"
                  value={newWetweet}
                  required
                  onChange={onChange}
                  autoFocus
                  className="formInput"
                />
                <input
                  type="submit"
                  value="Update Wetweet"
                  className="formBtn"
                />
              </form>
              <span onClick={toggleEditing} className="formBtn cancelBtn">
                Cancel
              </span>
            </>
          )}
        </>
      ) : (
        <>
          <h4>{wetweetObj.text}</h4>
          {wetweetObj.attachmentUrl && <img src={wetweetObj.attachmentUrl} />}
          {isOwner && (
            <div className="wetweet__actions">
              <span onClick={onDeleteClick}>
                <FontAwesomeIcon icon={faTrash} />
              </span>
              <span onClick={toggleEditing}>
                <FontAwesomeIcon icon={faPencilAlt} />
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
};
export default Wetweet;
