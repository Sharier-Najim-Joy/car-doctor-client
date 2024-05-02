import { Typewriter } from 'react-simple-typewriter'
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";


const Banner = () => {
    
      const handleDone = () => {
        // console.log(`Done after 5 loops!`)
      }

    return (
        <div className="carousel w-full h-screen mb-10 mt-4">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute h-full flex items-center left-0 right-0  bg-gradient-to-r from-[#000000FF] to-[#ffffff00] rounded-xl">
                    <div className='text-white space-y-7 w-1/3 pl-12'>
                        <h1 className='font-bold text-6xl' style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                        Affordable Price For Car {' '}
                            <span style={{ color: 'red', fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Servicing', 'Wash', 'Parts', 'ETC']}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={80}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                    onLoopDone={handleDone}
                                />
                            </span>
                        </h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex items-center gap-4'>
                            <a href="#_" className="bg-transparent relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                                <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                                <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                                    <span className="relative text-white">Button Text</span>
                                </span>
                            </a>
                            <button className="btn glass text-white hover:text-black">Glass button</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide6" className="btn btn-circle mr-5 bg-transparent"><IoMdArrowBack className='hover:text-[#ff3811] size-6'></IoMdArrowBack></a>
                    <a href="#slide2" className="btn btn-circle bg-transparent"><IoMdArrowForward className='hover:text-[#ff3811] size-6'></IoMdArrowForward></a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                <div className="absolute p-12 h-full flex items-center left-0 right-0 bottom-0 bg-gradient-to-r from-[#000000FF] to-[#ffffff00] rounded-xl">
                    <div className='text-white space-y-7 w-1/3 '>
                        <h1 className='font-bold text-6xl' style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                        Affordable Price For Car {' '}
                            <span style={{ color: 'red', fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Servicing', 'Wash', 'Parts', 'ETC']}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={80}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                    onLoopDone={handleDone}
                                />
                            </span>
                        </h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex items-center gap-4'>
                            <a href="#_" className="bg-transparent relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                                <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                                <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                                    <span className="relative text-white">Button Text</span>
                                </span>
                            </a>
                            <button className="btn glass text-white hover:text-black">Glass button</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5 bg-transparent"><IoMdArrowBack className='hover:text-[#ff3811] size-6'></IoMdArrowBack></a>
                    <a href="#slide3" className="btn btn-circle bg-transparent"><IoMdArrowForward className='hover:text-[#ff3811] size-6'></IoMdArrowForward></a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />
                <div className="absolute h-full flex items-center left-0 right-0  bg-gradient-to-r from-[#000000FF] to-[#ffffff00] rounded-xl">
                    <div className='text-white space-y-7 w-1/3 pl-12'>
                        <h1 className='font-bold text-6xl' style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                        Affordable Price For Car {' '}
                            <span style={{ color: 'red', fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Servicing', 'Wash', 'Parts', 'ETC']}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={80}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                    onLoopDone={handleDone}
                                />
                            </span>
                        </h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex items-center gap-4'>
                            <a href="#_" className="bg-transparent relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                                <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                                <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                                    <span className="relative text-white">Button Text</span>
                                </span>
                            </a>
                            <button className="btn glass text-white hover:text-black">Glass button</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5 bg-transparent"><IoMdArrowBack className='hover:text-[#ff3811] size-6'></IoMdArrowBack></a>
                    <a href="#slide4" className="btn btn-circle bg-transparent"><IoMdArrowForward className='hover:text-[#ff3811] size-6'></IoMdArrowForward></a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl" />
                <div className="absolute h-full flex items-center left-0 right-0  bg-gradient-to-r from-[#000000FF] to-[#ffffff00] rounded-xl">
                    <div className='text-white space-y-7 w-1/3 pl-12'>
                        <h1 className='font-bold text-6xl' style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                        Affordable Price For Car {' '}
                            <span style={{ color: 'red', fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Servicing', 'Wash', 'Parts', 'ETC']}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={80}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                    onLoopDone={handleDone}
                                />
                            </span>
                        </h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex items-center gap-4'>
                            <a href="#_" className="bg-transparent relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                                <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                                <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                                    <span className="relative text-white">Button Text</span>
                                </span>
                            </a>
                            <button className="btn glass text-white hover:text-black">Glass button</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5 bg-transparent"><IoMdArrowBack className='hover:text-[#ff3811] size-6'></IoMdArrowBack></a>
                    <a href="#slide5" className="btn btn-circle bg-transparent"><IoMdArrowForward className='hover:text-[#ff3811] size-6'></IoMdArrowForward></a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full rounded-xl" />
                <div className="absolute h-full flex items-center left-0 right-0  bg-gradient-to-r from-[#000000FF] to-[#ffffff00] rounded-xl">
                    <div className='text-white space-y-7 w-1/3 pl-12'>
                        <h1 className='font-bold text-6xl' style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                        Affordable Price For Car {' '}
                            <span style={{ color: 'red', fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Servicing', 'Wash', 'Parts', 'ETC']}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={80}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                    onLoopDone={handleDone}
                                />
                            </span>
                        </h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex items-center gap-4'>
                            <a href="#_" className="bg-transparent relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                                <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                                <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                                    <span className="relative text-white">Button Text</span>
                                </span>
                            </a>
                            <button className="btn glass text-white hover:text-black">Glass button</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5 bg-transparent"><IoMdArrowBack className='hover:text-[#ff3811] size-6'></IoMdArrowBack></a>
                    <a href="#slide6" className="btn btn-circle bg-transparent"><IoMdArrowForward className='hover:text-[#ff3811] size-6'></IoMdArrowForward></a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full rounded-xl" />
                <div className="absolute h-full flex items-center left-0 right-0  bg-gradient-to-r from-[#000000FF] to-[#ffffff00] rounded-xl">
                    <div className='text-white space-y-7 w-1/3 pl-12'>
                        <h1 className='font-bold text-6xl' style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                        Affordable Price For Car {' '}
                            <span style={{ color: 'red', fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Servicing', 'Wash', 'Parts', 'ETC']}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={80}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                    onLoopDone={handleDone}
                                />
                            </span>
                        </h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex items-center gap-4'>
                            <a href="#_" className="bg-transparent relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                                <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                                <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                                    <span className="relative text-white">Button Text</span>
                                </span>
                            </a>
                            <button className="btn glass text-white hover:text-black">Glass button</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle mr-5 bg-transparent"><IoMdArrowBack className='hover:text-[#ff3811] size-6'></IoMdArrowBack></a>
                    <a href="#slide1" className="btn btn-circle bg-transparent"><IoMdArrowForward className='hover:text-[#ff3811] size-6'></IoMdArrowForward></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;