import React from "react";
import Head from "next/head";

import Header from "../../components/Header/Header";
import DelightYourCustomers from "../../components/DelightYourCustomers/DelightYourCustomers";
import MainCard from "../../components/MainCard/MainCard";
import Footer from "../../components/Footer/Footer";

import LendersValueAdditionData from "../../api/LendersValueAdditionData";

import styles from "./styles/Lenders.module.scss";

export default function index() {
  return (
    <>
      <Head>
        <title>For Lenders - Propell</title>
        <meta
          name="keywords"
          content="Loan against Mutual Funds, Loan against securities, Loan against stocks, Instant Loans, Quick Loans, Secured Lending"
        />
        <meta
          name="description"
          content="Meta Description - Boost your secured lending book to enable Loan against Mutual Funds and reach potential 100 million+ customers via Fintech partners, Financial Advisors and Distributors"
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

        <MainCard
          cardDimension={styles.fintech_heroSectionLower}
          imgSrc={"/assets/images/LendersHeroSection.png"}
          imgWidth={638}
          imgHeight={510}
          imgAlt={"FintechHeroImage"}
          dis={{ display: "none" }}
          dateStyle={"dis_none"}
          title={"Explore Propell White Labelled Tech Solutions"}
          titleStyle={`heroSection_title ${styles.title_marginTop} ${styles.tAlign_maxWidth}`}
          para={
            "Add a top tier robust digital product to your portfolio with our white-labelled solutions to enable Loan against Mutual Funds and cater to your customers directly with a smooth digital experience"
          }
          paraStyle={`heroSection_para ${styles.tAlign_maxWidth}`}
          summaryStyle={"dis_none"}
          btnText={"Contact Us"}
          btnStyle={`btn-lg heroSection_btn ${styles.float_r}`}
        />
        <DelightYourCustomers
          data={LendersValueAdditionData}
          section_container={styles.section_container}
          section_heading={"Value addition to lenders"}
          section_title={"Get great business value out of your partnership"}
          cards_dis={styles.cards_dis}
          cardImgStyle={styles.cardImgStyle}
          imgWidth={160}
          imgHeight={130}
          cardDimension={styles.cardDimension}
          titleStyle={styles.titleStyle}
          paraStyle={styles.paraStyle}
        />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
}
