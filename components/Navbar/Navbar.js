import React from "react";
import Link from "next/link";
import { A, Menu, Nav } from "./Styled";

const Navbar = () => {
  return (
    <Nav>
      <Menu>
        <Link href="/">
          <A>Home</A>
        </Link>
        <Link href="/about">
          <A>About</A>
        </Link>
      </Menu>
    </Nav>
  );
};

export default Navbar;
