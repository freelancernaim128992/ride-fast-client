import React from "react";

const BenefitCard = ({ title, description, image }) => {
    return (
        <div className="flex flex-col sm:flex-row items-center bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl p-12 gap-6 sm:gap-8">
            {/* Left Image */}
            <div className="flex-shrink-0">
                <img
                    src={image}
                    alt={title}
                    className="w-24 h-24 object-contain"
                />
            </div>

            {/* Dotted Divider */}
            <div className="hidden sm:block h-24 border-l-2 border-dotted border-gray-300"></div>

            {/* Right Text Section */}
            <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
        </div>
    );
};

export default BenefitCard;