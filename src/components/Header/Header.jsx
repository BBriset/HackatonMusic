import Santa from '../../Images/santa.png';
import './Header.css';

function Header() {
  return (
    <div className="headerDiv">
      <img className="santa" src={Santa} alt="Santa" />
    </div>
  );
}
export default Header;
