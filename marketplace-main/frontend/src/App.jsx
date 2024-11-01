import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';
import Frontpage from './Pages/frontpage';
import MainMarketplace from './Pages/MainMarketplace'; // Ensure this matches the actual file name
import SignUpPage from './components/SignUpPage';
import Footer from './components/footer';
import ProductPage from './Pages/ProductPage';
import ProductDetailPage from './components/ProductDetailPage';
import Registration from './Pages/RegistrationPage';



function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Frontpage />} />
        <Route exact path="/marketplace" element={<MainMarketplace />} /> {/* Ensure this matches the import */}
        <Route exact path="/signup" element={<SignUpPage />} /> {/* Ensure this matches the import */}
        <Route exact path="/product" element={<ProductPage />} /> {/* Ensure this matches the import */}

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
