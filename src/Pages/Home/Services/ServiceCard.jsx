import { IoMdArrowRoundForward } from "react-icons/io";


const ServiceCard = ({ service }) => {

    const { title, price, img } = service

    return (
        <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl">{title}</h2>
                <div className="flex items-center font-semibold text-lg text-[#FF3811]">
                    <p>Price: ${price}</p>
                    <button className=""><IoMdArrowRoundForward></IoMdArrowRoundForward></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;