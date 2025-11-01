import React from "react";
import Marquee from "react-fast-marquee";

// Import client logos
import client2 from "../../../assets/brands/amazon.png";
import client1 from "../../../assets/brands/amazon_vector.png";
import client3 from "../../../assets/brands/casio.png";
import client4 from "../../../assets/brands/moonstar.png";
import client5 from "../../../assets/brands/randstad.png";
import client6 from "../../../assets/brands/start-people 1.png";
import client7 from "../../../assets/brands/start.png";

const ClientLogos = () => {
  const logos = [client1, client2, client3, client4, client5, client6, client7];

  return (
    <section className="py-12 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Trusted by Leading Companies
        </h2>
        <p className="text-gray-500 mt-2">
          We’re proud to collaborate with innovative brands across the globe.
        </p>
      </div>

      {/* Marquee Animation */}
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        direction="left"
      >
        {logos.map((logo, index) => (
          <div key={index} className="mx-10 flex items-center justify-center">
            <img
              src={logo}
              alt={`Client ${index + 1}`}
              className="w-28 sm:w-32 md:w-40 h-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default ClientLogos;
