import React from "react"
import Layout from "../components/App/Layout"
import NavbarTwo from "../components/App/NavbarTwo"
import Footer from "../components/App/Footer"
import MainBanner from "../components/DigitalMarketingAgency/MainBanner"
import FeaturedServices from "../components/DigitalMarketingAgency/FeaturedServices"
import Partner from "../components/DigitalMarketingAgency/Partner"
import AboutUs from "../components/DigitalMarketingAgency/AboutUs"
import Services from "../components/DigitalMarketingAgency/Services"
import FunFacts from "../components/DigitalMarketingAgency/FunFacts"
import Projects from "../components/DigitalMarketingAgency/Projects"
import TeamMembers from "../components/DigitalMarketingAgency/TeamMembers"
import Testimonials from "../components/DigitalMarketingAgency/Testimonials"
import Pricing from "../components/DigitalMarketingAgency/Pricing"
import StartProject from "../components/DigitalMarketingAgency/StartProject"
import OurBlog from "../components/DigitalMarketingAgency/BlogPost"

const Index = () => {
    return (
        <Layout>
            <NavbarTwo />
            <MainBanner />
            <FeaturedServices />
            <Partner />
            <AboutUs />
            <Services />
            <FunFacts />
            <Projects />
            <TeamMembers />
            <Testimonials />
            <Pricing />
            <StartProject />
            <OurBlog />
            <Footer />
        </Layout>
    );
}

export default Index