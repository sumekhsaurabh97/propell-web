import React from "react";
import Image from "next/image";
import Head from "next/head";

import Header from "../../components/Header/Header";
import DelightYourCustomers from "../../components/DelightYourCustomers/DelightYourCustomers";
import ContactUs from "../../components/ContactUs/ContactUs";
import QuickTour from "../../components/QuickTour/QuickTour";
import MainCard from "../../components/MainCard/MainCard";
import Footer from "../../components/Footer/Footer";

import HelpYourCustomers from "../../api/HelpYourCustomers";
import HowItWork from "../../api/HowItWork";

import styles from "../Distributors/styles/Distributors.module.scss";

export default function index() {
  return (
    <>
      <Head>
        <title>For Distributors - Propell</title>
        <meta
          name="keywords"
          content="Loan against Mutual Funds, Loan against securities, Loan against stocks, Instant Loans, Quick Loans, Secured Lending"
        />
        <meta
          name="description"
          content="Boost your income and help your clients achieve their investment goals by providing instant secured credit against their MF units"
        ></meta>
      </Head>
      <Header />
      <div
        className={`hero_section d-flex justify-content-center ${styles.heroSection}`}
      >
        <Image
          src="/assets/images/propellDistributorsImg_1.png"
          alt={"imgAlt"}
          width={350}
          height={496}
        />
        <div className={`text-center ${styles.heroSection_text}`}>
          <h1
            className="section_heading"
            style={{
              maxWidth: "627px",
              padding: "0px 15px 0px 15px",
            }}
          >
            Propell Distributors Platform
          </h1>
          <p
            className="section_title"
            style={{ maxWidth: "642px", marginBottom: "20px" }}
          >
            Boost your secured lending book to enable Loan against Mutual Funds
            and reach potential 100 million+ customers via Fintech partners,
            Financial Advisors and Distributors
          </p>
          <button className="btn-m">Contact Us</button>
        </div>
        <Image
          src="/assets/images/propellDistributorsImg_2.png"
          alt={"imgAlt"}
          width={350}
          height={496}
        />
      </div>
      <DelightYourCustomers
        section_container={styles.section_container}
        section_heading={"Help your customers"}
        section_title={"And grow you business with the help of propell"}
        data={HelpYourCustomers}
        cardDimension={styles.cardDimension}
        imgWidth={160}
        imgHeight={160}
        cards_dis={styles.cards_dis}
        cardImgStyle={styles.cardImgStyle}
        titleStyle={styles.titleStyle}
        paraStyle={styles.paraStyle}
        summaryStyle={styles.summaryStyle}
        btnStyle={`btn-m ${styles.btnStyle}`}
      />
      <DelightYourCustomers
        section_container={styles.section_container}
        section_heading={"How it works"}
        section_title={"Take a look how can you earn with propell"}
        data={HowItWork}
        cardDimension={styles.howItWork_cardDimension}
        imgWidth={151}
        imgHeight={125}
        cards_dis={`${styles.howItWork_cards_dis}`}
        cardImgStyle={styles.howItWork_cardImgStyle}
        titleStyle={styles.howItWork_titleStyle}
        paraStyle={styles.howItWork_paraStyle}
        shadowStyle={styles.shadowStyle}
      />
      <ContactUs />
      <QuickTour
        quick_tour={styles.quick_tour}
        section_heading={"Quick tour for your customers"}
        section_title={"Here’s what your customers will see"}
      />
      <MainCard
        cardDimension={styles.readyToExpand_section}
        imgSrc={"/assets/images/fintech_readyToExtend.png"}
        imgWidth={298}
        imgHeight={240}
        imgAlt={"ReadyToExpandImage"}
        cardImgStyle={styles.readyToExpand_img}
        dis={{ display: "none" }}
        dateStyle={"dis_none"}
        title={"Ready to expand your horizons?"}
        titleStyle={"section_heading"}
        para={"and get great business value out of your partnership?"}
        paraStyle={"section_title"}
        summaryStyle={"dis_none"}
        btnStyle={"dis_none"}
      />
      <button className={`btn-lg ${styles.cardBtn}`}>Get Started</button>
      <Footer />
    </>
  );
}
