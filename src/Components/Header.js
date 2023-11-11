import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./styles.css"; // Importez votre fichier CSS

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Ajout de l'état pour suivre le défilement
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0; // Vérifie si la page est défilée
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  const isHomePage = location.pathname === "/";

  return (
    <header className={`container mx-auto py-2 max-width ${isOpen ? "header-bg" : ""} centered-nav ${isHomePage ? "home-background" : ""} ${isScrolled ? "scrolled" : ""} flex justify-center`}>
      <div className="flex items-center">
      </div>
      <nav className={`flex flex-col items-center ${!isOpen ? "hidden" : null} text-center md:flex justify-between`}>
      <ul className="dark:text-light-content font-medium md:flex items-center md:space-x-5 md:mr-10">
          <li className="pb-1 md:pb-0">
            <NavLink to="/" onClick={toggleClass}>
              HOME
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/technologies" onClick={toggleClass}>
              LANGUAGES
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/projects" onClick={toggleClass}>
              PROJECTS
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/about" onClick={toggleClass}>
              CEO
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={toggleClass}>
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

