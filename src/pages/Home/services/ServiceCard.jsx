// src/components/ServiceCard.jsx
const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="card bg-base-200 shadow-lg hover:shadow-2xl transition duration-300">
      <div className="card-body items-center text-center">
        <div className="text-5xl text-primary mb-4">{icon}</div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm opacity-80 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
