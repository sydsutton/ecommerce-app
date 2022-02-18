import { useContext } from "react"
import Navbar from "./components/NavbarComponent"
import Main from "./components/MainComponent"
import Category from "./components/CategoryComponent"
import Product from "./components/ProductComponent"
import Contact from "./components/ContactComponent"
import LogIn from "./components/LogInComponent"
import Cart from "./components/CartComponent"
import Footer from "./components/FooterComponent"
import { Context } from "./Context"

import {BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

function App() {

  const {savedItems} = useContext(Context)
  
  const PrivateRoute = ({ children }) => {
    return savedItems.length > 0 ? children : <Navigate to="/" />
  }

  return (
    <div className="app">
      <Router>
          <Navbar />
          <LogIn />

          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/products/:category" element={<Category />} />
            <Route path="/products/:brand" element={<Category />} />
            <Route path="/products/:category/:productId" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route 
              path="/cart" 
              element={
                <PrivateRoute>
                  <Cart />
                </PrivateRoute>
              } 
            />
          </Routes>

          <Footer />
      </Router>
    </div>
  );
}

export default App;
