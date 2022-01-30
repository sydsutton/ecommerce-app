import Navbar from "./components/NavbarComponent"
import Main from "./components/MainComponent"
import Products from "./components/ProductsComponent"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="app">
        <div className="blur"></div>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
