import image1 from '../assets/image1.svg'
import image2 from '../assets/image2.svg'
import prayertimings from '../assets/prayer timings.svg'

const PrayerTimingsAndFeeds = () => {
    return (
      <div className="container">
        <img src={prayertimings} alt="Namaz" />
        <div className="facebook-feeds">
          <h3>FACEBOOK FEEDS</h3>
          <div className="feed-images">
            <div className="feed">
              <img src={image1} alt="Facebook Feed 1" />
            </div>
            <div className="feed">
              <img src={image2} alt="Facebook Feed 2" />
            </div>
          </div>
        </div>
      </div>
    );
}
  
  export default PrayerTimingsAndFeeds;