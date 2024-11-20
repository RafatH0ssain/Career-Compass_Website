import { useState } from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const [showFullText, setShowFullText] = useState(false);

    // Split the description into words
    const descriptionWords = service.description.split(" ");
    const limitedDescription = descriptionWords.slice(0, 10).join(" ");

    // Function to toggle the full description visibility
    const toggleDescription = () => setShowFullText(!showFullText);

    return (
        <div className="mx-auto">
            <div className="card bg-base-100 w-96 h-[500px] shadow-xl gap-5">
                <figure>
                    <img src={service.image} alt={service.serviceName} className="rounded-xl w-full h-full object-cover" />
                </figure>
                <div className="card-body text-left gap-2">
                    <h2 className="card-title">
                        {service.serviceName}
                    </h2>
                    <div className="badge badge-info float-right">{service.rating}</div>
                    <p>
                        {showFullText ? service.description : limitedDescription}
                        {descriptionWords.length > 10 && (
                            <Link
                                to={`/services/${service.id}`}
                                className="ml-2 text-blue-600 underline">
                                {showFullText ? "Show less" : "read more"}
                            </Link>
                        )}
                    </p>
                    <div className="badge badge-outline">{service.duration}</div>
                    <div className="badge badge-success">{service.pricing}</div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
