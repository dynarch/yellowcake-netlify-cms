import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import EventDetailsContent from '../components/Events/EventDetailsContent'
import EventSpeakers from '../components/Events/EventSpeakers'

const EventDetails = () => {
    return (
        <Layout>
            <Navbar />
            <PageBanner
                pageTitle="Event Details" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Event Details" 
            />
            <EventDetailsContent />
            <EventSpeakers />
            <Footer />
        </Layout>
    );
}

export default EventDetails;