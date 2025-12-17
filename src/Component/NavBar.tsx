import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
// material icons
import RssFeedIcon from "@mui/icons-material/RssFeed";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import InputIcon from "@mui/icons-material/Input";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";

function NavBar() {
  //for search box
  const [sBox, setSBox] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    function handleCloseOutside(event) {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setSBox(false);
      }
    }

    document.addEventListener("mousedown", handleCloseOutside);
    return () => document.removeEventListener("mousedown", handleCloseOutside);
  }, []);

  //for burger menu
  const [burgerMenu, setBurgerMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function menuOutSideClose(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setBurgerMenu(false);
      }
    }

    document.addEventListener("mousedown", menuOutSideClose);
    return () => document.removeEventListener("mousedown", menuOutSideClose);
  }, []);

  return (
    <div>
      <header>
        {/** Top Bar */}
        <div className="top-bar ">
          <div className="top-bar-right xl:block lg:block hidden">
            <span>
              {" "}
              <RssFeedIcon />
            </span>
            <p>Blog Tile</p>
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
        {/** logo section */}
        <div className="main-logo">
          <p>
            <span>B</span>LOG <span>X</span>
          </p>
        </div>
        {/** the nav bar */}
        <nav className="w-full flex flex flex justify-around  items-center bg-[var(--bg-sec)] text-[var(--color-primary)] h-15  ">
          {/**for mobil */}
          <div
            onClick={() => setBurgerMenu(!burgerMenu)}
            className="xl:hidden lg:hdden bg-white px-1 py-2 rounded-full "
          >
            <span className="block bg-[var(--bg-primary)] w-8 h-1 rounded-lg mt-0.5"></span>
            <span className="block bg-[var(--bg-primary)] w-6 h-1 rounded-lg mt-0.5"></span>
            <span className="block bg-[var(--bg-primary)] w-2 h-1 rounded-lg mt-0.5"></span>
            <span className="block bg-[var(--bg-primary)] w-7 h-1 rounded-lg mt-0.5"></span>
          </div>
          {/**for descktop */}
          <div>
            <ul className="xl:flex lg:flex hidden justify-center items-center xl:gap-10 lg:gap-10  h-15">
              <li className="text-[18px] font-medium  h-15 flex justify-center items-center hover:text-[var(--bg-sec)] hover:bg-[var(--color-primary)] transition-all duration-300 p-2">
                <NavLink to="#">Home</NavLink>
              </li>
              <li className="text-[18px] font-medium  h-15 flex justify-center items-center hover:text-[var(--bg-sec)] hover:bg-[var(--color-primary)] transition-all duration-300 p-2">
                <NavLink to="#">Blogs</NavLink>
              </li>
              <li className="text-[18px] font-medium  h-15 flex justify-center items-center hover:text-[var(--bg-sec)] hover:bg-[var(--color-primary)] transition-all duration-300 p-2">
                <NavLink to="#">contact us</NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center gap-10">
            <InputIcon className="transition-all duration-300 hover:scale-105 cursor-pointer" />
            <div className="relative">
              <div
                onClick={() => setSBox(true)}
                className="cursor-pointer transition-transform duration-300 hover:scale-105 "
              >
                <SearchIcon />
              </div>
              {sBox && (
                <div
                  ref={boxRef}
                  className="absolute left-1/2 top-full mt-4 xl:-translate-x-1/2 lg:-translate-x-1/2 md:-translate-x-1/2 -translate-x-5/5
                  w-[280px] rounded-lg bg-[var(--bg-sec)]
                  px-6 py-4 shadow-lg mt-5  z-999"
                >
                  <form className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                      type="submit"
                      value="Search"
                      className="cursor-pointer rounded-md bg-[var(--bg-primary)] px-4 py-2 text-sm text-white transition-colors duration-200 hover:bg-[var(--bg-primary)]/50"
                    />
                  </form>
                </div>
              )}
            </div>
          </div>
        </nav>
        {burgerMenu && (
          <div
            ref={menuRef}
            className="absolute bg-[var(--bg-primary)] w-full mx-auto z-999"
          >
            <ul className="xl:hidden flex-row px-10 py-8 ">
              <li className="text-[18px] font-medium  text-white transition-all duration-300 p-2 ">
                <NavLink to="#">Home</NavLink>
              </li>
              <li className="text-[18px] font-medium text-white  transition-all duration-300 p-2">
                <NavLink to="#">Blogs</NavLink>
              </li>
              <li className="text-[18px] font-medium  text-white transition-all duration-300 p-2">
                <NavLink to="#">contact us</NavLink>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}

export default NavBar;
