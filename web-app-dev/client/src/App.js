import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

// Screens
import HomeScreen from './Screens/HomeScreen';
import AboutScrean from './Screens/AboutScrean';
import TestScreen from './Test/TestScreen';
//import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
//import NavBarComponent from './Components/NavBarComponent';
import Navigator from "./Components/Navigator/Navigator";
function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
      <Navigator/>
        <Routes>
          <Route path='/home' element={< HomeScreen/>} />
          <Route path='/about' element={< AboutScrean/>} />
          {/* test route */}
          <Route path='/test' element={< TestScreen/>} />
        </Routes>
      </BrowserRouter>
      <FooterComponent/>
    </div>
  );
}

export default App;
