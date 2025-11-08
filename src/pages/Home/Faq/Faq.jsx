import React from 'react';
import { MdArrowOutward } from "react-icons/md";

const Faq = () => {
    return (
        <section className='max-w-5xl mx-auto my-20'>
            <div className='text-center'>
                <h1 className='text-3xl font-semibold text-gray-800'>Frequently Asked Question (FAQ)</h1>
                <div className=' pt-4 max-w-3/4 mx-auto'>
                    <p className='text-sm text-gray-700'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
                </div>
            </div>
            <div className='my-10'>
                <div className="collapse collapse-arrow bg-base-100 border border-primary">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title font-semibold">How does this posture corrector work?</div>
                    <div className="collapse-content text-sm">A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-primary">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">Is it suitable for all ages and body types?</div>
                    <div className="collapse-content text-sm">Absolutely! Our services are designed to be convenient and accessible for people of all ages and body types, ensuring a smooth and comfortable experience for everyone.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-primary">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">Does it really help with back pain and posture improvement?</div>
                    <div className="collapse-content text-sm">Yes, it does. Our service is specially designed to support proper posture and reduce back strain, helping you feel more comfortable and aligned throughout the day.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-primary">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">Does it have smart features like vibration alerts?</div>
                    <div className="collapse-content text-sm">Yes, it does. It includes smart vibration alerts that gently remind you to maintain proper posture or adjust your position when needed.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-primary">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">How will I be notified when the product is back in stock?</div>
                    <div className="collapse-content text-sm">You’ll receive an instant notification. Once the product is back in stock, we’ll send you an email or app alert so you can order it right away before it sells out again.</div>
                </div>
            </div>
            <div className='flex justify-center'>
                <button className="btn btn-primary text-black rounded-md">See More FAQ’s</button>
                <button className="btn text-primary bg-black btn-circle">
                    <MdArrowOutward className='text-xl'/>
                </button>
            </div>
        </section>
    );
};

export default Faq;