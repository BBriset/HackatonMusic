import { Link } from 'react-router-dom';
import './Door.css';

export default function Door(item) {
  const { num, artist, song, isOpen, open, img, url, video } = item;
  return (
    <div className={isOpen ? 'Door open' : 'Door'}>
      {isOpen ? (
        <Link to={`/Gift/${url}/${video}`} className="titleDoor">
          <p>{artist}</p>
          <img src={img} alt="toto" />
          <p>{song}</p>
        </Link>
      ) : (
        <input
          className="openInput"
          type="button"
          onClick={() => {
            open(num);
          }}
          value={`${num + 1}`}
        />
      )}
    </div>
  );
}
