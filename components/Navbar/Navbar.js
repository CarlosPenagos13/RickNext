import React from "react";
import Link from "next/link";
import { Nav } from "./Styled";

const Navbar = () => {
  return (
    <Nav>
      <menu>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </menu>
    </Nav>
  );
};

export default Navbar;
