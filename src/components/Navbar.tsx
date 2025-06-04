
import React from 'react';
import { Button } from "@/components/ui/button";
import { Bike, Car } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="relative z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-blue-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center group">
            <div className="relative">
              <Bike className="h-10 w-10 text-red-600 group-hover:text-red-500 transition-all duration-300 group-hover:rotate-12" />
              <div className="absolute -inset-2 bg-red-600/20 rounded-full blur group-hover:bg-red-500/30 transition-all duration-300"></div>
            </div>
            <h1 className="ml-3 text-3xl font-black text-blue-600 dark:text-blue-400">
              MotoSpeed
            </h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-blue-600 dark:text-blue-400 font-semibold relative group">
              Início
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/catalogo" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 relative group">
              Catálogo
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <a href="#sobre" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 relative group">
              Sobre
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <Link to="/servicos" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 relative group">
              Serviços
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <a href="#contato" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 relative group">
              Contato
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300"
            >
              <Car className={`h-5 w-5 transition-all duration-300 ${theme === 'dark' ? 'text-yellow-500' : 'text-gray-600'}`} />
            </Button>
            <Button variant="ghost" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300">
              Entrar
            </Button>
            <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-600/30" asChild>
              <Link to="/catalogo">Ver Motos</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
