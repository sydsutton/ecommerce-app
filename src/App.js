import Navbar from "./components/NavbarComponent"
import Main from "./components/MainComponent"
import Category from "./components/CategoryComponent"
import Product from "./components/ProductComponent"
import Contact from "./components/ContactComponent"
import LogIn from "./components/LogInComponent"

import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <LogIn />

        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/products/:category" element={<Category />} />
          <Route path="/products/:brand" element={<Category />} />
          <Route path="/products/:category/:productId" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
