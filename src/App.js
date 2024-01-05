import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import HomeScreen from './pages/HomeScreen';


function App() {
  return (
    <BrowserRouter>
    <>
    <NavBar />
    <Routes>
    <Route path="/" element={<HomeScreen />} />
    </Routes>
    <Footer />
    </>
    </BrowserRouter>
  );
}

export default App;
