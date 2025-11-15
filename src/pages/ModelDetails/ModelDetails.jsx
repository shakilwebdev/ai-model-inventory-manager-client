import React from "react";
import { Link, useLoaderData } from "react-router";

const ModelDetails = () => {
  const data = useLoaderData();
  const model = data.result;
  console.log(model);
  const { name, framework, useCase, dataset, description, image, _id } = model;

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="card w-full max-w-2xl bg-base-100 shadow-2xl rounded-2xl overflow-hidden border border-white">
          <figure className="w-full">
            <img
              src={image}
              alt={name}
              className="w-full h-80 object-contain"
            />
          </figure>
          <div className="card-body space-y-2">
            <h2 className="card-title text-2xl font-bold text-center">
              {name}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              <p>
                <span className="font-semibold">Framework:</span> {framework}
              </p>
              <p>
                <span className="font-semibold">Use Case:</span> {useCase}
              </p>
              <p>
                <span className="font-semibold">Dataset:</span> {dataset}
              </p>
            </div>

            <p className="mt-2">
              <span className="font-semibold">Description:</span> {description}
            </p>

            <div className="card-actions justify-end mt-4">
              <button className="btn text-white rounded-full bg-linear-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 w-full sm:w-auto">
                Purchase Model
              </button>
              <Link
                to={`/update-model/${_id}`}
                className="btn text-white rounded-full bg-linear-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 w-full sm:w-auto"
              >
                Update Model
              </Link>
              <button className="btn text-white rounded-full bg-linear-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 w-full sm:w-auto">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDetails;
