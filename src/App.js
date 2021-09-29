import "./styles.css";
import React, { useState } from "react";

const musicList = {
  rap: {
    Godzilla: "Eminem",
    Humble: "Kendrick Lamar",
    "California Love": "2pac"
  },
  rock: {
    Thunderstruck: "ACDC",
    "Comfortably Numb": "Pink Flyod",
    Radioactive: "Imagine Dragons"
  },
  "western classical": {
    Nocturne: "Frédéric Chopin",
    "Turkish March": "Mozart",
    "Fur Elise": "Ludwig van Beethoven"
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
              {musicList[genre][song]}
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
