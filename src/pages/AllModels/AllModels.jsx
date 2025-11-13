import React from "react";
import { useLoaderData } from "react-router";
import ModelCard from "../../components/ModelCard";

const AllModels = () => {
  const data = useLoaderData();
  console.log(data);

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
      <div className="px-2 sm:px-4 md:px-6 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          {data.map((model) => (
            <ModelCard key={model._id} model={model}></ModelCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllModels;
