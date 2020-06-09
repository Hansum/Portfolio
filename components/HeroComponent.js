const hero = () => {
  return (
    <div className="flex align-center justify-center my-auto mx-4">
      <div className="align-center mt-20 ">
        <div>
          <h1 className="mb-10 sm:mb-24 text-white text-xl font-poppins font-bold sm:text-3xl xl:text-5xl xl:max-w-screen-xl">
            Hi there,{" "}
            <span className="text-orange-500">
              I'm Christian, aspiring Web / Software Developer.
            </span>{" "}
            Also Interested in bug bounty.
          </h1>
          <h3 className="mb-10 font-poppins text-white font-medium sm:text-xl sm:mb-32">
            Currently searching for a full time position
          </h3>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default hero;
