import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./style/Header.module.scss";

export default function Header() {
  const [width, setWidth] = useState("0%");

  return (
    <>
      <div className={`fluid-container ${styles.header_outer}`}>
        <div
          className={`container d-flex justify-content-between ${styles.header_inner}`}
        >
          <Link href="/">
            <div className={styles.logo}>
              <Image
                src={"/assets/images/Logo.png"}
                alt="Logo"
                width={75}
                height={40}
              />
            </div>
          </Link>
          <div>
            <ul className={`d-flex ${styles.nav_list}`}>
              <Link href="/">
                <li>Contact Us</li>
              </Link>
              <Link href="/AboutUs">
                <li>About Us</li>
              </Link>
              <Link href="/Lenders">
                <li>For lenders</li>
              </Link>
              <Link href="/Fintech">
                <li>For Fintechs</li>
              </Link>
              <Link href="/Distributors">
                <li>For Distributors</li>
              </Link>
              <li id={styles.btn}>
                <button className={styles.btn}>Sign In</button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={` ${styles.header} ${styles.small_header}`}>
        <div id="mySidenav" className={styles.sidenav} style={{ width: width }}>
          <div className={styles.hello}>
            <a
              href="javascript:void(0)"
              className={styles.closebtn}
              onClick={() => {
                setWidth("0%");
              }}
              style={{ color: "#4a4a92" }}
            >
              &times;
            </a>
          </div>
          <div className={styles.navList}>
            <Link href="/">
              <a>Contact Us</a>
            </Link>
          </div>
          <div className={styles.navList}>
            <Link href="/AboutUs">
              <a>About Us</a>
            </Link>
          </div>
          <div className={styles.navList}>
            <Link href="/Lenders">
              <a>For lenders</a>
            </Link>
          </div>
          <div className={styles.navList}>
            <Link href="/Fintech">
              <a>For Fintechs</a>
            </Link>
          </div>
          <div className={styles.navList}>
            <Link href="/Distributors">
              <a>For Distributors</a>
            </Link>
          </div>
          <div className={styles.navList}>
            <a>
              <button className={styles.btn}>Sign In</button>
            </a>
          </div>
        </div>
        <div className={styles.opnebtn}>
          <span
            style={{
              fontSize: "30px",
              cursor: "pointer",
              fontWeight: "600",
              color: "#4a4a92",
            }}
            onClick={() => {
              setWidth("100%");
            }}
          >
            &#9776;
          </span>
          <Link href="/">
            <div className={styles.small_logo}>
              <Image
                src={"/assets/images/Logo.png"}
                alt="logo"
                width={75}
                height={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
