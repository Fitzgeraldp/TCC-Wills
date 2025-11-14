import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Wills from './pages/Wills';
import WillsForm from './pages/WillsForm';
import EnduringPOA from './pages/EnduringPOA';
import LettersofAdmin from './pages/LettersofAdmin';
import Probate from './pages/Probate';
import Prices from './pages/Prices';
import FAQs from './pages/FAQs';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/wills" element={<Wills />} />
        <Route path="/wills-form" element={<WillsForm />} />
        <Route path="/enduring-poa" element={<EnduringPOA />} />
        <Route path="/letters-of-admin" element={<LettersofAdmin />} />
        <Route path="/probate" element={<Probate />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;