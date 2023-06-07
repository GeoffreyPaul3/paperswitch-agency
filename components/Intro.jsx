import React from "react";
import styles from "@/app/Intro.module.css";
import Image from "next/image";
import Circle from "./Circle";

const Intro = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#00b" top="-50vh" left="-50vh" />
      <Circle backgroundColor="skyblue" right="-40vh" />
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>PAPERSWITCH.INC </span>
          MAJOR DIGITAL DESTINATION
        </h1>
        <p className={styles.desc}>
          We are a fast-growing and forward-thinking digital studio focusing in
          visual and motion design, web development, digital marketing, and
          social media management. Our passion is assisting companies like yours
          to prosper in the digital landscape.
        </p>
        <button className={styles.button}>DISCOVER</button>
      </div>
      <div className={styles.card}>
        <Image
          src="/img/Hero.png"
          alt="/"
          width="650"
          height="650"
          style={{ layout: "fill", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default Intro;
