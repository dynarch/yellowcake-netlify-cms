import React from "react"
import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import Layout from "../components/App/Layout"
import MainBanner from "../components/DataAnalyticsAIStartup/MainBanner"
import FeaturedService from "../components/DataAnalyticsAIStartup/FeaturedService"
import AboutUs from "../components/DataAnalyticsAIStartup/AboutUs"
import OurMission from "../components/DataAnalyticsAIStartup/OurMission"
import Funfacts from "../components/DataAnalyticsAIStartup/Funfacts"
import OurServices from "../components/DataAnalyticsAIStartup/OurServices"
import HowItWork from "../components/DataAnalyticsAIStartup/HowItWork"
import TeamMembers from "../components/DataAnalyticsAIStartup/TeamMembers"
import Testimonials from "../components/DataAnalyticsAIStartup/Testimonials"
import Partner from "../components/DataAnalyticsAIStartup/Partner"
import StartProject from "../components/DataAnalyticsAIStartup/StartProject"
import OurBlog from "../components/DataAnalyticsAIStartup/BlogPost"

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <MainBanner />
      <FeaturedService />
      <AboutUs />
      <OurMission />
      <Funfacts />
      <OurServices />
      <HowItWork />
      <TeamMembers />
      <Testimonials />
      <Partner />
      <StartProject />
      <OurBlog />
      
      <Footer />
    </Layout>
  )
}

export default Home