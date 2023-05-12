import React from "react";
import Logo from "../assets/Logo_sq_blueBG_filled_500x500.svg";
import Cart from "../assets/Cart_icon.svg";
import Image from "next/image";

function Navigation() {
  return (
    <div>
      <div className="nav_wrapper flex flex-row items-center justify-between mx-10 my-5 text-blue">
        <div className="flex flex-row items-center justify-aroun gap-5">
          {" "}
          <Image className="logo w-14" src={Logo} alt="Omhu logo" />
          <ul className="nav_links flex flex-row ">
            <li className=" border-l-1.5 border-t-1.5 border-b-1.5 border-blue py-2 px-8 ">
              {" "}
              <a href="/shop" className="uppercase">
                Shop
              </a>
            </li>
            <li className="border-l-1.5 border-t-1.5 border-b-1.5  border-blue py-2 px-8">
              {" "}
              <a href="/showroom" className="uppercase">
                Showroom
              </a>
            </li>
            <li className="border-l-1.5 border-t-1.5 border-b-1.5  border-blue py-2 px-8">
              {" "}
              <a href="/about" className="uppercase">
                About us
              </a>
            </li>
            <li className="border-l-1.5 border-t-1.5 border-b-1.5  border-blue py-2 px-8">
              {" "}
              <a href="/contact" className="uppercase">
                Contact
              </a>
            </li>
            <li className="border-1.5 border-blue py-2 px-8">
              {" "}
              <a href="/contact" className="uppercase">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <Image className="cart w-9" src={Cart} alt="Cart icon" />
      </div>
    </div>
  );
}

export default Navigation;
