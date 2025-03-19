"use client";
import Link from "next/link";
import React, { useState } from "react";
import SearchIcon from "./icons/SearchIcon";
import BurgerMenuIcon from "./icons/BurgerMenuIcon";
import MessageIcon from "./icons/MessageIcon";
import { righteous } from "./page";

export default function Navbar() {
  const [messageCount, setMessageCount] = useState(4);

  return (
    <div className="flex justify-between items-center p-6">
      {/* Logo */}
      <div className="flex-1 flex justify-center">
        <p
          className={`text-3xl font-bold tracking-widest`}
          style={{ fontFamily: "var(--font-righteous)" }}
        >
          GYMTEAM
        </p>
      </div>

      {/* Navigation Links - Hidden on small screens */}
      <div className="hidden sm:flex flex-1 justify-center items-center gap-12 text-md font-sans">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* Icons & Burger Menu (Burger is always visible) */}
      <div className="flex-1 flex justify-center items-center gap-3 relative">
        <SearchIcon />
        <div className="relative">
          <MessageIcon />
          {messageCount > 0 && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {messageCount}
            </div>
          )}
        </div>

        {/* Burger Menu - Always Visible */}
        <div className="flex">
          <BurgerMenuIcon />
        </div>
      </div>
    </div>
  );
}
