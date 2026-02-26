import { Link } from "waku";
import { useState } from "react";
import HamburgerMenu from "../ui/hamburgerMenu";
import PopupMenu from "../ui/PopupMenu";
import { Router } from "waku/router/client";
import RouterLink from "../ui/RouterLink";

export const Header = () => {
  const modules = import.meta.glob("./*.tsx", { eager: true });

  return (
    <header className="flex items-center gap-4 p-4 lg:fixed lg:left-0 lg:top-0 border-b border-gray-300 bg-white w-full">
      <h2 className="text-lg  font-bold tracking-tight min-w-20 w-49 px-2 py-1 shrink-0">
        <RouterLink to="/" className="flex items-center gap-2">
          <img src="/public/images/dafuLogo.png" className="w-20 h-auto mr-2" />
          Da Fu Seafood Restaurant
        </RouterLink>
      </h2>

      <nav className="flex w-full justify-end items-center gap-2 flex-wrap ml-auto">
        <div className="flex items-center gap-2 md:hidden">
          <HamburgerMenu />
        </div>
        <div className="hidden md:flex items-center gap-2">
          <RouterLink to="/menu">Menu</RouterLink>
          <PopupMenu />
          <RouterLink to="/contact">Contact</RouterLink>

          <RouterLink to="/about">About</RouterLink>
          <RouterLink
            to="/cart"
            className="flex items-center gap-2 text-lg border border-gray-400 rounded-md px-4 py-1 text-gray-700 bg-white hover:bg-yellow-50 transition-colors duration-200 shadow-sm"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            Cart
          </RouterLink>
        </div>
      </nav>
    </header>
  );
};
