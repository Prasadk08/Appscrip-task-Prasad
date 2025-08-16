import { Search, User, ShoppingBag, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaIcons } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Top Row */}
        <div className="flex justify-between items-center h-20">
          {/* Left Logo */}
          <div className="flex items-center gap-4">
            <FaIcons className="text-xl" />
           
              <a href="/" className="text-lg font-extrabold tracking-wide">LOGO</a>
           
          </div>

          {/* Middle Links */}
          <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
            <a href="/shops" className="hover:text-gray-500">SHOP</a>
            <a href="/skills" className="hover:text-gray-500">SKILLS</a>
            <a href="/stories" className="hover:text-gray-500">STORIES</a>
            <a href="/about" className="hover:text-gray-500">ABOUT</a>
            <a href="/contact" className="hover:text-gray-500">CONTACT US</a>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-6">
            <Search className="w-5 h-5 cursor-pointer hover:text-gray-500" />
            <User className="w-5 h-5 cursor-pointer hover:text-gray-500" />
            <Heart className="w-5 h-5 cursor-pointer hover:text-gray-500" />
            <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-gray-500" />
            <select className="text-sm border-none outline-none bg-transparent cursor-pointer">
              <option>ENG</option>
              <option>HIN</option>
            </select>
          </div>
        </div>

      </div>
    </header>
  );
}
