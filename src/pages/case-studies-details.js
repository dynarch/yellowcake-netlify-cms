import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import CaseStudiesDetailsContent from '../components/CaseStudiesDetails/CaseStudiesDetailsContent'
import RelatedProjects from '../components/CaseStudiesDetails/RelatedProjects'

const CaseDetails = () => {
    return (
        <Layout>
            <Navbar />
            <PageBanner
                pageTitle="Case Studies Details" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Case Studies Details" 
            />
            <CaseStudiesDetailsContent />
            <RelatedProjects />
            <Footer />
        </Layout>
    );
}

export default CaseDetails