import React, { useState } from 'react';
import { Menu, X} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-yellow-400/95 backdrop-blur-sm shadow-md z-50">
      <nav className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/images/PPF-LOGO.jpg" alt="Pentapolis Foundation Logo" className="h-16 w-16" />
            <span className="text-2xl lg:text-2xl font-bold text-gray-800">Pentapolis<br/>Foundation</span>
          </Link>

          {/* Desktop Menu */}
          {/* <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About Us</Link>
            <Link to="/projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
            <Link to="/donate" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Donate Now
            </Link>
          </div> */}

          <div id="nav-part2" className="hidden md:flex items-center space-x-8">
            <h4><Link to ="/">Home</Link></h4>
            <h4><Link to="/about">About Us</Link></h4>
            <h4><Link to="/projects">Projects</Link></h4>
            <h4><Link to ="/contact">Contact Us</Link></h4>
            <Link to="/donate" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6 rounded-md text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 " /> : <Menu className="h-6 w-6 rounded-md text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t py-4 px-4 space-y-4">
            <Link to="/" className="block text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/about" className="block text-gray-600 hover:text-blue-600">About Us</Link>
            <Link to="/projects" className="block text-gray-600 hover:text-blue-600">Projects</Link>
            <Link to="/contact" className="block text-gray-600 hover:text-blue-600">Contact</Link>
            <Link to="/donate" className="block bg-blue-600 text-white px-6 py-2 rounded-full text-center">
              Donate Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;