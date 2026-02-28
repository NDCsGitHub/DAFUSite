"use client";
import React, { useState } from "react";
import { Router } from "waku/router/client";
import RouterLink from "./routerLink";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menusOpen, setMenusOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    setServicesOpen(false);
    setMenusOpen(false);
  };
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-4xl text-gray-700 border border-gray-400 rounded-md px-2 py-0 hover:text-gray-900 hover:cursor-pointer hover:bg-yellow-50 transition-colors duration-200"
      >
        ☰
      </button>

      {/* Backdrop */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={handleClose} />}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 shadow-lg z-50 md:hidden transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        style={{ backgroundColor: "#FFF3E2" }}
      >
        <div className="flex flex-col gap-4 p-6">
          <button onClick={handleClose} className="text-2xl text-gray-700 self-end hover:text-gray-900">
            ✕
          </button>

          {/* menus accordion */}
          <div>
            <button
              onClick={() => setMenusOpen(!menusOpen)}
              className="w-full text-lg border border-gray-400 rounded-md px-4 py-2 text-gray-700 bg-white hover:bg-yellow-50 transition-colors duration-200 shadow-sm flex items-center justify-between hover:cursor-pointer"
            >
              Menus
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${menusOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                menusOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-col gap-2 mt-2 ml-4 border-l border-gray-300 pl-4">
                <RouterLink
                  to="/menus/dineIn"
                  className="text-base border border-gray-300 rounded-md px-3 py-1 text-gray-600 bg-gray-50 hover:bg-yellow-50 transition-colors duration-200"
                  onClick={handleClose}
                >
                  Dine-In
                </RouterLink>
                <RouterLink
                  to="/menus/takeout"
                  className="text-base border border-gray-300 rounded-md px-3 py-1 text-gray-600 bg-gray-50 hover:bg-yellow-50 transition-colors duration-200"
                  onClick={handleClose}
                >
                  Takeout
                </RouterLink>
              </div>
            </div>
          </div>

          {/* Services Accordion */}
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full text-lg border border-gray-400 rounded-md px-4 py-2 text-gray-700 bg-white hover:bg-yellow-50 transition-colors duration-200 shadow-sm flex items-center justify-between hover:cursor-pointer"
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                servicesOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-col gap-2 mt-2 ml-4 border-l border-gray-300 pl-4">
                <RouterLink
                  to="/services/catering"
                  className="text-base border border-gray-300 rounded-md px-3 py-1 text-gray-600 bg-gray-50 hover:bg-yellow-50 transition-colors duration-200"
                  onClick={handleClose}
                >
                  Catering
                </RouterLink>
                <RouterLink
                  to="/services/events"
                  className="text-base border border-gray-300 rounded-md px-3 py-1 text-gray-600 bg-gray-50 hover:bg-yellow-50 transition-colors duration-200"
                  onClick={handleClose}
                >
                  Events
                </RouterLink>
                <RouterLink
                  to="/services/parties"
                  className="text-base border border-gray-300 rounded-md px-3 py-1 text-gray-600 bg-gray-50 hover:bg-yellow-50 transition-colors duration-200"
                  onClick={handleClose}
                >
                  Parties
                </RouterLink>
              </div>
            </div>
          </div>

          <RouterLink
            className="w-full text-lg border border-gray-400 rounded-md px-4 py-2 text-gray-700 bg-white hover:bg-yellow-50 transition-colors duration-200 shadow-sm flex items-center justify-between hover:cursor-pointer"
            to="/contact"
            onClick={handleClose}
          >
            Contact
          </RouterLink>
          <RouterLink
            className="w-full text-lg border border-gray-400 rounded-md px-4 py-2 text-gray-700 bg-white hover:bg-yellow-50 transition-colors duration-200 shadow-sm flex items-center justify-between hover:cursor-pointer"
            to="/onlineOrder"
            onClick={handleClose}
          >
            Online Order
          </RouterLink>
          {/* <RouterLink
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
          </RouterLink> */}
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
