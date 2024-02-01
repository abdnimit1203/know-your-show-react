import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";

const Card = ({ show }) => {
  return (
    <div className="group relative block bg-black rounded-xl hover:scale-105 transition duration-200 ">
      <img
        alt="show image"
        src={
          show?.image?.medium == null
            ? "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
            : show?.image?.medium
        }
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-xl"
      />

      <div className="relative p-4 sm:p-6 lg:p-8 ">
        <p className="text-sm font-medium uppercase tracking-widest bg-pink-500 text-white rounded-xl px-2  w-fit p-1 ">
          {show?.type}
        </p>

        <p className="text-xl  font-bold text-white sm:text-2xl md:my-3 glass w-fit bg-black my-2">
          {show?.name}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">

        {show?.genres.map((genre, idx) => (
          <p
            key={idx}
            className=" px-2 p-1 text-xs bg-success w-fit inline mr-2 rounded-xl text-white font-semibold "
          >
            {genre}
          </p>
        ))}
        </div>
        <div className="mt-32 sm:mt-48 lg:mt-64 ">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 space-y-3">
            <p className="text-sm text-white  ">
                Rating: 
            <CiStar className="text-primary text-xl inline-block mr-2" />
  {show?.rating.average}
            </p>
            <Link to={`shows/${show.id}`} className="btn btn-sm btn-primary">
              View Summary
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  show: PropTypes.object,
};
export default Card;
