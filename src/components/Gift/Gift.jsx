import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './Gift.css';

export default function Gift() {
  const [songs, setSongs] = useState([]);
  const { url } = useParams();

  useEffect(() => {
    axios
      .get(`https://www.songsterr.com/a/ra/songs.json?pattern=${url}`)
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
              <p className="title"> Song - {song.title}</p>
              <div className="song">
                <p>Artist - {song.artist.name}</p>
                <a
                  href={`http://www.songsterr.com/a/wa/song?id=${song.id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Link to score
                </a>
              </div>
            </div>
          );
        })}
    </div>
  );
}
