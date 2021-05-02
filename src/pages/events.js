import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import EventsCard from '../components/Events/EventsCard'

const Events = () => {
    return (
        <Layout>
            <Navbar />
            <PageBanner
                pageTitle="Events" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Events" 
            />
            <EventsCard />
            <Footer />
        </Layout>
    );
}

export default Events