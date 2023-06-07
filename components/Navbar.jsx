"use client";

import React, { useState } from "react";
import styles from "@/app/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Link href="/">
        <Image src="/img/Logo.png" width="60" height="60" alt="/"/>
      </Link>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/products/design">DESIGN</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/development">DEVELOPMENT</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/marketing">MARKETING</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/management">MANAGEMENT</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/writing">WRITING</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/contact">CONTACT</Link>
        </li>
      </ul>
      <div className={styles.hamburger} 
           onClick={() => setOpen(!open)}
           
           >
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
      <ul onClick={()=>setOpen(false)} className={styles.menu} style={{ right: open ? "0px" : "-50vw" }}>
        <li className={styles.menuItem}>
          <Link href="/">HOME</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/products/design">DESIGN</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/products/development">DEVELOPMENT</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/products/marketing">MARKETING</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/products/management">MANAGEMENT</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/products/writing">WRITING</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
