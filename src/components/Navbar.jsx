import { useState } from 'react';
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Work", href: "#work" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.03] bg-zinc-950/70 backdrop-blur-md select-none">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section */}
          <a href="#" className="text-xl font-light tracking-[0.15em] text-white uppercase">
            249<span className="font-semibold text-zinc-400">EDIT</span>
          </a>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold tracking-widest text-zinc-400 uppercase transition-colors duration-300 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-xs font-semibold tracking-wider text-white uppercase transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-zinc-400 hover:text-white transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-white/[0.05] bg-zinc-950/95 backdrop-blur-lg px-6 py-6 shadow-2xl">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium tracking-wide text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 text-center rounded-full bg-white py-3 text-sm font-semibold text-black"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
