import React from "react";

import styles from "./style/QuickTour.module.scss";

export default function QuickTour(props) {
  return (
    <div className="container">
      <div className={props.quick_tour}>
        <h1 className="section_heading">{props.section_heading}</h1>
        <p className="section_title">{props.section_title}</p>
        <div className={styles.tripVideo}>
          <iframe
            width="100%"
            height="489px"
            src="https://www.youtube.com/embed/3tn5uoiVgGo"
            style={{ borderRadius: "1px" }}
          ></iframe>
          <p>
            Propell enables Loan against Mutual Funds for our clients with the
            support of Partners, RTAs & Depositories to provide end customers a
            completely new to market digital product.
          </p>
        </div>
      </div>
    </div>
  );
}
