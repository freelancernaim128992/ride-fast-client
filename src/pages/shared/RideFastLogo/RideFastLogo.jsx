import React from 'react';
import logo from '../../../assets/logo.png';

const RideFastLogo = () => {
    return (
        <div className='flex items-end'>
            <img className='mb-1.5' src={logo} alt="" />
            <p className='text-3xl -ml-4 font-bold'>Ridefast</p>
        </div>
    );
};

export default RideFastLogo;