import React, { useState } from "react";
import { v1 as uuidv1 } from "uuid";

const SongList = () => {
  const [songs, setSong] = useState([
    { title: "Rooze Sard", id: 1 },
    { title: "Divar", id: 2 },
    { title: "Dahati", id: 3 },
  ]);
  const addSong = () => {
    setSong([...songs, { title: "news song", id: uuidv1() }]);
  };
  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <button onClick={addSong}>Add new song</button>
    </div>
  );
};

export default SongList;
