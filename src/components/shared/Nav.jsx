import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="w-full py-5 border-b px-5 sticky top-0 bg-white z-10">
      <div className="max-w-screen-xl flex justify-between items-center w-full mx-auto">
        <img className="w-16" src="/assets/logo.jpg" alt="tdh logo" />
        <nav
          className={`gap-5 text-lg ${
            open
              ? "absolute flex flex-col top-full right-0 left-0 p-10 bg-white shadow-lg"
              : "hidden md:flex"
          }`}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/research">Research</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
        <button
          onClick={() => setOpen((open) => !open)}
          id="burger"
          className="text-3xl md:hidden"
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Nav;
