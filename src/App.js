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
          <ul className="songs-card">
            <li className="list-non-bullet" key="{song}">
              {song}
            </li>
            <li className="list-non-bullet" key="{song}">
              {musicList[genre][song]}
            </li>
          </ul>
        );
      })
    );
  }

  return (
    <div className="App">
      <h1>Music Recommendation</h1>
      <div className="genres">
        <ul>
          {genres.map((genre) => {
            return (
              <li className="list-item-inline">
                <button className="genre-btn" onClick={() => listSongs(genre)}>
                  {genre}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <hr></hr>
      <div className="songs">{songList}</div>
    </div>
  );
}
