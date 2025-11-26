import React, { useState } from "react";
import { useLoaderData } from "react-router";
import ModelCard from "../../components/ModelCard";

const AllModels = () => {
  const data = useLoaderData();
  // console.log(data);
  const [models, setModels] = useState(data);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;
    console.log(search_text);

    setLoading(true);

    fetch(`https://ai-models-server.vercel.app/search?search=${search_text}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setModels(data);
        setLoading(false);
      });
  };

  /*   if (loading) {
    return <p className="text-center mt-96">Loading...</p>;
  } */
  return (
    <div className="min-h-screen">
      <div className="py-4 sm:py-6 md:py-8 px-2 sm:px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl text-center font-bold mb-2">
          All Models
        </h2>
        <p className="text-center text-sm sm:text-base">
          AI Model Inventory Manager
        </p>
      </div>

      <form
        onSubmit={handleSearch}
        className="text-center mb-10 flex gap-2 justify-center px-2"
      >
        <label className="input rounded-full">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input name="search" type="search" placeholder="Search" />
        </label>
        <button className="btn btn-primary rounded-full">
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      <div className="px-2 sm:px-4 md:px-6 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          {/*     {data.map((model) => (
            <ModelCard key={model._id} model={model}></ModelCard>
          ))} */}
          {models.map((model) => (
            <ModelCard key={model._id} model={model}></ModelCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllModels;
