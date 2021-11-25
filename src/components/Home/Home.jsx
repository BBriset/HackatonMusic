import './Home.css';

function Home() {
  return (
    <div className="homeDiv">
      <p className="homePresentation">
        Nous te souhaitons la bienvenue sur notre site, accède directement à
        notre calendrier de l&apos;avant et récupère ton cadeau du jour
      </p>
      <button className="btn-grad" type="button">
        access the calendar
      </button>
    </div>
  );
}

export default Home;
