import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import ClientLogos from '../ClientLogos/ClientLogos';
import KeyBenefits from '../KeyBenefits/KeyBenefits';
import BeMarchant from '../BeMarchant/BeMarchant';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ClientLogos></ClientLogos>
            <KeyBenefits></KeyBenefits>
            <BeMarchant></BeMarchant>
        </div>
    );
};

export default Home;