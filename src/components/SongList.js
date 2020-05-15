import React, { useState, useEffect } from "react";
import { v1 as uuidv1 } from "uuid";
import AddSong from "./AddSong";

const SongList = () => {
  const [songs, setSong] = useState([
    { title: "Rooze Sard", id: 1 },
    { title: "Divar", id: 2 },
    { title: "Dahati", id: 3 },
  ]);
  const addSong = (title) => {
    setSong([...songs, { title, id: uuidv1() }]);
  };
  const [age, setAge] = useState(20);
  useEffect(() => {
    console.log("use effect ran!", songs);
  }, [songs]);
  useEffect(() => {
    console.log("use effect ran!", age);
  }, [age]);
  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <AddSong addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>your age is {age}</button>
    </div>
  );
};

export default SongList;
