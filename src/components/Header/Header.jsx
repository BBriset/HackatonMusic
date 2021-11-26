import { Link } from 'react-router-dom';
import Santa from '../../Images/santa.png';
import './Header.css';

function Header() {
  return (
    <Link to="/">
      <div className="headerDiv">
        <img className="santa" src={Santa} alt="Santa" />
      </div>
    </Link>
  );
}
export default Header;
