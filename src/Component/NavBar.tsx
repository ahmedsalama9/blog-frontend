import { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// material icons
import RssFeedIcon from "@mui/icons-material/RssFeed";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import SearchIcon from "@mui/icons-material/Search";

function NavBar() {
  // Search box
  const [sBox, setSBox] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleCloseOutside(event: MouseEvent) {
      if (
        boxRef.current &&
        event.target instanceof Node &&
        !boxRef.current.contains(event.target)
      ) {
        setSBox(false);
      }
    }

    document.addEventListener("mousedown", handleCloseOutside);
    return () =>
      document.removeEventListener("mousedown", handleCloseOutside);
  }, []);

  // Burger menu
  const [burgerMenu, setBurgerMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function menuOutSideClose(event: MouseEvent) {
      if (
        menuRef.current &&
        event.target instanceof Node &&
        !menuRef.current.contains(event.target)
      ) {
        setBurgerMenu(false);
      }
    }

    document.addEventListener("mousedown", menuOutSideClose);
    return () =>
      document.removeEventListener("mousedown", menuOutSideClose);
  }, []);

  return (
    <header>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-right xl:block lg:block hidden">
          <RssFeedIcon />
          <p>BlogX</p>
        </div>
        <div className="social-media_icons">
          <FacebookIcon />
          <XIcon />
          <YouTubeIcon />
          <InstagramIcon />
          <WhatsAppIcon />
          <TelegramIcon />
        </div>
      </div>

      {/* Logo */}
      <div className="main-logo">
        <p>
          <span>B</span>LOG <span>X</span>
        </p>
      </div>

      {/* Navbar */}
      <nav className="w-full flex justify-around items-center bg-[var(--bg-sec)] text-[var(--color-primary)] h-15">
        {/* Mobile Burger */}
        <div
          onClick={() => setBurgerMenu(!burgerMenu)}
          className="xl:hidden lg:hidden bg-white px-1 py-2 rounded-full cursor-pointer"
        >
          <span className="block bg-[var(--bg-primary)] w-8 h-1 rounded-lg mt-0.5" />
          <span className="block bg-[var(--bg-primary)] w-6 h-1 rounded-lg mt-0.5" />
          <span className="block bg-[var(--bg-primary)] w-2 h-1 rounded-lg mt-0.5" />
          <span className="block bg-[var(--bg-primary)] w-7 h-1 rounded-lg mt-0.5" />
        </div>

        {/* Desktop Menu */}
        <ul className="xl:flex lg:flex hidden gap-10 font-medium">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About us</NavLink></li>
          <li><NavLink to="/contact-us">Contact us</NavLink></li>
        </ul>

        {/* Search */}
        <div className="relative">
          <SearchIcon
            onClick={() => setSBox(true)}
            className="cursor-pointer hover:scale-105 transition"
          />
          {sBox && (
            <div
              ref={boxRef}
              className="absolute left-1/2 top-full mt-4 -translate-x-1/2 w-[280px] bg-[var(--bg-sec)] p-4 rounded-lg shadow-lg z-50"
            >
              <form className="flex gap-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full border px-3 py-2 rounded"
                />
                <button className="bg-[var(--bg-primary)] text-white px-4 rounded">
                  Search
                </button>
              </form>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {burgerMenu && (
        <div
          ref={menuRef}
          className="absolute bg-[var(--bg-primary)] w-full z-50"
        >
          <ul className="px-10 py-8 text-white">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About us</NavLink></li>
            <li><NavLink to="/contact-us">Contact us</NavLink></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default NavBar;
