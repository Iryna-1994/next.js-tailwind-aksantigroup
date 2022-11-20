import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import '../styles/globals.css'
import Head from "next/head"

function MyApp({ Component, pageProps }: { Component: any, pageProps: any }) {
  return (
    <>
      <Head>
        <title>Aksanti Group</title>
        <meta name="description" content="Aksanti group web site" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp;
