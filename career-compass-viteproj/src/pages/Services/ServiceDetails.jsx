import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

const ServiceDetails = () => {
    const service = useLoaderData();

    // Fetch or retrieve the service details based on the ID
    // For example, using a static service array or an API call

    return (
        <div>
            <Navbar />
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col md:gap-10 gap-5 md:p-10 p-5">
                    <img src={service.image} alt={service.serviceName} className="rounded-lg shadow-2xl border border-gray-300" />

                    <div className="text-center lg:text-left md:p-10 p-5 rounded-xl border-purple-950 border-4">
                        <h1 className="text-5xl font-bold text-blue-800 mb-4">{service.serviceName}</h1>
                        <p className="py-4 font-semibold text-lg text-gray-700">{service.description}</p>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-6 text-left">
                            <div className="text-lg">
                                <span className="font-bold text-black underline">Category: </span>
                                {service.category}
                            </div>
                            <div className="text-lg">
                                <span className="font-bold text-black underline">Pricing: </span>
                                {service.pricing}
                            </div>
                            <div className="text-lg">
                                <span className="font-bold text-black underline">Duration: </span>
                                {service.duration}
                            </div>
                            <div className="text-lg">
                                <span className="font-bold text-black underline">Counselor: </span>
                                {service.counselor}
                            </div>
                            <div className="text-lg flex items-center">
                                <span className="font-bold text-black underline mr-2">Rating: </span>
                                <div className="flex">
                                    {Array.from({ length: Math.ceil(service.rating) }, (_, index) => (
                                        <span key={index} className="text-yellow-500 text-xl">⭐</span>
                                    ))}
                                </div>
                                <span className="ml-2 text-gray-600">{service.rating}/5</span>
                            </div>
                        </div>
                        <div className="gap-10 flex justify-between">
                            <Link className="btn btn-primary px-6 py-3 text-lg shadow-md hover:bg-black">
                                Get Started
                            </Link>
                            <Link className="btn btn-warning px-6 py-3 text-lg shadow-md hover:bg-gray-700" to="/">
                                Go Back
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ServiceDetails;
