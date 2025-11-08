import React, { useEffect, useState, useRef } from "react";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./TestimonialsData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import sectionImg from '../../../assets/customer-top.png'


const clampIndex = (i, length) => (i % length + length) % length;


const Testimonials = () => {
    const length = testimonials.length;
    const [active, setActive] = useState(2); // start so there are 2 visible left of center
    const autoRef = useRef(null);
    const containerRef = useRef(null);


    // auto-slide
    useEffect(() => {
        autoRef.current = setInterval(() => {
            setActive((prev) => clampIndex(prev + 1, length));
        }, 4000);
        return () => clearInterval(autoRef.current);
    }, [length]);


    const pauseAuto = () => clearInterval(autoRef.current);
    const resumeAuto = () => {
        clearInterval(autoRef.current);
        autoRef.current = setInterval(() => {
            setActive((prev) => clampIndex(prev + 1, length));
        }, 4000);
    };


    const goPrev = () => setActive((prev) => clampIndex(prev - 1, length));
    const goNext = () => setActive((prev) => clampIndex(prev + 1, length));
    // compute visual state for each card (-2,-1,0,1,2 visible)
    const getState = (index) => {
        const rel = (() => {
            const diff = index - active;
            let d = diff;
            if (d > length / 2) d -= length;
            if (d <= -length / 2) d += length;
            return d;
        })();

        if (rel < -2 || rel > 2) return { visible: false };

        const abs = Math.abs(rel);
        const scale = 1 - abs * 0.08;

        // Push inactive cards further down
        const translateY = abs * 28; // increased from 14 to 28

        // Dim inactive cards more
        let opacity = 1 - abs * 0.3; // center 1, side ~0.7, outer ~0.4
        let filter = abs === 0 ? "none" : "grayscale(40%)"; // more noticeable dim


        // Responsive horizontal gap
        let baseGap = 280;
        if (window.innerWidth < 768) baseGap = 200;
        if (window.innerWidth < 480) baseGap = 200;

        const translateX = rel * baseGap;
        const z = 50 - abs;

        return {
            visible: true,
            style: {
                transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
                opacity,
                zIndex: z,
                filter,
                transition: "transform 0.5s ease, opacity 0.5s ease, filter 0.5s ease",
            },
        };
    };





    return (
        <section
            className="relative py-12 bg-white"
            onMouseEnter={pauseAuto}
            onMouseLeave={resumeAuto}
        >
            {/* header area: user will replace icon image as needed */}
            <div className="max-w-5xl mx-auto px-6 text-center mb-8">
                <div className="mx-auto h-24 mb-8">
                    {/* placeholder for your custom icon image */}
                    <div className="h-full rounded-md flex items-center justify-center">
                        <img src={sectionImg} alt="" />
                    </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">What our customers are sayings</h2>
                <p className="text-gray-500 mt-2 max-w-2xl mx-auto text-sm">
                    Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
                </p>
            </div>


            {/* slider area */}
            <div className="relative overflow-hidden py-8">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {/* subtle background gradient or decoration if desired */}
                </div>
                <div className="w-full flex justify-center">
                    <div
                        ref={containerRef}
                        className="relative w-full max-w-[1100px] h-[320px] md:h-[300px]"
                    >
                        {testimonials.map((item, idx) => {
                            const s = getState(idx);
                            if (!s.visible) return null;


                            return (
                                <div
                                    key={item.id}
                                    style={s.style}
                                    className={`absolute top-0 left-1/2 -translate-x-1/2 w-[180px] sm:w-[220px] md:w-[260px] transition-transform duration-500 ease-in-out`}
                                >
                                    <TestimonialCard item={item} />
                                </div>

                            );
                        })}
                    </div>
                </div>
                {/* navigation controls */}
                <div className="mt-10 flex items-center justify-center gap-6">
                    <button
                        onClick={goPrev}
                        className="btn btn-gray-300 btn-sm btn-circle"
                        aria-label="previous"
                    >
                        <FaChevronLeft />
                    </button>


                    <div className="flex items-center gap-2">
                        {/* small indicators for 7 items */}
                        {testimonials.map((t, i) => (
                            <button
                                key={t.id}
                                onClick={() => setActive(i)}
                                className={`w-2 h-2 btn-circle ${i === active ? "bg-primary" : "bg-gray-200"}`}
                                aria-label={`go to ${i + 1}`}
                            />
                        ))}
                    </div>


                    <button
                        onClick={goNext}
                        className="btn btn-primary btn-sm btn-circle text-black"
                        aria-label="next"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </section>
    );
};


export default Testimonials;