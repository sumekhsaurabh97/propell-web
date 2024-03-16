import React, { useEffect, useRef, useState, Fragment } from "react";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./style/IndustryBlogsCarousel.module.scss";
import MainCard from "../MainCard/MainCard";
import CarouselData from "../../api/CarouselData";

const IndustryBlogsCarousel = () => {
  const [infiniteSlider, setInfiniteSlider] = useState(true);
  const slider = useRef(null);

 

  var settingsCourses = {
    dots: false,
    arrows: false,
    infinite: infiniteSlider,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 3,
          arrows: false,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          arrows: false,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
          slidesToScroll: 1,
          initialSlide: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1,
          dots: false,
          // dotsClass: `slick-dots ${styles.dots}`,
        },
      },
    ],
  };

  return (
    <>
      <div className="container">
        <div className={styles.industry_blogs}>
          <h1 className="section_heading">Industry Blogs</h1>
          <p className="section_title">
            Explore more about recent developments
          </p>
        </div>
      </div>
      <div className={` ${styles.container}`}>
        <div className="position-relative" style={{position :'relative'}}>
          {CarouselData.length > 3 ? (
            <div className={` ${styles.arrow}`}>
              <div className={`${styles.next}`}>
                <Image
                  src={"/assets/images/Arrow.png"}
                  width={20}
                  height={35}
                  alt="nav"
                  onClick={() => slider?.current?.slickNext()}
                />
              </div>
            </div>
          ) : (
            ""
          )}
          <Slider
            {...settingsCourses}
            ref={slider}
            className={styles.carouselCards}
          >
            {CarouselData.map((item, index) => {
              return (
                <Fragment key={index}>
                  <MainCard
                    cardDimension={styles.box}
                    cardImgStyle={styles.imgBg}
                    imgSrc={item.imgSrc}
                    imgAlt={"carouselImg"}
                    imgWidth={423}
                    imgHeight={165}
                    shadowStyle={styles.shadowPossition}
                    imgSrcShadow={"/assets/images/BgShadow.svg"}
                    imgAltShadow={"carouselImg"}
                    imgWidthShadow={423}
                    imgHeightShadow={165}
                    updateDate={item.date}
                    dateStyle={styles.dateStyle}
                    title={item.title}
                    titleStyle={styles.titleStyle}
                    para = {item.description}
                    paraStyle={styles.paraStyle}
                    summary={"Read more"}
                    summaryStyle={styles.ReadMore}
                    btnStyle={styles.btnStyle}
                  />      
                </Fragment>
              );
            })}
          </Slider>
            <div className={styles.shadow}></div>
        </div>
      </div>
    </>
  );
};

export default IndustryBlogsCarousel;
