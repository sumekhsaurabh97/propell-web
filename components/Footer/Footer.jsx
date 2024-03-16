import React from "react";
import Image from "next/image";

import styles from "./style/Footer.module.scss";

export default function Footer() {
  return (
    <div className={`container-fluid ${styles.footer}`}>
      <div
        className={`container d-flex justify-content-between align-items-center ${styles.footer_inner}`}
      >
        <div className={`d-flex ${styles.social_media}`}>
          <Image
            src={"/assets/images/Instagram.png"}
            alt="instagram"
            width={20}
            height={20}
          />
          <Image
            src={"/assets/images/Facebook.png"}
            alt="facebook"
            width={10}
            height={20}
          />
          <Image
            src={"/assets/images/Twitter.png"}
            alt="twitter"
            width={20}
            height={16.5}
          />
          <Image
            src={"/assets/images/Linkedin.png"}
            alt="linkedin"
            width={20}
            height={20}
          />
        </div>
        <div className={styles.address}>
          <Image
            src={"/assets/images/FooterLogo.png"}
            alt="footerLogo"
            width={124}
            height={61}
          />
          <p className={styles.cmpnyName}>DGT Labs Pvt. Ltd.</p>
          <p>
            House no. 304, Sita Ram Mansion, 718/21 Josi Road Karol Bag, Central
            Delhi, Delhi, India - 110005
          </p>
        </div>
        <div className={styles.privacy_policy}>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
        </div>
      </div>
    </div>
  );
}
