"use client";
import React, { useState, useRef, useEffect } from "react";
import RouterLink from "./routerLink";
import { PageRoute } from "../../types/page";

type PopupMenuProps = {
  menuArray: { label: string; to: PageRoute }[];
  triggerLabel: string;
};  

const PopupMenu = (props: PopupMenuProps) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    if (servicesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [servicesOpen]);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setServicesOpen(!servicesOpen)}
        className="text-lg border border-gray-400 rounded-md px-4 py-1 text-gray-700 bg-white hover:bg-yellow-50 transition-colors duration-200 shadow-sm flex items-center gap-2 hover:cursor-pointer"
      >
        {props.triggerLabel}
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
        className={`absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-20 min-w-48 overflow-hidden transition-all duration-300 ease-in-out flex flex-col ${
          servicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {props.menuArray.map((item, index) => (
          <RouterLink
            key={index}
            to={item.to}
            onClick={() => setServicesOpen(false)}
            className="text-base border-0 rounded-none px-4 py-2 text-gray-700 bg-white hover:bg-yellow-50 transition-colors duration-200 shadow-none border-b border-gray-200 last:border-b-0"
          >
            {item.label}
          </RouterLink>
        ))}
      </div>
    </div>
  );
};

export default PopupMenu;
