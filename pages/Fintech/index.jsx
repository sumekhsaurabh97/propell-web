import React from "react";
import Head from "next/head";

import DelightYourCustomers from "../../components/DelightYourCustomers/DelightYourCustomers";
import ContactUs from "../../components/ContactUs/ContactUs";
import MainCard from "../../components/MainCard/MainCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import FintechValueAdditionData from "../../api/FintechValueAdditionData";

import styles from "./styles/Fintech.module.scss";

export default function Fintech() {
  return (
    <>
      <Head>
        <title>For Fintechs - Propell</title>
        <meta
          name="keywords"
          content="Loan against Mutual Funds, Loan against securities, Loan against stocks, Instant Loans, Quick Loans, Secured Lending"
        />
        <meta
          name="description"
          content="Add a winning secured lending product to your offering with best-in-class API stack & SDKs to build native journeys for your customers."
        ></meta>
      </Head>
      <Header />
      <div className="container">
        <MainCard
          cardDimension={styles.fintech_heroSection}
          imgSrc={"/assets/images/fintech_hero_section.png"}
          imgWidth={638}
          imgHeight={510}
          imgAlt={"FintechHeroImage"}
          dis={{ display: "none" }}
          dateStyle={"dis_none"}
          title={"Become an Integrated lender"}
          titleStyle={`heroSection_title ${styles.title_marginTop}`}
          para={
            "Boost your secured lending book to enable Loan against Mutual Funds and reach potential 100 million+ customers via Fintech partners, Financial Advisors and Distributors"
          }
          paraStyle={"heroSection_para"}
          summaryStyle={"dis_none"}
          btnText={"Contact Us"}
          btnStyle={"btn-lg heroSection_btn"}
        />
      </div>
      <DelightYourCustomers
        section_container={styles.section_container}
        data={FintechValueAdditionData}
        section_heading={"Value addition to Fintechs"}
        section_title={"And grow you business with the help of propell"}
        cards_dis={styles.cards_dis}
        imgWidth={173}
        imgHeight={175}
        cardImgStyle={styles.cardImgStyle}
        cardDimension={styles.cardDimension}
        titleStyle={styles.titleStyle}
        paraStyle={styles.paraStyle}
        btnStyle={styles.btnStyle}
      />
      <ContactUs />
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
