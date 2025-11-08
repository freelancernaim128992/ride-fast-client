import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import ClientLogos from '../ClientLogos/ClientLogos';
import KeyBenefits from '../KeyBenefits/KeyBenefits';
import BeMarchant from '../BeMarchant/BeMarchant';
import PackageDeliveryStatus from '../PackageDeliveryStatus/PackageDeliveryStatus';
import Faq from '../Faq/Faq';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PackageDeliveryStatus></PackageDeliveryStatus>
            <Services></Services>
            <ClientLogos></ClientLogos>
            <KeyBenefits></KeyBenefits>
            <BeMarchant></BeMarchant>
            <Faq></Faq>
        </div>
    );
};

export default Home;