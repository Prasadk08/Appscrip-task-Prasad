import { Search, User, ShoppingBag, Heart } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Top Row */}
        <div className="flex justify-between items-center h-20">
          {/* Left Logo */}
          <div className="flex items-center gap-4">
            <Image
              src="/logo-icon.svg" // तुझ्या लोगोचा path
              alt="Logo"
              width={32}
              height={32}
            />
            <h1 className="text-lg font-extrabold tracking-wide">LOGO</h1>
          </div>

          {/* Middle Links */}
          <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
            <a href="#" className="hover:text-gray-500">SHOP</a>
            <a href="#" className="hover:text-gray-500">SKILLS</a>
            <a href="#" className="hover:text-gray-500">STORIES</a>
            <a href="#" className="hover:text-gray-500">ABOUT</a>
            <a href="#" className="hover:text-gray-500">CONTACT US</a>
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
