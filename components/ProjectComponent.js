import jobahopic from "../public/jobaho.png";
import steam from "../public/capstone.png";
import SkillsComponent from "../components/SkillsComponent";
import FooterComponent from "../components/FooterComponent";

const project = () => {
  return (
    <>
      <div className="flex align-center justify-center my-auto mx-4">
        <div className="align-center">
          <div>
            <h1 className="mt-24 text-white text-2xl text-center font-poppins">
              Projects
            </h1>
          </div>
          <div>
            <section className="text-gray-700 body-font">
              <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="lg:max-w-sm xl:max-w-xl w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                  <img
                    alt="feature"
                    className="object-cover object-center h-full w-full "
                    src={jobahopic}
                  />
                </div>
                <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                  <div className="flex flex-col mb-10 lg:items-start items-center sm:my-auto">
                    <div className="flex-grow">
                      <h1 className="text-orange-400 font-poppins font-bold text-xl mb-3">
                        Jobaho
                      </h1>
                      <a
                        href="https://jobaho-co.now.sh"
                        className="text-blue-500 no-underline font-poppins font-regular "
                        target="_blank"
                      >
                        jobaho-co.now.sh
                      </a>
                      <p className="leading-relaxed text-base text-white mt-3">
                        Jobaho is a job listing web application that categorize
                        jobs through their experience level. It is only
                        available in cebu
                      </p>
                      {/* <a className="mt-3 text-indigo-500 inline-flex items-center">
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
                    </a> */}

                      <div className="sm:flex sm:justify-center md:justify-start mt-3 sm:mt-5">
                        <div className="sm:mr-2">
                          <h3 className="text-white">Source Code:</h3>
                        </div>
                        <div className="">
                          <a
                            href="https://github.com/Hansum/Jobaho"
                            target="_blank"
                            className="no-underline text-blue-500"
                          >
                            github
                          </a>
                        </div>
                      </div>

                      <div className="sm:flex sm:justify-center md:justify-start mt-4 sm:mt-5">
                        <div className="mt-2 sm:mt-3 sm:mr-2">
                          <h3 className="text-white">Tech Stack: </h3>
                        </div>
                        <div className="flex justify-center sm:mt-3">
                          <div>
                            <h3 className="mr-3 text-teal-200">Next Js</h3>
                          </div>
                          <div className="">
                            <h3 className="text-teal-200">Cheerio Js</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="text-gray-700 body-font">
              <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="lg:max-w-sm xl:max-w-xl w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                  <img
                    alt="feature"
                    className="object-cover object-center h-full w-full "
                    src={steam}
                  />
                </div>
                <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                  <div className="flex flex-col mb-10 lg:items-start items-center sm:my-auto">
                    <div className="flex-grow">
                      <h1 className="text-orange-400 font-poppins font-bold text-xl mb-3">
                        The STEAM Cloud
                      </h1>
                      <h2 className="text-blue-500">Thesis</h2>
                      <p className="leading-relaxed text-base text-white mt-3">
                        An Online Data Analytics Platform and Research
                        Management System for Science, Technology, Engineering,
                        Agriculture, Fisheries and Mathematics (STEAM) Education
                        in the Philippines
                      </p>
                      {/* <a className="mt-3 text-indigo-500 inline-flex items-center">
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
                    </a> */}
                      <div className="sm:flex sm:justify-center md:justify-start mt-4 sm:mt-5">
                        <div className="mt-2 sm:mt-3 sm:mr-2">
                          <h3 className="text-white">Tech Stack: </h3>
                        </div>
                        <div className="flex justify-center sm:mt-3">
                          <div>
                            <h3 className="mr-3 text-teal-200">HTML & CSS</h3>
                          </div>
                          <div className="mr-3 ">
                            <h3 className="text-teal-200">Node JS</h3>
                          </div>
                          <div className="">
                            <h3 className="text-teal-200">MySQL</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <hr />
          </div>
          <SkillsComponent />
          <FooterComponent />
        </div>
      </div>
    </>
  );
};

export default project;
