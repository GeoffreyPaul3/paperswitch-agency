import React from "react";
import styles from "@/app/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>PAPER SWITCH.INC</h1>
        <h1 className={styles.linkTitle}>
          <Link href="/contact" passHref>
            <span className={styles.linkText}>WORK WITH US</span>
            <Image src="/img/link.png" alt="/" width="40" height="40" />
          </Link>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          Kanjedza Blantyre <br /> Malawi
        </div>
        <div className={styles.cardItem}>
          paperswitch.inc@gmail.com <br /> +265 992132195
        </div>
      </div>

      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          Follow Us:
          <br /> 
          <div className={styles.FooterLogo}>
          <Image src="/img/facebook.png" width="20" height="20" alt="/" />
          <Image src="/img/twiiter.png" width="20" height="20" alt="/" />
          <Image src="/img/instagram.png" width="20" height="20" alt="/" />
          </div>
        </div>
        <div className={styles.cardItem}>
          @ 2023 PAPERSWITCH.INC,
          <br /> ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
