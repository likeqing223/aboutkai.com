import React, { FC } from "react";
import NavItem from "../NavItem";

const Header: FC = () => {
  return (
    <header className="pb-8 flex items-center justify-between bg-white dark:bg-black">
      <a href="/" className="inline-flex items-center">
        <span
          className="text-6xl dark:text-white"
          style={{
            fontFamily: "JCfg, PilGi",
          }}
        >
          kaichi
        </span>
      </a>
      <div className="space-x-6">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/tags">Tag</NavItem>
        <NavItem href="/contact">Contact</NavItem>
      </div>
    </header>
  );
};

export default Header;
