import React from "react";
import { FaTruck, FaMoneyBillWave, FaWarehouse, FaBuilding } from "react-icons/fa";
import WorkStepCard from "./WorkStepCard";

const PackageDeliveryStatus = () => {
  const steps = [
    {
      id: 1,
      icon: <FaTruck className="text-4xl text-primary mb-4" />,
      title: "Booking Pick & Drop",
      description: "Schedule your parcel pick-up and delivery within minutes.",
    },
    {
      id: 2,
      icon: <FaMoneyBillWave className="text-4xl text-primary mb-4" />,
      title: "Cash On Delivery",
      description: "Enjoy secure payment collection at your customer’s doorstep.",
    },
    {
      id: 3,
      icon: <FaWarehouse className="text-4xl text-primary mb-4" />,
      title: "Delivery Hub",
      description: "Your parcels are sorted and processed through our local hubs.",
    },
    {
      id: 4,
      icon: <FaBuilding className="text-4xl text-primary mb-4" />,
      title: "Booking SME & Corporate",
      description: "Tailored logistics solutions for businesses of any scale.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
        How it Works
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-12">
        {steps.map((step) => (
          <WorkStepCard
            key={step.id}
            icon={step.icon}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
};

export default PackageDeliveryStatus;