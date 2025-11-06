import React from "react";
import BenefitCard from "./BenefitCard";
import trackingImg from "../../../assets/benefits/Illustration.png";
import supportImg from "../../../assets/benefits/Group 4.png";

const KeyBenefits = () => {
    const benefits = [
        {
            id: 1,
            title: "Live Parcel Tracking",
            description:
                "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
            image: trackingImg,
        },
        {
            id: 2,
            title: "100% Safe Delivery",
            description:
                "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
            image: supportImg,
        },
        {
            id: 3,
            title: "24/7 Call Center Support",
            description:
                "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
            image: supportImg,
        },
    ];

    return (
        <section className="max-w-5xl mx-auto py-10 relative my-10">
            {/* Top dotted line */}
            <div className="absolute top-0 left-0 w-full border-t-2 border-dotted border-gray-300"></div>

            <div className="flex flex-col gap-10">
                {benefits.map((benefit) => (
                    <BenefitCard
                        key={benefit.id}
                        title={benefit.title}
                        description={benefit.description}
                        image={benefit.image}
                    />
                ))}
            </div>

            {/* Bottom dotted line */}
            <div className="absolute bottom-0 left-0 w-full border-t-2 border-dotted border-gray-300"></div>
        </section>
    );
};

export default KeyBenefits;