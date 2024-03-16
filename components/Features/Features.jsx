import React from "react";
import { Fragment } from "react";

import MainCard from "../../components/MainCard/MainCard";
import featureData from "../../api/featureData";

import styles from "./style/Features.module.scss";

export default function Features() {
  return (
    <div className="container">
      <div className={styles.features}>
        <h1 className="section_heading">Features</h1>
        <p className="section_title">Why choose propell</p>
        <div
          className={`d-flex flex-wrap justify-content-center ${styles.feactures_card}`}
        >
          {featureData.map((item, index) => {
            return (
              <Fragment key={index}>
                <MainCard
                  imgSrc={item.imgSrc}
                  imgAlt={item.imgAlt}
                  imgWidth={151.27}
                  imgHeight={126.14}
                  cardImgStyle={styles.cardImgStyle}
                  cardDimension={styles.cardDimension}
                  title={item.title}
                  titleStyle={styles.titleStyle}
                  para={item.para}
                  paraStyle={styles.paraStyle}
                />
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
