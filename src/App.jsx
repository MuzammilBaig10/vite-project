import { FaUserSecret } from "react-icons/fa";
import ButtonCustom from "./components/ButtonCustom";
import './App.css'

const App = () => {
  return (
    <>
    <div>Name: Muzammil Baig</div>
    <FaUserSecret size={500} />
    <div>Age: 20</div>
    <ButtonCustom/>
    </>
  ) 
}

export default App;