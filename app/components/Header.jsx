"use client";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [nav, setNav] = useState(false);
  // console.log(getComputedStyle(document.body).fontFamily);

  return (
    <div className="px-6 py-2 flex justify-between  items-center sticky top-0 left-0 bg-blue_3 z-[999]">
      <a className="text-lg" href="/">
        Ice<span className="text-purple_2">Vista</span>
      </a>
      <div className="hidden md:flex md:text-sm">
        <ul className="flex justify-between gap-3 ">
          <li>
            <Link href="/ot">About Us</Link>
          </li>
          <li>
            <Link href="/ot">Products</Link>
          </li>
          <li>
            <Link href="/ot">Pricing</Link>
          </li>
          <li>
            <Link href="/ot">Blog</Link>
          </li>
          <li>
            <Link href="/ot">Contact Us</Link>
          </li>
        </ul>
      </div>

      <div className="hidden md:flex md:text-sm">
        <ul className="flex gap-2 justify-center items-center">
          <li>
            <Link href="/ot">Login</Link>
          </li>
          <li>
            {" "}
            <Link className="bg-blue_1 px-4 py-2 rounded-3xl" href="/ot">
              Start Free Trial
            </Link>
          </li>
        </ul>
      </div>

      <div
        className="menu md:hidden"
        onClick={() => {
          setNav(!nav);
        }}
      >
        <p className="">menu</p>
      </div>
        <div className={`fixed bg-white text-black w-[90%] left-[50%] top-14   py-7 px-5 text-2xl rounded-3xl z-[999] ${nav?'translate-x-[-50%] ':'translate-x-[80%]'} ease-in-out transition`}>
          <ul className="m-auto space-y-3">
            <li>
              <Link href="/ot">About Us</Link>
            </li>
            <li>
              <Link href="/ot">Products</Link>
            </li>
            <li>
              <Link href="/ot">Pricing</Link>
            </li>
            <li>
              <Link href="/ot">Blog</Link>
            </li>
            <li>
              <Link href="/ot">Contact Us</Link>
            </li>
            <li>
              <Link href="/ot">Login</Link>
            </li>
            <li>
              <Link href="/ot">Start Free Trial</Link>
            </li>
          </ul>
      </div>
    </div>
  );
};

export default Header;
