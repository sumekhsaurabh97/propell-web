import React from "react";

import styles from "./style/ContactUs.module.scss";

export default function ContactUs() {
  return (
    <div className={`container-fluid ${styles.contactUs}`}>
      <div
        className={`container d-flex justify-content-between ${styles.contactUs_inner}`}
      >
        <div>
          <p>Connect with us to know more</p>
          <span className={styles.contactNo}>+91 9848987892</span>{" "}
          <span>propell@help.in</span>
        </div>
        <div className={styles.btn}>
          <button>Contact Us</button>
          <button className={styles.getStart}>Get started</button>
        </div>
      </div>
    </div>
  );
}
