import { useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import ServiceCard from "../../components/ServiceCard";
import About from "../../components/About";
import TipOTD from "../../components/TipOTD";

const Home = () => {
    const { data } = useLoaderData();

    return (
        <div>
            <Slider />
            <TipOTD />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-3">
                {data.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
            <About />
        </div>
    );
};

export default Home;
