import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="homeDiv">
      <p className="homePresentation">
        Nous te souhaitons la bienvenue sur notre site.
        <br />
        <br />
        accède directement à notre calendrier de l&apos;avant et récupère ton
        cadeau du jour
      </p>
      <Link to="/Calendar" className="btn-grad" type="button">
        access the calendar
      </Link>
    </div>
  );
}

export default Home;
