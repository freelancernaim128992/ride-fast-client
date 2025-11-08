import React from "react";
import { FaQuoteRight } from "react-icons/fa";


const TestimonialCard = ({ item, className = "" }) => {
    return (
        <div
            className={`bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between transition-all duration-500 ${className}`}
        >
            {/* top quote */}
            <div className="text-left">
                <FaQuoteRight className="text-3xl text-primary opacity-90 mb-3" />
            </div>


            {/* description */}
            <div className="text-gray-700 text-sm leading-relaxed mb-4">{item.description}</div>


            {/* dotted divider */}
            <div className="w-full border-t border-dashed border-gray-600 my-4" />


            {/* profile */}
            <div className="flex items-center gap-4">
                <div className="w-1/4">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full object-cover rounded-full"
                    />
                </div>
                <div className="text-left">
                    <div className="text-sm font-semibold text-gray-900">{item.name}</div>
                    <div className="text-xs text-gray-500">{item.position}</div>
                </div>
            </div>
        </div>
    );
};


export default TestimonialCard;