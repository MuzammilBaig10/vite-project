import './App.css'
import Header from './components/Header';
import Herosection from './components/Herosection';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PrayerTimingsAndFeeds from './components/PrayerTimingAndFeeds';
import Mission from './components/Mission';
import Quranicverse from './components/Quranicverse';

const App = () => {
  return (
    <>
    <Header/>
    <Herosection/>
    <PrayerTimingsAndFeeds/>
    <Mission/>
    <Quranicverse/>
    </>
  ) 
}

export default App;