import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header className="w-full py-5 border-b px-5 sticky top-0 bg-white z-10">
      <div className="max-w-screen-xl flex justify-between items-center w-full mx-auto">
        <img className="w-16" src="/assets/logo.jpg" alt="tdh logo" />
        <nav className="gap-5 hidden md:flex text-lg">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/research">Research</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
        <button id="burger" className="text-3xl md:hidden">
          ☰
        </button>
      </div>
    </header>
  );
};

export default Nav;
