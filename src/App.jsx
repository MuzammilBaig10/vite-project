import './App.css'
import Header from './components/Header';
import Herosection from './components/Herosection';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PrayerTimingsAndFeeds from './components/PrayerTimingAndFeeds';
import Mission from './components/Mission';
import Quranicverse from './components/Quranicverse';
import Location from './components/Location';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <Header/>
    <Herosection/>
    <PrayerTimingsAndFeeds/>
    <Mission/>
    <Quranicverse/>
    <Location/>
    <Footer/>
    </>
  ) 
}

export default App;