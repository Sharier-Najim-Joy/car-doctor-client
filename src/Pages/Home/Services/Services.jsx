import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://car-doctor-server-nine-lac.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="mb-5">
            <div className="text-center space-y-5">
                <h3 className="font-bold text-xl text-[#FF3811]">Service</h3>
                <h1 className="font-bold text-5xl">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                { services.map(service=>
                <ServiceCard 
                key={service._id}
                service={service}
                ></ServiceCard>) }
            </div>
        </div>
    );
};

export default Services;