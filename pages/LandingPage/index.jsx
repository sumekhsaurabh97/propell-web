import React from "react";
import Head from "next/head";

import Header from "../../components/Header/Header";
import MainCard from "../../components/MainCard/MainCard";
import DelightYourCustomers from "../../components/DelightYourCustomers/DelightYourCustomers";
import Features from "../../components/Features/Features";
import QuickTour from "../../components/QuickTour/QuickTour";
import ContactUs from "../../components/ContactUs/ContactUs";
import IndustryBlogsCarousel from "../../components/CrouselSection/IndustryBlogsCarousel";
import Footer from "../../components/Footer/Footer";

import delightCustomers from "../../api/DelightCustomers";

import styles from "./styles/LandingPage.module.scss";

export default function index() {
  return (
    <>
      <Head>
        <title>Propell | Reimagining Secured Lending</title>
        <meta
          name="keywords"
          content="Loan against Mutual Funds, Loan against securities, Loan against stocks, Instant Loans, Quick Loans, Secured Lending"
        />
        <meta
          name="description"
          content="We are enabling Fintechs, MF Distributors, Financial Advisors and Lenders to offer Loan against Securities - Mutual Funds & Stocks to their customers."
        ></meta>
      </Head>
      <Header />
      <div className="container">
        <MainCard
          cardDimension={styles.Hero_Section}
          imgWidth={638}
          imgHeight={628}
          imgSrc={"/assets/images/header.png"}
          dis={{ display: "none" }}
          dateStyle={"dis_none"}
          title={"Reimagining Secured Lending"}
          titleStyle={`heroSection_title ${styles.title_marginTop}`}
          para={
            "Enabling Fintechs, MF Distributors,Financial Advisors and Lenders to offer instant Loan against Securities"
          }
          paraStyle={"heroSection_para"}
          btnText={"Get Started"}
          btnStyle={"heroSection_btn btn-lg"}
        />
      </div>
      <DelightYourCustomers
        section_container={styles.section_container}
        section_heading={"Delight your customers"}
        section_title={"And grow you business with the help of propell"}
        data={delightCustomers}
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
      <Features />
      <QuickTour
        section_heading={"Take a quick tour"}
        section_title={"Take a look at the working of our product"}
        quick_tour={styles.quick_tour}
      />
      <div className={styles.contactUs}>
        <ContactUs />
      </div>
      <IndustryBlogsCarousel />
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
}
