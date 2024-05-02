import { SlCalender } from "react-icons/sl";
import { IoCall } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";




const Info = () => {
    return (
        <div className="bg-[#1E1E1E] px-16 py-20 flex justify-between rounded-xl mb-4">
            <div className="flex items-center gap-4 text-white">
                <SlCalender></SlCalender>
                <div>
                    <p>We are open monday-friday</p>
                    <h4>7:00 am - 9:00 pm</h4>
                </div>
            </div>
            {/*  */}
            <div className="flex items-center gap-4 text-white">
                <IoCall></IoCall>
                <div>
                    <p>Have a question?</p>
                    <h4>+2546 251 2658</h4>
                </div>
            </div>
            {/*  */}
            <div className="flex items-center gap-4 text-white">
                <IoLocationSharp></IoLocationSharp>
                <div>
                    <p>Need a repair? our address</p>
                    <h4>Liza Street, New York</h4>
                </div>
            </div>
            
        </div>
    );
};

export default Info;