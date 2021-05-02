import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import CoursesContent from '../components/Courses/CoursesContent'

const CoursesGrid = () => {
    return (
        <Layout>
            <Navbar />
            <PageBanner
                pageTitle="Course Grid" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Course Grid" 
            />
            <CoursesContent />
            <Footer />
        </Layout>
    );
}

export default CoursesGrid;