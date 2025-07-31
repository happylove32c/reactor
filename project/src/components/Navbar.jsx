import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-purple-600">SlickNav</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700">
          <a href="#" className="hover:text-purple-600">Home</a>
          <a href="#" className="hover:text-purple-600">About</a>
          <a href="#" className="hover:text-purple-600">Services</a>
          <a href="#" className="hover:text-purple-600">Contact</a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 text-gray-700">
          <a href="#" className="block hover:text-purple-600">Home</a>
          <a href="#" className="block hover:text-purple-600">About</a>
          <a href="#" className="block hover:text-purple-600">Services</a>
          <a href="#" className="block hover:text-purple-600">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
