import React from "react";

const WorkStepCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 flex flex-col items-start text-start transition duration-300 border border-transparent hover:border-primary">
      {icon}
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
};

export default WorkStepCard;