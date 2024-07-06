import React from "react";

const NavbarItems = ({ icon: Icon, label }) => {
  return (
    <li className="text-xl py-4 flex hover:text-black cursor-pointer">
      <Icon size={25} className="mr-4" />
      {label}
    </li>
  );
};

export default NavbarItems;
