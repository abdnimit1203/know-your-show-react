import { Link, NavLink } from "react-router-dom";
import { MdMovieFilter } from "react-icons/md";

const Navbar = () => {
  const navlinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? " active bg-primary px-3 py-2  text-neutral rounded-xl"
            : "hover:bg-primary px-3 py-2 hover:text-neutral transition duration-200 rounded-xl"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive, isPending }) =>
          isPending
          ? "pending"
          : isActive
          ? " active bg-primary px-3 py-2  text-neutral rounded-xl"
          : "hover:bg-primary px-3 py-2 hover:text-neutral transition duration-200 rounded-xl"
        }
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive, isPending }) =>
          isPending
          ? "pending"
          : isActive
          ? " active bg-primary px-3 py-2  text-neutral rounded-xl"
          : "hover:bg-primary px-3 py-2 hover:text-neutral transition duration-200 rounded-xl"
        }
      >
        Register
      </NavLink>
    </>
  );
  return (
    <div className="drawer text-base-100 font-semibold">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-neutral ">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          
          
          <div className="flex-1 px-2 mx-2 xl:ml-6 ">
          <MdMovieFilter className="inline text-3xl mr-2 text-primary" />
          <Link to={'/'} className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-amber-400 to-pink-600"> 
Know Your Show
          </Link>
        </div>
          <div className="flex-none hidden lg:block space-x-6">
            <div className="menu menu-horizontal space-x-3">{navlinks}</div>
          </div>
        </div>
      </div>
      <div className="drawer-side z-10">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-80 min-h-full bg-neutral space-y-3 flex justify-center items-center">
          {navlinks}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
