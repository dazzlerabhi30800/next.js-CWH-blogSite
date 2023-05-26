import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Navbar = ({ setColor }) => {
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>newbieCoder</span>
      <ul className={styles.links}>
        <li onClick={() => setColor("#fb3f68")}>
          <Link href="/">Home</Link>
        </li>
        <li onClick={() => setColor("#f7ad62")}>
          <Link href="/about">About</Link>
        </li>
        <li onClick={() => setColor("#62f7f1")}>
          <Link href="/contact">Contact</Link>
        </li>
        <li onClick={() => setColor("#b7fc2e")}>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
