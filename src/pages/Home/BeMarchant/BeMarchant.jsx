import React from 'react';
import location from '../../../assets/location-merchant.png'

const BeMarchant = () => {
    return (
        <div data-aos='flip-left' className="bg-[#03373D] max-w-5xl mx-auto mb-10 p-16 rounded-4xl bg-[url('assets/be-a-merchant-bg.png')] bg-no-repeat">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={location}
                    className="w-full rounded-lg"
                />
                <div>
                    <h1 className="text-4xl font-bold text-white">Merchant and Customer Satisfaction is Our First Priority</h1>
                    <p className="py-6 text-gray-200">
                        We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
                    </p>
                    <div className='flex gap-5 flex-col lg:flex-row'>
                        <button className="btn btn-primary text-black rounded-full">Become a Merchant</button>
                        <button
                            className="btn btn-outline text-primary rounded-full shadow-md hover:shadow-lg hover:bg-transparent transition-shadow duration-300"
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.boxShadow = "0 4px 10px #CAEB66")
                            }
                            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
                        >
                            Earn with Profast Courier
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BeMarchant;