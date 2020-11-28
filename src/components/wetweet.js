import { dbService, storageService } from "fbase";
import React, { useState } from "react";

const Wetweet = ({ wetweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newWetweet, setNewWetweet] = useState(wetweetObj.text);
  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this this?");
    if (ok) {
      // Delete Wetweet
      await dbService.doc(`wetweets/${wetweetObj.id}`).delete();
      await storageService.refFromURL(wetweetObj.attachmentUrl).delete();
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
    <div>
      {editing ? (
        <>
          {isOwner && (
            <>
              <form onSubmit={onSubmit}>
                <input
                  type="text"
                  placeholder="Edit your Wetweet"
                  value={newWetweet}
                  required
                  onChange={onChange}
                />
                <input type="submit" value="Update Wetweet" />
              </form>
              <button onClick={toggleEditing}> Cancel </button>
            </>
          )}
        </>
      ) : (
        <>
          <h4>{wetweetObj.text}</h4>
          {wetweetObj.attachmentUrl && (
            <img src={wetweetObj.attachmentUrl} width="50px" height="50px" />
          )}
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>Delete Wetweet</button>
              <button onClick={toggleEditing}>Edit Wetweet</button>
            </>
          )}
        </>
      )}
    </div>
  );
};
export default Wetweet;
