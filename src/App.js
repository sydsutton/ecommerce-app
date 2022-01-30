import './styles/styles.css';
import Navbar from "./components/NavbarComponent"
import Main from "./components/MainComponent"
import Products from "./components/ProductsComponent"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
