import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <aside className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Foodie <span>Express</span>
        </h1>
        <div>
            <p>Delivery</p>
            <p>Pickup</p>
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;
