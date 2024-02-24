import React from 'react'
import Header from "../components/Header";
import Trade from '../components/Trade';
import MessiBanner from "../components/MessiBanner"
import Banner1 from "../components/Banner1"
import Banner2 from "../components/Banner2"
import Banner3 from "../components/Banner3"
import BannersContainer from "../components/BannersContainer"
import Footer from "../components/Footer";

function Home() {
  return (
   <>
  <Header />
  <Trade />
  <MessiBanner />
  <Banner1 />
  <Banner2 />
  <Banner3 />
  <BannersContainer />
  <Footer />
   </>
  )
}

export default Home