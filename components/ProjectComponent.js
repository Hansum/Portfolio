const project = () => {
  return (
    <div className="flex align-center justify-center my-auto mx-4">
      <div className="align-center">
        <div>
          <h1 className="mt-10 text-white text-2xl text-center font-poppins">
            Projects
          </h1>
        </div>
        <div>
          <section class="text-gray-700 body-font">
            <div class="container px-5 py-24 mx-auto flex flex-wrap">
              <div class="lg:w-auto w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                <img
                  alt="feature"
                  className="object-cover object-center h-full w-full sm:h-64 sm:w-64"
                  src="https://dummyimage.com/460x500"
                />
              </div>
              <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                <div class="flex flex-col mb-10 lg:items-start items-center">
                  <h1 className="text-orange-400 font-poppins font-bold text-xl ">
                    Jobaho
                  </h1>
                  {/* <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div> */}
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                      jobaho-co.now.sh
                    </h2>
                    <p className="leading-relaxed text-base text-white">
                      Jobaho is a job listing web application that categorize
                      jobs through their experience level. It is only available
                      in cebu
                    </p>
                    <a className="mt-3 text-indigo-500 inline-flex items-center">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default project;
