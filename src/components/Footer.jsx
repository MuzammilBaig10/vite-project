import image from '../assets/logo2.svg'

const Footer = () => {  
    return (
      <footer className="footer-container">
        <div className="footer-section">
          <img src={image} alt="NIC Logo" className="footer-logo" />
          <p>© 2023 thenic.se</p>
        </div>
  
        <div className="footer-section footer-menu">
          <ul>
            <li>Home</li>
            <li>About NIC</li>
            <li>The Masjid</li>
            <li>Education</li>
            <li>Team</li>
            <li>Contact Us</li>
          </ul>
          <button className="support-btn1">SUPPORT</button>
        </div>
  
        <div className="footer-section">
          <h3>FOLLOW US</h3>
          <div className="social-icons">
        <a href="https://www.facebook.com/NICSverige/"><i className="icons"></i></a>
        <a href="https://www.instagram.com/nicsverige"><i className="icons"></i></a>
        <a href="https://www.youtube.com/@norrbottenislamiccenter8126"><i className="icons"></i></a>
          </div>
          <p>Email: contact@thenic.com</p> 
        </div>
      </footer>
    );
  };
  
  export default Footer;