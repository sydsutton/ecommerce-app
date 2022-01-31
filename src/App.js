import Navbar from "./components/NavbarComponent"
import Main from "./components/MainComponent"
import Products from "./components/ProductsComponent"
import Contact from "./components/ContactComponent"
import SignIn from "./components/SignInComponent"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
