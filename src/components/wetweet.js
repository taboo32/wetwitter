import React from "react";

const Wetweet = ({ wetweetObj, isOwner }) => (
    <div>
        <h4>{wetweetObj.text}</h4>
        {isOwner && (
            <> 
                <button>Delete Wetweet</button>
                <button>Edit Wetweet</button>
            </>
        )}
    </div>
);
export default Wetweet;