import React from "react";

const experience = () => {
  return (
    <section className="text-gray-500 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="mx-auto -mt-6 mb-6 ">
          <h1 className="text-white text-2xl font-poppins">Work Experience</h1> 
        </div>
        <div className="flex flex-wrap w-full justify-center">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6 ">
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-500 inline-flex items-center justify-center text-white relative z-10">
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-bold title-font text-lg text-white mb-1 tracking-wider">
                  HIREtrades
                </h2>
                <p className="leading-relaxed">
                  Currently working as a Backend Developer using Laravel.
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-500 inline-flex items-center justify-center text-white relative z-10">
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-bold title-font text-lg text-white mb-1 tracking-wider">
                  Forward BPO
                </h2>
                <p className="leading-relaxed">
                  Former Backend Developer Intern working for an internal project
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="w-1 bg-gray-800 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-500 inline-flex items-center justify-center text-white relative z-10">
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-bold title-font text-lg text-white mb-1 tracking-wider">
                  University of San Carlos
                </h2>
                <p className="leading-relaxed">
                  Volunteered as a web developer for an International Conference held at University of San Carlos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default experience;
