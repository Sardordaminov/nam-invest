import React from 'react'
import Navbar from '../components/Navbar/navbar-main/Navbar'
import Footer from '../components/Footer/footer-main/Footer'

const Layout = ({ children }) => {
    return (
        <div className='head'>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout