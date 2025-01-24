import './App.css'
import Header from './components/Header';
import Herosection from './components/Herosection';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PrayerTimingsAndFeeds from './components/PrayerTimingAndFeeds';

const App = () => {
  return (
    <>
    <Header/>
    <Herosection/>
    <PrayerTimingsAndFeeds/>
    </>
  ) 
}

export default App;