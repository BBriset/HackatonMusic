import axios from 'axios';
import { useEffect, useState } from 'react';

import './Gift.css';


export default function Gift() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://www.songsterr.com/a/ra/songs.json?pattern=christmas-jingle-bells-metal-version'
      )
      .then(({ data }) => {
        setSongs(data);
      });
  }, []);
  console.log(songs[0]);
  return (
    <div>
      {songs
        .filter((song, index) => index === 0)
        .map((song) => {
          return (
            <div className="gift">

              <p className="title">{song.title}</p>
              <div className="song">
                <p>{song.artist.name}</p>
                <a href={`http://www.songsterr.com/a/wa/song?id=${song.id}`}>
                  Lien vers la partition
                </a>
              </div>

            </div>
          );
        })}
    </div>
  );
}
