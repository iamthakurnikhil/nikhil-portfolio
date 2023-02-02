import React, { useEffect, useState } from "react";

import {
  featuredPortfolio,
  Reactwebsite,
  reactClones,
  vanillajs,
  reactNative,
} from "../data";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "1",
      title: "Featured",
    },
    {
      id: "2",
      title: "React Web",
    },
    {
      id: "3",
      title: "React Clones",
    },
    {
      id: "4",
      title: "Vanilla JS",
    },
    {
      id: "5",
      title: "React Native",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "1":
        setData(featuredPortfolio);
        break;
      case "2":
        setData(Reactwebsite);
        break;
      case "3":
        setData(reactClones);
        break;
      case "4":
        setData(vanillajs);
        break;
      case "5":
        setData(reactNative);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);


  return (
    <section id="portfolio" className="w-full min-h-screen">
      <div className="flex flex-col mt-12 md:mt-0 justify-center items-center mb-4">
        <div className="text-4xl font-bold ">PORTFOLIO</div>
        <div className="text-xl mt-1 text-teal-500">My project work</div>
      </div>

      <div className="flex flex-wrap items-center justify-center">
        <ul
          className={
            "flex w-full items-center justify-center mx-4 sm:mx-8 lg:gap-10 gap-4 flex-wrap cursor-pointer text-sm sm:text-lg mt-10"
          }
        >
          {list.map((item) => (
            <li
              className={
                selected == item.id
                  ? "px-3 py-1 text-white font-semibold bg-teal-900 rounded-xl border-2 border-teal-900"
                  : "border-2 px-3 py-1 font-semibold rounded-xl border-black"
              }
              onClick={() => setSelected(item.id)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:mx-40  mx-12 gap-5 flex flex-wrap items-center justify-center mt-5 md:mt-10">
        {data.map(({ img, demo, id, github }) => (
          <div key={id} className="m-2 shadow-lg shadow-gray-600 p-1">
            <img
              className="rounded-lg bg-cover bg-center h-[25vh] w-[210px]"
              src={img}
              alt=""
            />
            <div className="flex mt-2 justify-between space-x-3">
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className="text-xl m-1 p-1 px-2 cursor-pointer text-teal-500 font-semibold border-2 border-teal-500 rounded-xl duration-300 hover:scale-110 "
              >
                Demo
              </a>
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="m-1 text-xl text-white font-semibold p-1 px-4 border-2 w-2/2 scrollbar-hide duration-300 hover:scale-110 border-teal-500 bg-teal-500 rounded-xl"
              >
                Github
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
