import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { CgWebsite } from "react-icons/cg";
import Modal from "../components/Others/Modal";
import { IoReturnUpBack } from "react-icons/io5";

const ShowSummary = () => {
  const showData = useLoaderData();
  console.log(showData);

  const navigate = useNavigate()
  return (
    <article className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
        <button onClick={()=>navigate(-1)} className="btn btn-sm mb-4 border-2 border-pink-500"><IoReturnUpBack className="inline mr-2 " />
Go Back</button>
      <div className="flex flex-col justify-center items-center md:flex-row md:items-start sm:gap-8 ">
        <div className="w-[50%] lg:mr-10 mx-auto rounded-xl ">
          <img
            src={showData?.image.original}
            alt="show-thumb"
            className="rounded-xl"
          />
          <Link
            to={showData?.officialSite}
            className=" text-white btn  text-xs md:btn-wide bg-blue-500 my-2 "
          >
            {" "}
            <CgWebsite className="inline" />
            Go to official website{" "}
          </Link>
         
           <Modal movie={showData?.name}/>
      
        </div>

        <div>
          <strong className="rounded border border-pink-500 bg-pink-500 px-3 py-1.5 text-[10px] font-medium text-white">
            {showData?.type}
          </strong>

          <h3 className="my-4 text-lg font-medium sm:text-2xl ">
            {showData?.name}
          </h3>
          {showData?.genres.map((genre, idx) => (
            <p
              key={idx}
              className=" px-2 p-1 text-xs bg-success w-fit inline mr-2 rounded-xl text-white font-semibold "
            >
              {genre}
            </p>
          ))}
          <div className="">
            <h3 className="font-bold py-4">Summary:</h3>
            {showData?.summary}
          </div>

          <div className="mt-4 sm:flex sm:items-center sm:gap-2">
            <div className="flex items-center gap-1 text-gray-500">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>

              <p className="text-xs font-medium">{showData.runtime} minutes runtime</p>
            </div>

            <span className="hidden sm:block" aria-hidden="true">
              &middot;
            </span>

            <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
              Rating: {showData?.rating?.average}
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <p className="font-semibold p-16">Show Details:</p>
          <hr />
          <div className="border rounded-xl p-4 space-y-3">
            <div>
              <span className="font-semibold">Language : </span> {showData?.language}
            </div>
            <div>
              <span className="font-semibold">Status : </span> {showData?.status}
            </div>
            <div>
              <span className="font-semibold">Status : </span> {showData?.status}
            </div>
            <div>
              <span className="font-semibold">Aired : </span> {showData?.premiered}
            </div>
            <div>
              <span className="font-semibold">Status : </span> {showData?.status}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ShowSummary;
