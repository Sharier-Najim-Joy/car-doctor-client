import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { RiDeleteBin6Line } from "react-icons/ri";


const BookingsRow = ({ booking,handleDelete,handleBookingConfirm }) => {

    const {user} = useContext(AuthContext)
    const { img,service ,date,price,_id,status} = booking;

    return (
        <tr>
            <th>
                <div onClick={()=>handleDelete(_id)}>
                    <RiDeleteBin6Line></RiDeleteBin6Line>
                </div>
            </th>
            <td>

                <div className="avatar">
                    <div className="w-24 rounded">
                        {
                            user && <img src={img} />
                        }
                    </div>
                </div>
            </td>
            <td>
                        {service}
            </td>
            <td>{date}</td>
            <td>{price}</td>
            <th>
             {
                status === 'confirm' ? <span className="text-purple-600">Confirmed</span>:
                <button onClick={()=>handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
             }   
            </th>
        </tr>
    );
};

export default BookingsRow;