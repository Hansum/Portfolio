import HeroComponent from "../components/HeroComponent";
import SkillsComponent from "../components/SkillsComponent";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";

const project = () => {
  return (
    <>
      <HeaderComponent />
      <HeroComponent />
      <div className="flex align-center justify-center my-auto mx-4">
        <div className="align-center">
          <div id="projects">
            <h1 className="mt-24 text-white text-2xl text-center font-poppins">
              Projects
            </h1>
          </div>
          <div>
            <section className="text-gray-700 body-font">
              <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="lg:max-w-sm xl:max-w-xl xl:max-h-full w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                  <img
                    alt="feature"
                    className="object-cover object-center h-full w-full "
                    src="/jobaho.JPG"
                  />
                </div>
                <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                  <div className="flex flex-col mb-10 lg:items-start items-center sm:my-auto">
                    <div className="flex-grow">
                      <h1 className="text-orange-400 font-poppins lg:text-3xl font-bold text-xl mb-3">
                        Jobaho
                      </h1>
                      <a
                        href="https://jobaho-co.now.sh"
                        className="justify-center lg:justify-start text-blue-500 no-underline font-poppins font-regular flex"
                        target="_blank"
                      >
                        <svg
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          className="w-5 h-5 mt-1 mr-2"
                          stroke="currentColor"
                        >
                          <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                        jobaho-co.now.sh
                      </a>
                      <p className="leading-relaxed text-base text-white mt-3">
                        Jobaho is a job listing website that categorize IT-CS
                        jobs in Cebu through level of experience.
                      </p>
                      <div className="sm:flex sm:justify-center md:justify-center lg:justify-start mt-3 sm:mt-5">
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

                      <div className="sm:flex sm:justify-center md:justify-center lg:justify-start mt-4 sm:mt-5">
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
                    src="/steamcloud.JPG"
                  />
                </div>
                <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                  <div className="flex flex-col mb-10 lg:items-start items-center sm:my-auto">
                    <div className="flex-grow">
                      <h1 className="lg:text-3xl text-orange-400 font-poppins font-bold text-xl mb-3">
                        STEAM Cloud
                      </h1>
                      <h2 className="text-blue-500 flex justify-center lg:justify-start">
                        <svg
                          className="w-5 h-5 mt-1  mr-2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                        </svg>
                        Capstone
                      </h2>
                      <p className="leading-relaxed text-base text-white mt-3">
                        An Online Data Analytics Platform and Research
                        Management System for Science, Technology, Engineering,
                        Agriculture, Fisheries and Mathematics (STEAM) Education
                        in the Philippines
                      </p>
                      <div className="sm:flex sm:justify-center md:justify-center lg:justify-start mt-3 sm:mt-5">
                        <div className="sm:mr-2">
                          <h3 className="text-white">Source Code:</h3>
                        </div>
                        <div className="">
                          <a
                            href="https://github.com/Hansum/Steam-Cloud"
                            target="_blank"
                            className="no-underline text-blue-500"
                          >
                            github
                          </a>
                        </div>
                      </div>
                      <div className="sm:flex sm:justify-center md:justify-center lg:justify-start mt-4 sm:mt-5">
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
