import img1 from '../assets/img1.png'

const Mission = () => {
    return (
        <div className="mission-container">
      <div className="mission-content">
        <h2>Our Mission</h2>
        <p>
          Based on the statement of God Almighty, “O people! We created you all
          from a male and a female, and we made you into nations and tribes so
          that you may know one another” (Surah Al Hujurat Ayah 13). The Islamic
          Center (NIC) plays a vital and holistic role in bringing the views of
          the different spectrums of Islamic society together by creating a
          common language of dialogue without violating the right Islamic rules.
        </p>
        <h3>We need your support to start building <br/> the masjid this year </h3>    
        <p className='p2'>Please help us with your donations on our donation website</p>
        <button className="donate-button">DONATE NOW</button>
      </div>
      <div className="mission-image">
      <img src={img1} alt="Salatul Eid" />
        <p className="image-caption">Salatul Eid on 1st of May 2022</p>
      </div>
    </div>
    )
    }
    export default Mission;