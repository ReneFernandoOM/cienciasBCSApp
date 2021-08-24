import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Donate from '../../components/Donate'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const DonatePage = () => {
    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Únete a nuestra causa'} pagesub={'Donate'} />
            <Donate />
            <Footer footerClass={'wpo-ne-footer-2'} />
            <Scrollbar />
        </Fragment>
    )
};
export default DonatePage;