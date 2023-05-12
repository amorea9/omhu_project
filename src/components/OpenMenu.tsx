import React from "react";
import CloseIcon from "../assets/Close_icon.svg";
import Image from "next/image";

function OpenMenu(props: { showMenu: boolean; setShowMenu: Function }) {
  return (
    <div className="text-blue h-72 flex flex-col absolute w-full mt-0 bg-white">
      <Image onClick={() => props.setShowMenu(!props.showMenu)} className="cursor-pointer text-right" src={CloseIcon} alt="Burger menu close icon" />
      <ul className="nav_links flex flex-col">
        <li className="py-2 px-8 ">
          {" "}
          <a href="/shop" className="uppercase">
            Shop
          </a>
        </li>
        <li className="py-2 px-8">
          {" "}
          <a href="/showroom" className="uppercase">
            Showroom
          </a>
        </li>
        <li className="py-2 px-8">
          {" "}
          <a href="/about" className="uppercase">
            About us
          </a>
        </li>
        <li className="py-2 px-8">
          {" "}
          <a href="/contact" className="uppercase">
            Contact
          </a>
        </li>
        <li className="py-2 px-8">
          {" "}
          <a href="/faq" className="uppercase">
            FAQ
          </a>
        </li>
      </ul>
    </div>
  );
}

export default OpenMenu;
