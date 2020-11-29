import React, { useState, useEffect } from "react";
import { dbService } from "fbase";
import Wetweet from "components/wetweet";
import WetweetFactory from "components/WetweetFactory";

const Home = ({ userObj }) => {
  const [wetweets, setWetweets] = useState([]);

  useEffect(() => {
    dbService.collection("wetweets").onSnapshot((snapshot) => {
      const wetweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setWetweets(wetweetArray);
    });
  }, []);
  return (
    <div className="container">
      <WetweetFactory userObj={userObj} />
      <div style={{ marginTop: 30 }}>
        {wetweets.map((wetweet) => (
          <Wetweet
            key={wetweet.id}
            wetweetObj={wetweet}
            isOwner={wetweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
