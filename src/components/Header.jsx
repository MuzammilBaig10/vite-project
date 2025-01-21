import image from '../assets/logo.svg'

const Header = () => {
  return (
    <>
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={image} alt="NIC Logo" /> 
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About NIC</a></li>
        <li><a href="#masjid">The Masjid</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#contact">Contact Us</a></li>
        <li><button className="support-button">SUPPORT</button></li>
      </ul>
      <div className="navbar-social">
        <a href="https://www.facebook.com/NICSverige/"><i className="fab fa-facebook"></i></a>
        <a href="https://www.instagram.com/nicsverige"><i className="fab fa-instagram"></i></a>
        <a href="https://www.youtube.com/@norrbottenislamiccenter8126"><i className="fab fa-youtube"></i></a>
      </div>
    </nav>
    </>
  );
};

export default Header;

