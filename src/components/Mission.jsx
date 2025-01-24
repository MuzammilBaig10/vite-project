import img1 from '../assets/img1.png'

const Mission = () => {
    return (
        <div className="container-1">
            <div className="text-1" >Our Mission</div>
            <div className="text-2" >Based on the statement of God Almighty, “O people! We created you all from a male and a female, and we made you into nations and tribes so that you may know one another” (Surah Al Hujrat Ayah 13). The Islamic Center (NIC) plays a vital and holistic role in bringing the views of the different spectrums of Islamic society together by creating a common language of dialogue without violating the right Islamic rules.</div>
            <div className="text-3" >We need your support to start building the masjid this year</div>
            <div className="text-4" >Please help us with your donations on our donation website</div>
            <div className="donation-1">
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