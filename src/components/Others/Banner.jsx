const Banner = () => {
  return (
    <div
      className="hero min-h-[400px]"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="hero-overlay bg-opacity-70 bg-black"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold text-primary">KNOW YOUR SHOW</h1>
          <p className="mb-5 text-warning mt-2 animate-pulse">Explore, Discover, Enjoy</p>
          <p className="mb-5">
            Unlock the world of entertainment with Know Your Show. Discover
            comprehensive cards and summaries for your favorite TV shows and
            movies. <br /> Your gateway to informed watching. Dive in now!
          </p>
          <p className="mb-2">powered by- tvmaze.com</p>
          <button className="btn btn-primary">Show All</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
