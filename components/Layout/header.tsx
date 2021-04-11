import React, { FC } from "react";
import NavItem from "../NavItem";

const Header: FC = () => {
  return (
    <header className="py-8 flex items-center justify-between bg-white dark:bg-black">
      <a href="/">
        <img className="filter dark:invert" src="/assets/kaichi.webp" />
      </a>
      <div className="hidden md:block space-x-8">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/me">Me</NavItem>
      </div>
    </header>
  );
};

export default Header;
