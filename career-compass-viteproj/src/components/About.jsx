import React from "react";

const AboutUs = () => {
    return (
        <section className="about-us md:w-3/4 w-5/6 mx-auto my-10 md:p-10 p-3">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold font-poppins mb-4">About Us</h2>
                <p className="text-xl md:text-2xl mb-6">
                    We are a team of passionate professionals dedicated to providing insightful tips and resources to help you grow personally and professionally.
                </p>
                <p className="text-xl md:text-2xl mb-6">
                    Our mission is to empower individuals with the knowledge and tools needed to succeed in an ever-changing world. Through continuous learning, networking, and personal development, we strive to create a positive impact.
                </p>
                <a className="px-6 py-3 text-lg font-semibold btn text-white bg-blue-500 rounded-lg" href="https://youtu.be/U-l4ya3ejko?si=HRXekAw7f7nub0W3" target="_blank">
                    Learn More
                </a>
            </div>
        </section>
    );
};

export default AboutUs;
