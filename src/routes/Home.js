import React, { useState, useEffect } from "react";
import { dbService } from "fbase";
import Wetweet from "components/wetweet";

const Home = ({ userObj }) => {
    const [wetweet, setWetweet] = useState("");
    const [wetweets, setWetweets] = useState([]);

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
    console.log(wetweets);
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={wetweet} onChange={onChange} type="text" placeholder="What's on your mind?" maxLength={120} />
                <input type="submit" value="Wetweet"/>
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