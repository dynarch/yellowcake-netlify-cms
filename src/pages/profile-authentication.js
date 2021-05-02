import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import LoginForm from '../components/ProfileAuthentication.js/LoginForm'
import RegisterForm from '../components/ProfileAuthentication.js/RegisterForm'

const ProfileAuthentication = () => {
    return (
        <Layout>
            <Navbar />
            <PageBanner
                pageTitle="Profile Authentication" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Profile Authentication" 
            />

            <section className="profile-authentication-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <LoginForm />
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <RegisterForm />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </Layout>
    )
}

export default ProfileAuthentication