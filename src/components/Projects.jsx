import React from "react";
import calculatorImg from "../assets/calculatorImg.jpeg";
import weatherImg from "../assets/weatherImg.jpeg";
import memoryImg from "../assets/memoryImg.jpeg";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-[#444440] bg-[#ffffff] pt-20"
    >
      <div className="max-w-[1000px] max-h-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full md:pb-32">
        <div>
          <p className="text-4xl font-bold inline border-b-4 text-[#444440] border-[#344359]">
            Projects
          </p>
        </div>

        {/* CONTAINER */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 py-10">
          {/* GRID ITEM */}
          <div
            style={{ backgroundImage: `url(${calculatorImg})` }}
            tabIndex="0"
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto transform ease-in-out content-div relative overflow-hidden"
          >
            {/* HOVER EFFECTS */}
            <div className="opacity-0 pointer-events-none  md:group-hover:opacity-100 group-focus:opacity-100 group-hover:pointer-events-auto  absolute inset-0 backdrop-filter backdrop-blur-md rounded-md overflow-hidden pt-3">
              <span
                className="text-3xl font-bold text-white"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
              >
                Calculator
              </span>

              <p
                className="text-1xl text-white pt-3 pb-3 mr-3 ml-3 font-bold"
                style={{ textShadow: "0px 0px 2px #000" }}
              >
                A simple calculator built using JavaScript. It can perform basic
                mathematical operations and has a user-friendly interface.
              </p>

              <div className="text-center">
                <a href="https://google.com"  target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 hover:bg-[#0f0f0f] hover:border-[#0f0f0f] hover:text-[#ffffff] font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://google.com"  target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 hover:bg-[#0f0f0f] hover:border-[#0f0f0f] hover:text-[#ffffff] font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* GRID ITEM */}
          <div
            style={{ backgroundImage: `url(${weatherImg})` }}
            tabIndex="0"
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto transform ease-in-out content-div relative overflow-hidden"
          >
            {/* HOVER EFFECTS */}
            <div className="opacity-0 pointer-events-none  md:group-hover:opacity-100 group-focus:opacity-100 group-hover:pointer-events-auto  absolute inset-0 backdrop-filter backdrop-blur-md rounded-md overflow-hidden pt-3">
              <span
                className="text-3xl font-bold text-white"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
              >
                Weather App
              </span>

              <p
                className="text-1xl text-white pt-3 pb-3 mr-3 ml-3 font-bold"
                style={{ textShadow: "0px 0px 2px #000" }}
              >
                Fetches and displays the weather of a city using the
                OpenWeatherMap API. Users can enable location-based weather
                retrieval.
              </p>

              <div className="text-center">
                <a href="https://google.com"  target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 hover:bg-[#0f0f0f] hover:border-[#0f0f0f] hover:text-[#ffffff] font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://google.com"  target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 hover:bg-[#0f0f0f] hover:border-[#0f0f0f] hover:text-[#ffffff] font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* GRID ITEM */}
          <div
            style={{ backgroundImage: `url(${memoryImg})` }}
            tabIndex="0"
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto transform ease-in-out content-div relative overflow-hidden"
          >
            {/* HOVER EFFECTS */}
            <div className="opacity-0 pointer-events-none  md:group-hover:opacity-100 group-focus:opacity-100 group-hover:pointer-events-auto  absolute inset-0 backdrop-filter backdrop-blur-md rounded-md overflow-hidden pt-3">
              <span
                className="text-3xl font-bold text-white"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
              >
                Memory Game
              </span>

              <p
                className="text-1xl text-white pt-3 pb-3 mr-3 ml-3 font-bold"
                style={{ textShadow: "0px 0px 2px #000" }}
              >
                An app to test your memory. Avoid clicking the same image twice
                to maintain your score. Test your memory and aim for the highest
                score possible.
              </p>

              <div className="text-center">
                <a href="https://google.com"  target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 hover:bg-[#0f0f0f] hover:border-[#0f0f0f] hover:text-[#ffffff] font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://google.com"  target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 hover:bg-[#0f0f0f] hover:border-[#0f0f0f] hover:text-[#ffffff] font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>

            </div>
          </div>



          
        </div>
      </div>
    </div>
  );
};

export default Projects;