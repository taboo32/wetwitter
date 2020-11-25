import React, { useState } from "react";

const Home = () => {
    const [wetweet, setWetweet] = useState("");
    const onSubmit = (event) => {
        event.preventDefault();
    };
    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setWetweet(value);
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={wetweet} onChange={onChange} type="text" placeholder="What's on your mind?" maxLength={120} />
                <input type="submit" value="Wetweet"/>
            </form>
        </div>
    );
};
export default Home;