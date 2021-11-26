import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="homeDiv">
      <p className="homePresentation">
        We welcome you to our site.
        <br />
        <br />
        Go directly to our advent calendar and collect your gift of day
      </p>
      <Link to="/Calendar" className="btn-grad" type="button">
        access the calendar
      </Link>
    </div>
  );
}

export default Home;
