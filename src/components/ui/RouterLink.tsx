import React from "react";
import { Link } from "waku";
import { PageRoute } from "../../types/page";


type RouterLinkProps = {
  to: PageRoute;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const RouterLink = ({ to, children, className, onClick }: RouterLinkProps) => {
  return (
    <Link
      to={to}
      className={className ? className : "text-lg border border-gray-400 rounded-md px-4 py-1 text-gray-700 bg-white hover:bg-yellow-50 transition-colors duration-200 shadow-sm"}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default RouterLink;
