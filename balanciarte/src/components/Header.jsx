import React from 'react';
import logo from '../assets/logo.png'; 

function Header() {
  return (
    <header className="bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <img src={logo} alt="Logo de BalanciArte" className="h-12" />
        <h1 className="text-3xl font-semibold text-white">BalanciArte</h1>
        <nav className="mt-4">
          <ul className="flex space-x-4">
            <li><a className="text-white hover:text-gray-200" href="/">Inicio</a></li>
            <li><a className="text-white hover:text-gray-200" href="/about">Acerca de Nosotros</a></li>
            <li><a className="text-white hover:text-gray-200" href="/contact">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;