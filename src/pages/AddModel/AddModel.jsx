import React, { use } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";

const AddModel = () => {
  const { user } = use(AuthContext);
  // console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      framework: e.target.framework.value,
      useCase: e.target.useCase.value,
      dataset: e.target.dataset.value,
      description: e.target.description.value,
      image: e.target.image.value,

      createdAt: new Date(),
      purchased: 0,
      createdBy: user.email,
    };
    // console.log(formData);
    fetch("http://localhost:3000/models", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Model added successfully!");
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="card border border-gray-200 bg-base-100 w-full max-w-md shadow-2xl rounded-2xl">
        <div className="card-body p-6 relative">
          <h2 className="text-2xl font-bold text-center mb-6">Add New Model</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="label font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter name"
              />
            </div>
            {/* Framework */}
            <div>
              <label className="label font-medium mb-1">Framework</label>
              <input
                type="text"
                name="framework"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter Framework"
              />
            </div>
            {/* Use Case */}
            <div>
              <label className="label font-medium mb-1">Use Case</label>
              <input
                type="text"
                name="useCase"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter Use Case"
              />
            </div>
            {/* Dataset */}
            <div>
              <label className="label font-medium mb-1">Dataset</label>
              <input
                type="text"
                name="dataset"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter Dataset"
              />
            </div>

            {/* Description Textarea */}
            <div>
              <label className="label font-medium mb-1">Description</label>
              <textarea
                name="description"
                required
                rows="3"
                className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-40"
                placeholder="Enter description"
              ></textarea>
            </div>

            {/* Thumbnail URL */}
            <div>
              <label className="label font-medium mb-1">Image URL</label>
              <input
                type="url"
                name="image"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn text-white mt-4 w-full rounded-full bg-linear-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600"
            >
              Add Model
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddModel;
