import React from "react";
import { FaBrain, FaMicrochip } from "react-icons/fa";
import { Link } from "react-router";

const ModelCard = ({ model }) => {
  //   console.log(model);

  const { framework, image, name, useCase, _id } = model;

  return (
    <div className="w-full h-full px-1">
      <article className="group w-full bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-200 overflow-hidden flex flex-col h-full">
        {/* Image */}
        <div className="relative overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={name}
            className="w-full h-44 sm:h-52 md:h-56 lg:h-64 object-cover transition-transform duration-400 transform group-hover:scale-105"
          />

          {/* small badge on image */}
          <div className="absolute top-3 left-3 bg-white/90 text-gray-800 text-xs sm:text-sm rounded-full px-3 py-1 flex items-center gap-2 shadow">
            <FaBrain className="text-indigo-600 text-sm" />
            <span className="font-medium truncate max-w-32 sm:max-w-40">
              {framework}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4 md:p-5 flex flex-col grow">
          <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 line-clamp-2 hover:text-indigo-600 transition-colors">
            {name}
          </h3>

          <p className="text-xs sm:text-sm text-gray-600 mt-2 line-clamp-3">
            {useCase}
          </p>

          <div className="mt-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full text-xs">
                <FaMicrochip className="text-indigo-500 text-[0.7rem]" />
                <span className="truncate max-w-24 sm:max-w-40">{useCase}</span>
              </span>
            </div>

            <Link
              to={`/model-details/${_id}`}
              className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white px-4 py-2 text-sm sm:text-base font-medium shadow-sm transition-transform transform hover:-translate-y-0.5"
            >
              View
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ModelCard;
