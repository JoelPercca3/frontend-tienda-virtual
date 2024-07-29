// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
import Addresses from "./pages/Addresses"; // Importa la nueva página
import NotFound from "./pages/NotFound";
import AuthContextProvider from './contexts/AuthContext';
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";



function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Header />
        <Navbar />
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/addresses" element={<Addresses />} />
            <Route path="/login" element={<Login />} />  {/* Ruta para login */}
            <Route path="/register" element={<Register />} />  {/* Ruta para registro */}

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </AuthContextProvider>
  );
}

export default App;
