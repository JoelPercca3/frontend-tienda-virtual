// src/components/Layout/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-gray-800 p-4 text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">
                    <Link to="/" className="hover:text-green-400">
                        Tienda Virtual
                    </Link>
                </h1>
                <nav>
                    <Link to="/" className="mr-4 hover:text-gray-400">Inicio</Link>
                    <Link to="/products" className="mr-4 hover:text-gray-400">Productos</Link>
                    <Link to="/cart" className="mr-4 hover:text-gray-400">Carrito</Link>
                    <Link to="/profile" className="mr-4 hover:text-gray-400">Perfil</Link>
                    <Link to="/addresses" className="mr-4 hover:text-gray-400">Adress</Link>


                </nav>
            </div>
        </header>
    );
};

export default Header;
