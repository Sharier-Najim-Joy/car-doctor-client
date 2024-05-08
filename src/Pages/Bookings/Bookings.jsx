import { useContext, useEffect, useState } from 'react';
import img from '../../assets/images/checkout/checkout.png'
import { AuthContext } from '../../provider/AuthProvider';
import BookingsRow from './BookingsRow';
import Swal from 'sweetalert2';
// import axios from 'axios';
import useAxiosSecure from '../../hooks/useAxiosSecure';


const Bookings = () => {

    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const axiosSecure = useAxiosSecure()

    // const url = `https://car-doctor-server-nine-lac.vercel.app/bookings?email=${user?.email}`;
    const url = `/bookings?email=${user?.email}`;

    useEffect(() => {

        axiosSecure.get(url)
        .then(res=>setBookings(res.data))

        // axios.get(url,{withCredentials: true})
        // .then(res=>{
        //     setBookings(res.data)
        // })
        // same

        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         setBookings(data);
        //     })
    }, [url,axiosSecure])

    const handleDelete = id => {
        // console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://car-doctor-server-nine-lac.vercel.app/bookings/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = bookings.filter(booking => booking._id !== id);
                            setBookings(remaining);
                        }
                    })
            }
        });
    }

    const handleBookingConfirm = id => {
        // console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Confirm it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://car-doctor-server-nine-lac.vercel.app/bookings/${id}`, {
                    method: 'PATCH',
                    headers: {
                        "content-type" : "application/json"
                    },
                    body: JSON.stringify({status: "confirm"})
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            // console.log(bookings);
                            const remaining = bookings.filter(booking => booking._id !== id);
                            const updated = bookings.find(booking => booking._id === id);
                            updated.status='confirm';
                            const newBooking = [updated,...remaining]
                            setBookings(newBooking);
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div>
                <img src={img} alt="" className='w-full' />
                <h3>{bookings.length}</h3>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>

                                    </th>
                                    <th>Picture</th>
                                    <th>Service Name</th>
                                    <th>Date</th>
                                    <th>Price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    bookings.map(booking => <BookingsRow 
                                        handleDelete={handleDelete} 
                                        booking={booking} 
                                        key={booking._id}
                                        handleBookingConfirm={handleBookingConfirm}
                                        ></BookingsRow>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bookings;