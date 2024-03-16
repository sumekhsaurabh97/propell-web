import Head from "next/head";
import LandingPage from "./LandingPage"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Propell</title>
        <meta property="og:title" content="propell"></meta>
      </Head>
      <LandingPage/>
    </div>
  );
}
