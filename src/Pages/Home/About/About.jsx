import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mb-6">
            <div className="hero-content flex-col lg:flex-row">
              <div className="lg:w-1/2 relative">
              <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
              <img src={parts} className="absolute right-5 top-1/2 w-1/2 rounded-lg shadow-2xl border-8 border-white" />
              </div>
                <div className="lg:w-1/2">
                    <h3 className='mb-5 text-[#FF3811] font-bold text-lg'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="bt py-4 px-6 rounded-xl mt-6 bg-[#FF3811] text-white hover:text-black hover:bg-white duration-700">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;