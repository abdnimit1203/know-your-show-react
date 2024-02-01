import toast from "react-hot-toast";
import PropTypes from "prop-types";
const Modal = ({movie}) => {
    const handleSubmit = (e)=>{
        e.preventDefault();
        const data = e.target;
        const buyerName = data.name.value
        const buyerEmail = data.email.value
        const NumOfTickets = data.tickets.value
        const ticketData ={
            "Buyer Name": buyerName,
            "BuyerEmail": buyerEmail,
            "Number Of Tickets": NumOfTickets


        }
        console.log(ticketData);
        localStorage.setItem("pusrchaseData", JSON.stringify(ticketData) )
        
        toast.success("Succesfully Bought Tickets!")
        
    }
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn   text-xs md:btn-wide btn-primary my-2  "
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        book a movie ticket
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-pink-500">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white hover:text-red-400">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg py-6 glass rounded-xl px-4 my-2 text-white bg-[#dd308796]">Book A Ticket for Movie : <span>{movie}</span></h3>
          <form onSubmit={handleSubmit} className="flex flex-col justify-center glass p-6 rounded-xl space-y-4">
            <input type="text" name="name" placeholder="Name"  className=" focus:outline-none py-2 px-4 rounded-xl" required/>
            <input type="email" name="email" placeholder="Your Email"  className=" focus:outline-none py-2 px-4 rounded-xl" required/>
            <input type="number" name="tickets" placeholder="Number of tickets"  className=" focus:outline-none py-2 px-4 rounded-xl" required max={10} min={1}/>
            <button type="submit" className="btn btn-success text-white">Pay & Book Now</button>
          </form>
        </div>
      </dialog>
    </div>
  );
};
Modal.propTypes = {
    movie: PropTypes.sting,
  };
export default Modal;
