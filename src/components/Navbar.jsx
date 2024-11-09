import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="fixed top-4 z-50 flex w-full flex-col items-center justify-center">
      <div className="flex w-full items-center justify-between overflow-y-hidden p-4 backdrop-blur-lg lg:m-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg">
        <h1 className="font-bold">
          <a href="#home">Restaurant</a>
        </h1>
        <ul className="hidden space-x-6 lg:flex text-sm">
          <li className=" border-neutral-300/20 hover:opacity-50 ">
            <a href="#dishes">Dishes</a>
          </li>
          <li className="border-l-2 border-neutral-300/20 pl-2 hover:opacity-50">
            <a href="#about">About</a>
          </li>
          <li className="border-l-2 border-neutral-300/20 pl-2 hover:opacity-50">
            <a href="#mission">Mission</a>
          </li>
          <li className="border-l-2 border-neutral-300/20 pl-2 hover:opacity-50">
            <a href="#expertise">Expertise</a>
          </li>
          <li className="border-l-2 border-neutral-300/20 pl-2 hover:opacity-50">
            <a href="#review">Review</a>
          </li>
          <li className="border-l-2 border-neutral-300/20 pl-2 hover:opacity-50">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {menu ? <IoClose size={20} /> : <IoMenu size={20} />}
          </button>
        </div>
      </div>
      {menu && (
        <ul className=" backdrop-blur-lg shadow-lg w-full flex flex-col items-center justify-center py-2 space-y-2 lg:hidden">
          <li>
            <a href="#dishes">Dishes</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#mission">Mission</a>
          </li>
          <li>
            <a href="#expertise">Expertise</a>
          </li>
          <li>
            <a href="#review">Review</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
