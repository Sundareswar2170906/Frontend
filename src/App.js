import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StockDetails from './pages/StockDetails';
import NoPage from './pages/NoPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AddPage from './pages/AddPage';

function App() {


  return (
    <div className="App">
      <div><Header /></div>
      <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/stock-details" element={<StockDetails />}></Route>
        <Route path="/add" element={<AddPage />}></Route>
        <Route path="/about-us" element={<AboutPage />}></Route>
        <Route path="/contact-us" element={<ContactPage />}></Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
      </div>
      <div><Footer /></div>
    </div>
  );
}

export default App;
