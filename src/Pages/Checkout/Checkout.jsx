
import { useLoaderData } from 'react-router-dom';
import img from '../../assets/images/checkout/checkout.png'
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';


const Checkout = () => {

   const service = useLoaderData();
   const { user } = useContext(AuthContext);

   const handleBookService = event =>{
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const amount = form.amount.value;
    const booking ={
        customerName:name,
        date,
        service:service?.title,
        service_id:service?._id,
        email,
        price:amount,
        img:service?.img
    }
    // console.log(booking);
    
    fetch('https://car-doctor-server-nine-lac.vercel.app/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          },
          body: JSON.stringify(booking)
    }).then(res=>res.json())
    .then(data=>{
        // console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'success',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    })
    

   }

    return (
        <div>
            <div>
                <img src={img} alt="" className='w-full' />
            </div>
            <form onSubmit={handleBookService} className="card-body p-20">
                <div className='flex gap-3'>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name" name='name' className="input input-bordered" defaultValue={user?.displayName}   required />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input type="date" placeholder="Date" name='date' className="input input-bordered"  required />
                </div>
                </div>
               <div className='flex gap-3'>
               <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Amount Deu</span>
                    </label>
                    <input type="text" placeholder="Amount" name='amount' defaultValue={"$"+ service.price} className="input input-bordered" required />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input type="email" placeholder="Your Email" name='email' className="input input-bordered" defaultValue={user?.email} required />
                </div>
               </div>
               <div className='mt-6'>
               <textarea className="textarea textarea-bordered w-full" placeholder="Your Message"></textarea>
               </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#FF3811] delay-700">Order Confirm</button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;