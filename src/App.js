import "./styles.css";
import React, { useState } from "react";

const musicList = {
  rap: {
    Godzilla: ["Eminem", 4],
    Humble: ["Kendrick Lamar", 3],
    "California Love": ["2pac", 5]
  },
  rock: {
    Thunderstruck: ["ACDC", 4],
    "Comfortably Numb": ["Pink Flyod", 3],
    Radioactive: ["Imagine Dragons", 3]
  },
  "western classical": {
    Nocturne: ["Frédéric Chopin", 5],
    "Turkish March": ["Mozart", 5],
    "Fur Elise": ["Ludwig van Beethoven", 5]
  }
};

const genres = Object.keys(musicList);

export default function App() {
  let [songList, updateSongs] = useState();

  function listSongs(genre) {
    const songs = Object.keys(musicList[genre]);
    updateSongs(
      songs.map((song) => {
        return (
          <div className="songs-card">
            <div className="song-name" key="{song}">
              {song}
            </div>
            <div className="artist-name" key="{song}">
              {musicList[genre][song][0]}
            </div>
            <div className="ratings" key="{song}">
              {musicList[genre][song][1]}/5
            </div>
          </div>
        );
      })
    );
  }

  return (
    <div className="App">
      <h1>♫ Music Recommendation</h1>
      <p className="description">
        {" "}
        List of music I would recommend you to listen
      </p>
      <div className="genres">
        {genres.map((genre) => {
          return (
            <button className="genre-btn" onClick={() => listSongs(genre)}>
              {genre}
            </button>
          );
        })}
      </div>
      <hr></hr>
      <div className="songs">{songList}</div>
    </div>
  );
}
