import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './Gift.css';

export default function Gift() {
  const [songs, setSongs] = useState([]);
  const { url, video } = useParams();

  useEffect(() => {
    axios
      .get(`https://www.songsterr.com/a/ra/songs.json?pattern=${url}`)
      .then(({ data }) => {
        setSongs(data);
      });
  }, []);

  return (
    <div>
      <section className="clip">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${video}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </section>
      {songs
        .filter((song, index) => index === 0)
        .map((song) => {
          return (
            <div className="gift">
              <p className="title"> Song - {song.title}</p>
              <div className="song">
                <p className="artist">Artist - {song.artist.name}</p>
                <a
                  className="score"
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
