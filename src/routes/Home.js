import React, { useState, useEffect } from "react";
import { dbService } from "fbase";
import Wetweet from "components/wetweet";

const Home = ({ userObj }) => {
    const [wetweet, setWetweet] = useState("");
    const [wetweets, setWetweets] = useState([]);
    const [attachment, setAttachment] =useState();

    useEffect(() => {
        dbService.collection("wetweets").onSnapshot((snapshot) => {
            const wetweetArray = snapshot.docs.map((doc) => ({
                id: doc.id, ...doc.data(),
            }))
            setWetweets(wetweetArray);
        });
    }, []);
    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.collection("wetweets").add({
            text:wetweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
        })
        setWetweet("");
    };
    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setWetweet(value);
    };
    const onFileChange = (event) => {
        const {
            target: { files },
        } = event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const {currentTarget: { result },
            } = finishedEvent;
            setAttachment(result)
        }
        reader.readAsDataURL( theFile );
    }
    const onClearAttachment = () => setAttachment(null)
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={wetweet} onChange={onChange} type="text" placeholder="What's on your mind?" maxLength={120} />
                <input type="file" accept="image/*" onChange={onFileChange} />
                <input type="submit" value="Wetweet"/>
                {attachment && (
                    <div>
                        <img src={attachment} width="50px" height="50px" />
                         <button onClick={onClearAttachment}> Clear </button>
                    </div>
                )}
            </form>
            <div>
                {wetweets.map((wetweet) => (
                    <Wetweet key={wetweet.id} wetweetObj={wetweet} isOwner={wetweet.creatorId === userObj.uid} />
                ))}
            </div>
        </div>
    );
};
export default Home;