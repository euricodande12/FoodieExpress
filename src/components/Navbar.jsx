import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";
import NavbarItems from "./NavbarItems";

const menuItems = [
  { icon: TbTruckDelivery, label: "Orders" },
  { icon: MdFavorite, label: "Favorites" },
  { icon: FaWallet, label: "Wallet" },
  { icon: MdHelp, label: "Help" },
  { icon: AiFillTag, label: "Promotions" },
  { icon: BsFillSaveFill, label: "Best One" },
  { icon: FaUserFriends, label: "Invite Friends" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left side */}
      <aside className="flex items-center">
        <div className="cursor-pointer" onClick={() => setNav(!nav)}>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Foodie <span className="font-bold">Express</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-lg p-1 text-[14px]">
          <p className="bg-black text-white rounded-lg p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </aside>

      {/* Search input */}
      <div className="bg-gray-200 rounded-lg flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 focus:outline-none w-full"
          type="text"
          placeholder="Search foods"
        />
      </div>
      {/* Cart button */}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-lg">
        <BsFillCartFill className="mr-2" size={20} />
        Cart
      </button>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          size={25}
          className="absolute right-4 top-4 cursor-pointer"
          onClick={() => setNav(!nav)}
        />
        <h2 className="text-2xl p-4">
          Foodie <span className="font-bold">Express</span>
        </h2>
        <section>
          <ul className="flex flex-col p-4 text-gray-800">
            {menuItems.map((menuItem) => (
              <NavbarItems
                key={menuItem.label}
                icon={menuItem.icon}
                label={menuItem.label}
              />
            ))}
          </ul>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
