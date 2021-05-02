import React from 'react'
import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import Layout from "../components/App/Layout"
import Banner from '../components/SEOAgency/Banner'
import FeaturedServices from '../components/SEOAgency/FeaturedServices'
import AboutArea from '../components/SEOAgency/AboutArea'
import FunFacts from '../components/SEOAgency/FunFacts'
import OurServices from '../components/SEOAgency/OurServices'
import CaseStudy from '../components/SEOAgency/CaseStudy'
import WhyChooseUs from '../components/SEOAgency/WhyChooseUs'
import Testimonials from '../components/SEOAgency/Testimonials'
import Pricing from '../components/SEOAgency/Pricing'
import AnalysisForm from '../components/SEOAgency/AnalysisForm'
import Partner from '../components/SEOAgency/Partner'
import OurBlog from '../components/SEOAgency/OurBlog'
import TeamMembers from '../components/SEOAgency/TeamMembers'

const SeoAgency = () => {
    return (
        <Layout>
            <Navbar />
            <Banner />
            <FeaturedServices />
            <AboutArea />
            <FunFacts />
            <OurServices />
            <CaseStudy />
            <WhyChooseUs />
            <Testimonials />
            <Pricing />
            <TeamMembers />
            <AnalysisForm />
            <Partner />
            <OurBlog />
            <Footer />
        </Layout>
    )
}

export default SeoAgency
