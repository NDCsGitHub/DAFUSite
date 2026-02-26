"use client";
import React, { useState } from "react";
import RouterLink from "./RouterLink";
import { Router } from "waku/router/client";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    setServicesOpen(false);
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
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 md:hidden transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-4 p-6">
          <button onClick={handleClose} className="text-2xl text-gray-700 self-end hover:text-gray-900">
            ✕
          </button>
          <RouterLink
            to="/menu"
            onClick={handleClose}
            className="w-full text-lg border border-gray-400 rounded-md px-4 py-2 text-gray-700 bg-white hover:bg-yellow-50 transition-colors duration-200 shadow-sm flex items-center justify-between hover:cursor-pointer"
          >
            Menu
          </RouterLink>

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
                  Private Dining
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
            to="/about"
            className="text-lg border border-gray-400 rounded-md px-4 py-2 text-gray-700 bg-white hover:bg-yellow-50 transition-colors duration-200 shadow-sm"
            onClick={handleClose}
          >
            About
          </RouterLink>
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
      </div>
    </div>
  );
};

export default HamburgerMenu;
