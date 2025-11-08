import React from 'react';
import RideFastLogo from '../../pages/shared/RideFastLogo/RideFastLogo';
import AuthImg from '../../assets/authImage.png'
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <div className="hero-content flex-col lg:flex-row-reverse p-0">
                <div className='flex-1 bg-[#FAFDF0] h-screen'>
                    <div className='h-full flex justify-center items-center'>
                        <img
                            src={AuthImg}
                            className="max-w-sm rounded-lg"
                        />
                    </div>
                </div>
                <div className='flex-1 p-15'>
                    <RideFastLogo />
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;