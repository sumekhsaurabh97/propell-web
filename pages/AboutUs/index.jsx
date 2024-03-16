import React from "react";
import Image from "next/image";
import Head from "next/head";

import Header from "../../components/Header/Header";
import DelightYourCustomers from "../../components/DelightYourCustomers/DelightYourCustomers";
import Footer from "../../components/Footer/Footer";

import MyTeam from "../../api/MyTeam";

import styles from "../AboutUs/styles/AboutUs.module.scss";

export default function index() {
  return (
    <>
      <Head>
        <title>About Us - Propell</title>
        <meta
          name="keywords"
          content="Loan against Mutual Funds, Loan against securities, Loan against stocks, Instant Loans, Quick Loans, Secured Lending"
        />
        <meta
          name="description"
          content="At Propell, we are focused to revolutionize secured lending landscape in India by accelerating access to secured credit through technological led solutions."
        ></meta>
      </Head>
      <Header />
      <div
        className={`hero_section d-flex justify-content-center ${styles.heroSection}`}
        r
      >
        <Image
          src="/assets/images/AboutHeroImg_2.png"
          alt={"imgAlt"}
          width={350}
          height={470}
          className={styles.HeroSectionImg_1}
        />
        <div className={`text-center ${styles.heroSectionText}`}>
          <h1
            className={`section_heading ${styles.topSpeace}`}
            style={{
              maxWidth: "642px",
              padding: "0px 23px 0px 23px",
            }}
            ś
          >
            About us
          </h1>
          <p
            className="section_title"
            style={{ maxWidth: "642px", marginBottom: "20px" }}
          >
            At Propell, we are focused to revolutionize secured lending
            landscape in India by accelerating access to secured credit through
            technological led solutions.
          </p>
          <div className={`${styles.our_vission} ${styles.headingdText}`}>
            <Image
              src="/assets/images/Vission.png"
              alt={"Vission"}
              width={48}
              height={48}
            />
            <h2>Our vision</h2>
            <p>Reimagining India’s Secured Lending.</p>
          </div>
          <div className={`${styles.our_mission} ${styles.headingdText}`}>
            <Image
              src="/assets/images/Mission.png"
              alt={"mission"}
              width={48}
              height={48}
            />
            <h2>Our mission</h2>
            <p className={styles.bottomSpeace}>
              Build an end to end digital infrastructure which can propell
              access to secured credit for everyone.
            </p>
          </div>
        </div>

        <Image
          src="/assets/images/AboutHeroImg_1.png"
          alt={"imgAlt"}
          width={350}
          height={470}
        />
      </div>
      <div className={`container ${styles.strips}`}>
        <div className={styles.stripStyle}>
          <p>We enable</p>
          <p>fintechs, wealth managers, financial advisors and lenders</p>
        </div>
        <div className={styles.stripStyle}>
          <p className={styles.padd}>who</p>
          <p>are looking to build and offer secured credit access</p>
        </div>
        <div className={styles.stripStyle}>
          <p>To provide</p>
          <p>
            Instant Loan against Securities (Mutual Funds & Equity) to their end
            customer digitally
          </p>
        </div>
        <div className={styles.stripStyle}>
          <p className={styles.padd}>Unlike</p>
          <p>
            traditional cumbersome offline process which takes higher processing
            time and involves significant costs
          </p>
        </div>
      </div>
      <div className={`container ${styles.propell}`}>
        <p className={styles.propellService}>
          provides an end to end digital infrastructure which can be integrated
          seamlessly along with their existing offerings and help redefine
          customer’s lending experience
        </p>
        <button>
          <Image
            src="/assets/images/BtnImg.png"
            alt={"imgAlt"}
            width={138}
            height={28}
          />
        </button>
      </div>
      <DelightYourCustomers
        data={MyTeam}
        section_container={styles.myTeam_container}
        section_heading={"Meet the team"}
        section_title={"The minds behind the curtain"}
        cardDimension={styles.cardDimension}
        imgWidth={181}
        imgHeight={195}
        cards_dis={styles.cards_dis}
        cardImgStyle={styles.cardImgStyle}
        titleStyle={styles.titleStyle}
        paraStyle={styles.paraStyle}
      />
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
}
