import React from "react";
import styles from "@/app/Services.module.css";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/data"; // Importing the services array directly

const Services = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>What We Can Do?</h1>
      <h1 className={styles.subtitle}>Services we can help you with</h1>
      <div className={styles.services}>
        {services.map((service) => (
          <Link passHref key={service.id} href={`/products/${service.name}`}>
            <div className={styles.service}>
              <div className={styles.catInfo}>{service.desc}</div>
              <span className={styles.cat}>{service.title}</span>
              <div className={styles.media}>
                {service.video ? (
                  <video
                    src={`/img/${service.video}`}
                    autoPlay
                    loop
                    className={styles.video}
                  />
                ) : (
                  <Image
                    src={`/img/${service.photo}`}
                    alt="/"
                    width="410"
                    height="410"
                    style={{ layout: "responsive", objectFit: "cover" }}
                  />
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
