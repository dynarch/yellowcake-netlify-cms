import React from "react"
import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import Layout from "../components/App/Layout"
import MainBanner from "../components/DataScienceAndMLCompany/MainBanner"
import OurSolutions from "../components/DataScienceAndMLCompany/OurSolutions"
import AboutUs from "../components/DataScienceAndMLCompany/AboutUs"
import OurServices from "../components/DataScienceAndMLCompany/OurServices"
import HowItWork from "../components/DataScienceAndMLCompany/HowItWork"
import CaseStudySlider from "../components/DataScienceAndMLCompany/CaseStudySlider"
import TeamMembers from "../components/DataScienceAndMLCompany/TeamMembers"
import Testimonials from "../components/DataScienceAndMLCompany/Testimonials"
import Partner from "../components/DataScienceAndMLCompany/Partner"
import OurBlog from "../components/DataScienceAndMLCompany/BlogPost"
import StartProject from "../components/DataScienceAndMLCompany/StartProject"

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <MainBanner />
      <OurSolutions />
      <AboutUs />
      <OurServices />
      <HowItWork />
      <CaseStudySlider />
      <TeamMembers />
      <Testimonials />
      <Partner />
      <OurBlog />
      <StartProject />
      <Footer />
    </Layout>
  )
}

export default Home