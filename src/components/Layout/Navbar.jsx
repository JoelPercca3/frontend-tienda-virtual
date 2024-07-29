// src/components/Layout/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-white text-2xl font-bold">
                    <span className="text-green-400">Mi</span> Tienda Mariel Yaissa
                </Link>
                
                {/* Navegación Principal */}
                <div className="flex space-x-4">
                    <Link to="/" className="text-white hover:text-gray-400">Inicio</Link>
                    <Link to="/products" className="text-white hover:text-gray-400">Productos</Link>
                    <Link to="/about" className="text-white hover:text-gray-400">Acerca de</Link>
                    <Link to="/contact" className="text-white hover:text-gray-400">Contacto</Link>
                    
                </div>

                {/* Buscar */}
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Buscar productos..."
                        className="px-4 py-2 rounded-lg border border-gray-300"
                    />
                </div>

                {/* Accesos de Usuario y Carrito */}
                <div className="flex space-x-4">
                    <Link to="/login" className="text-white hover:text-gray-400">Iniciar sesión</Link>
                    <Link to="/cart" className="text-white hover:text-gray-400">
                        <i className="fas fa-shopping-cart"></i> Carrito
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
