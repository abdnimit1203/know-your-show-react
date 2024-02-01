import toast from "react-hot-toast";

const Modal = ({movie}) => {
    const handleSubmit = (e)=>{
        e.preventDefault();
        const data = e.target;
        console.log(data.name.value);
        toast.success("Succesfully Bought Tickets!")
        e.reset()
    }
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn   text-xs md:btn-wide btn-primary my-2 "
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        book a movie ticket
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Book A Ticket for Movie : {movie}</h3>
          <form onSubmit={handleSubmit} className="flex flex-col justify-center bg-accent p-6 rounded-xl space-y-4">
            <input type="text" name="name" placeholder="Name"  className="py-2 px-4 rounded-xl" required/>
            <input type="number" name="tickets" placeholder="Number of tickets"  className="py-2 px-4 rounded-xl" required max={10} min={1}/>
            <button type="submit" className="btn btn-success text-white">Book Now</button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
