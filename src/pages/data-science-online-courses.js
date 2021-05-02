import React from "react"
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import MainBanner from "../components/DataScienceOnlineCourses/MainBanner"
import Partner from "../components/DataScienceOnlineCourses/Partner"
import FeaturedServices from "../components/DataScienceOnlineCourses/FeaturedServices"
import AboutUs from "../components/DataScienceOnlineCourses/AboutUs"
import OurMission from "../components/DataScienceOnlineCourses/OurMission"
import Funfacts from "../components/DataScienceOnlineCourses/Funfacts"
import Courses from "../components/DataScienceOnlineCourses/Courses"
import ExploreLearning from "../components/DataScienceOnlineCourses/ExploreLearning"
import UpcomingBootcamps from "../components/DataScienceOnlineCourses/UpcomingBootcamps"
import Testimonials from "../components/DataScienceOnlineCourses/Testimonials"
import OurBlog from "../components/DataScienceOnlineCourses/BlogPost"
import Subscribe from "../components/DataScienceOnlineCourses/Subscribe"

const Index = () => {
    return (
        <Layout>
            <Navbar />
            <MainBanner />
            <Partner />
            <FeaturedServices />
            <AboutUs />
            <OurMission />
            <Funfacts />
            <Courses />
            <ExploreLearning />
            <UpcomingBootcamps />
            <Testimonials />
            <OurBlog />
            <Subscribe />
            <Footer />
        </Layout>
    )
}

export default Index
