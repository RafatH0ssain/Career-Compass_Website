import { Link } from "react-router-dom";

const Slider = () => {

    return (
        <div>
            <div className="carousel w-full">
                <div id="slide-1" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co/qBKp8F6/Career-Counselling-Sessions.jpg"
                        className="w-full" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 text-white flex flex-col items-start justify-center p-5 lg:gap-10 lg:pl-40 md:pl-20">
                        <h2 className="lg:text-5xl md:text-2xl text-xl font-bold mb-4">Career Counseling Sessions</h2>
                        <p className="mb-6 lg:text-2xl md:text-xl text-sm text-left">Get personalized career advice to guide you toward your dream job with expert counselors.</p>
                        <Link className="btn bg-blue-600 border-none text-white font-extrabold" to="/services/1">Book a Session</Link>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide-3" className="btn btn-circle lg:bg-white bg-transparent border-none">❮</a>
                        <a href="#slide-2" className="btn btn-circle lg:bg-white bg-transparent border-none">❯</a>
                    </div>
                </div>

                <div id="slide-2" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co/f273hF6/Resume-Review.jpg"
                        className="w-full" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 text-white flex flex-col items-start justify-center p-5 lg:gap-10 lg:pl-40 md:pl-20">
                        <h2 className="lg:text-5xl md:text-2xl text-xl font-bold mb-4">Resume Review Service</h2>
                        <p className="mb-6 lg:text-2xl md:text-xl text-sm text-left">Get expert feedback on your resume and make it stand out to potential employers.</p>
                        <Link className="btn bg-blue-600 border-none text-white font-extrabold" to="/services/2">Book a Session</Link>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide-1" className="btn btn-circle lg:bg-white bg-transparent border-none">❮</a>
                        <a href="#slide-3" className="btn btn-circle lg:bg-white bg-transparent border-none">❯</a>
                    </div>
                </div>

                <div id="slide-3" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co/Dkf9QdX/Interview-Practice.jpg"
                        className="w-full" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 text-white flex flex-col items-start justify-center p-5 lg:gap-10 lg:pl-40 md:pl-20">
                        <h2 className="lg:text-5xl md:text-2xl text-xl font-bold mb-4">Interview Practice</h2>
                        <p className="mb-6 lg:text-2xl md:text-xl text-sm text-left">Prepare for interviews with mock sessions and feedback from professionals.</p>
                        <Link className="btn bg-blue-600 border-none text-white font-extrabold" to="/services/3">Book a Session</Link>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide-2" className="btn btn-circle lg:bg-white bg-transparent border-none">❮</a>
                        <a href="#slide-1" className="btn btn-circle lg:bg-white bg-transparent border-none">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Slider;