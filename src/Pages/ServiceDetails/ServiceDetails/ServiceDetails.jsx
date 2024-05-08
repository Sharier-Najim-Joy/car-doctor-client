import { Link, useLoaderData } from 'react-router-dom';
import img from '../../../assets/images/checkout/checkout.png';
import { IoMdArrowRoundForward } from "react-icons/io";

const ServiceDetails = () => {

    const services = useLoaderData();
    // console.log(services.facility);

    return (
        <div className='mb-6 space-y-4'>
            <div>
                <img src={img} alt="" className='w-full' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                <div className='md:col-span-2 space-y-4'>
                    <img src={services.img} className='w-full h-72 rounded-xl object-cover' alt="" />
                    <p className='font-bold text-3xl'>{services.title}</p>
                    <p>{services.description}</p>
                    <div className='grid grid-cols-2 gap-6'>
                        {
                            services.facility.map((service, index) => <div key={index} className='shadow-xl p-10 rounded-xl border-t-2 border-[#FF3811]'>
                                <h4 className='font-bold text-xl mb-2'>{service.name}</h4>
                                <p>{service.details}</p>
                            </div>)
                        }
                    </div>
                </div>
               
                    <aside className="w-full p-6  dark:bg-gray-50 dark:text-gray-800 text-center">
                        <nav className="space-y-8 text-sm">
                            <div className="space-y-2">
                                
                                <div className="flex flex-col space-y-1 p-10">
                                <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-600">Services</h2>
                                    <button className='flex items-center gap-3 border justify-evenly py-4'>Full Car Repair <span><IoMdArrowRoundForward/></span></button>
                                    <button className='flex items-center gap-3 border justify-evenly py-4'>Engine Repair <span><IoMdArrowRoundForward/></span></button>
                                    <button className='flex items-center gap-3 border justify-evenly py-4'>Automatic Services <span><IoMdArrowRoundForward/></span></button>
                                    <button className='flex items-center gap-3 border justify-evenly py-4'>Engine Oil Change <span><IoMdArrowRoundForward/></span></button>
                                    <button className='flex items-center gap-3 border justify-evenly py-4'>Battery Charge<span><IoMdArrowRoundForward/></span></button>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-600">Dashboard</h2>
                                <div className="flex flex-col space-y-1">
                                    <a rel="noopener noreferrer" href="#">Header</a>
                                    <a rel="noopener noreferrer" href="#">Drawer</a>
                                    <a rel="noopener noreferrer" href="#">Page Title</a>
                                    <a rel="noopener noreferrer" href="#">Menus</a>
                                    <a rel="noopener noreferrer" href="#">Sidebar</a>
                                    <a rel="noopener noreferrer" href="#">Footer</a>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-600">Pages</h2>
                                <div className="flex flex-col space-y-1">
                                    <a rel="noopener noreferrer" href="#">Homepage</a>
                                    <a rel="noopener noreferrer" href="#">Users</a>
                                    <a rel="noopener noreferrer" href="#">Tools</a>
                                    <a rel="noopener noreferrer" href="#">Settings</a>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-600">Misc</h2>
                                <div className="flex flex-col space-y-1">
                                    <a rel="noopener noreferrer" href="#">Tutorials</a>
                                    <a rel="noopener noreferrer" href="#">Changelog</a>
                                </div>
                            </div>
                        </nav>
                        <div className='mt-6'>
                            <h2 className='font-bold text-4xl'>Price: ${services.price}</h2>
                            <Link to={`/checkout/${services._id}`}><button className='btn w-full font-semibold text-lg bg-[#FF3811] mt-4'>Proceed Checkout</button></Link>
                        </div>
                    </aside>

               
            </div>
        </div>
    );
};

export default ServiceDetails;