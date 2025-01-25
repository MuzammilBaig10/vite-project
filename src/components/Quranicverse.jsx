import tomb1 from '../assets/tomb1.svg'
import gallery from '../assets/gallery.svg'

const Quranicverse = () => {
    return (
        <div className='tomb'>
            <img className='img-one' src={tomb1} alt="tomb of the masjid" />
            <h2>Quranic Verse of the Day</h2>
            <p>Surah Al-Isra, Verse 37</p>
            <h5>وَلَا تَمْشِ فِي الْأَرْضِ مَرَحًا ۖ إِنَّكَ لَن تَخْرِقَ الْأَرْضَ وَلَن تَبْلُغَ الْجِبَالَ طُولًا</h5>
            <h6>And do not walk on the earth arrogantly. Surely you can neither crack the earth nor stretch <br /> to the height of the mountains.</h6>
            <img className='imgtwo' src={tomb1} alt="tomb of the masjid" />
            <h2>Hadith of the day</h2>
            <p className='hadith1'>A man came to the Prophet and asked, 
                “O Allah’s Apostle! Which charity is the most superior in reward?” He replied, “The charity which you <br /> 
                practice while you are healthy, niggardly and afraid of poverty and wish to become wealthy. Do not delay it to the time of approaching death <br /> 
                and then say, ‘Give so much to such and such, and so much to such and such.’ And it has already belonged to such and such (as it is too <br /> 
                late).” <br /> Sahih Bukhari</p>

                <h1>GALLERY</h1>
                <img src={gallery} alt="multiple images" />
        </div>
    )
}

export default Quranicverse;