import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import HomeScreen from './pages/HomeScreen';
import AboutScreen from './pages/AboutScreen';
import ContactScreen from './pages/ContactScreen';
import InternshipScreen from './pages/InternshipScreen';
import MediaScreen from './pages/MediaScreen';
import ServicesScreen from './pages/ServicesScreen';
import TeamScreen from './pages/TeamScreen';


function App() {
  return (
    <BrowserRouter>
    <>
    <NavBar />
    <Routes>
    <Route path="/" element={<HomeScreen />} />
    <Route path="/about" element={<AboutScreen />} />
    <Route path="/contact" element={<ContactScreen />} />
    <Route path="/internship" element={<InternshipScreen />} />
    <Route path="/media" element={<MediaScreen />} />
    <Route path="/services" element={<ServicesScreen />} />
    <Route path="/team" element={<TeamScreen />} />
    <Route path="/" element={<HomeScreen />} />
    </Routes>
    <Footer />
    </>
    </BrowserRouter>
  );
}

export default App;
