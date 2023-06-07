import data from "@/data";
import Image from "next/image";
import React from "react";
import styles from "@/app/Product.module.css";
import Link from "next/link";
import Head from "next/head";

const Product = ({ product }) => {
  return (
    <div className={styles.container}>
      <div>
        <Head>
          <link href="/favicon.ico" rel="logo" />
          <title>Paper Switch</title>
        </Head>
      </div>
      <div className={styles.cardL}>
        {product.images.map((img) => (
          <div key={img.id} className={styles.imgContainer}>
            <Image
              src={img.url}
              style={{ layout: "fill", objectFit: "cover" }}
              alt="/"
              width="250"
              height="250"
            />
          </div>
        ))}
      </div>
      <div className={styles.cardS}>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.desc}>{product.longDesc}</p>
        <button className={styles.button}>
          <Link href="/contact">Contact</Link>
        </button>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const products = data;
  const paths = products.map((item) => {
    return {
      params: { name: item.name },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const name = ctx.params.name;
  const product = data.filter((item) => item.name === name)[0];
  return {
    props: { product },
  };
};

export default Product;
