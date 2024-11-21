import { useEffect, useRef } from "react";

const TipOTD = () => {
    const currentSlide = useRef(1); // Keeps track of the current slide without causing re-renders
    const totalSlides = 4; // Update this if you add more slides
    const interval = 5000; // 5 seconds

    useEffect(() => {
        const slideInterval = setInterval(() => {
            currentSlide.current++;
            if (currentSlide.current > totalSlides) {
                currentSlide.current = 1;
            }

            // Remove 'active' class from all slides and then add it to the current slide
            const slides = document.querySelectorAll('.carousel-item');
            slides.forEach((slide) => slide.classList.remove('active'));

            const currentSlideElement = document.querySelector(`#slide${currentSlide.current}`);
            currentSlideElement.classList.add('active');
        }, interval);

        // Clear interval on component unmount
        return () => clearInterval(slideInterval);
    }, []);

    return (
        <div className="md:w-3/4 w-5/6 mx-auto h-full md:p-10 p-3">
            <div className="carousel w-full h-full" id="autoCarousel">
                <div id="slide1" className="carousel-item relative w-full active">
                    <div
                        className="md:h-56 h-full w-full bg-cover md:px-5 px-2 rounded-xl"
                        style={{
                            backgroundImage: "url(https://i.ibb.co/nkzYw55/tips-and-tricks.jpg)",
                        }}>
                        <div className="h-full">
                            <div className="w-full align-text-top md:pt-5 pt-2">
                                <h1 className="mb-3 md:text-5xl text-2xl font-extrabold font-poppins">TIPS</h1>
                                <p className="md:text-3xl text-xl">
                                    Continuously invest in learning new skills and technologies to stay ahead in your field and adapt to changes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div
                        className="md:h-56 h-full w-full bg-cover md:px-5 px-2 rounded-xl"
                        style={{
                            backgroundImage: "url(https://i.ibb.co/nkzYw55/tips-and-tricks.jpg)",
                        }}>
                        <div className="h-full">
                            <div className="w-full align-text-top md:pt-5 pt-2">
                                <h1 className="mb-3 md:text-5xl text-2xl font-extrabold font-poppins">TIPS</h1>
                                <p className="md:text-3xl text-xl">
                                    Network actively both online and offline to build meaningful professional relationships that can open doors to opportunities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div
                        className="md:h-56 h-full w-full bg-cover md:px-5 px-2 rounded-xl"
                        style={{
                            backgroundImage: "url(https://i.ibb.co/nkzYw55/tips-and-tricks.jpg)",
                        }}>
                        <div className="h-full">
                            <div className="w-full align-text-top md:pt-5 pt-2">
                                <h1 className="mb-3 md:text-5xl text-2xl font-extrabold font-poppins">TIPS</h1>
                                <p className="md:text-3xl text-xl">
                                    Seek constructive feedback from colleagues and mentors to identify areas for improvement and grow both personally and professionally.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div
                        className="md:h-56 h-full w-full bg-cover md:px-5 px-2 rounded-xl"
                        style={{
                            backgroundImage: "url(https://i.ibb.co/nkzYw55/tips-and-tricks.jpg)",
                        }}>
                        <div className="h-full">
                            <div className="w-full align-text-top md:pt-5 pt-2">
                                <h1 className="mb-3 md:text-5xl text-2xl font-extrabold font-poppins">TIPS</h1>
                                <p className="md:text-3xl text-xl">
                                    Set clear, achievable career goals and develop a plan to stay focused, motivated, and on track to success.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TipOTD;
