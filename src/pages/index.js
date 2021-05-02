import React from "react"
import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import Layout from "../components/App/Layout"
import Banner from "../components/Index/Banner"
import OurSolutions from "../components/Index/OurSolutions"
import OurServices from "../components/Index/OurServices"
import OurFeatures from "../components/Index/OurFeatures"
import TeamMember from "../components/Index/TeamMember"
import RecentProjects from "../components/Index/RecentProjects"
import Pricing from "../components/Index/Pricing"
import Testimonials from "../components/Index/Testimonials"
import Partner from "../components/Index/Partner"
import ProjectStartArea from "../components/Index/ProjectStartArea"
import OurBlog from "../components/Index/OurBlog"

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <Banner />
      <OurSolutions />
      <OurServices />
      <OurFeatures />
      <TeamMember />
      <RecentProjects />
      <Pricing />
      <Testimonials />
      <Partner />
      <OurBlog />
      <ProjectStartArea />
      <Footer />
    </Layout>
  )
}

export default Home