import { useLoaderData } from "react-router-dom";
import Banner from "../components/Others/Banner";
import Card from "../components/Cards/Card";

const Home = () => {
  const data = useLoaderData();
  console.log(data?.length);
  return (
    <div className="w-[90%] mx-auto">
      <Banner />
      <h2 className="py-10 text-center font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        All Shows
      </h2>
      <div className="grid grid-cols-2  md:grid-cols-3 xl:grid-cols-4 gap-4 justify-center items-center py-10">
        {data?.map((show, idx) => (
          <Card key={idx} show={show.show} />
        ))}
      </div>
    </div>
  );
};

export default Home;
