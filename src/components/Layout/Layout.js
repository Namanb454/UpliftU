import React from 'react'
import { Helmet } from "react-helmet"
import Navbar from '../Navbar'
import Footer from '../Footer'
const Layout = ({ title, children }) => {
    return (
        <div className='w-[100%] mx-auto'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta name="description" content='Upliftu' />
            </Helmet>

            <div className=''>
                {/* <div className=''>
                    <Navbar />
                </div> */}

                <main>
                    {children}
                </main>
                {/* <Footer /> */}
            </div>
        </div>
    )
}
Layout.defaultProps = {
    title: 'Upliftu',
    desc: 'Upliftu'
}
export default Layout
