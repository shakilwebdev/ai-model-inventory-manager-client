import React, { use, useEffect, useState } from "react";
// import { Link, useLoaderData, useNavigate } from "react-router";
import { Link, useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

const ModelDetails = () => {
  /*   const data = useLoaderData();
  const model = data.result;
  console.log(model);
  const navigate = useNavigate();
  const { name, framework, useCase, dataset, description, image, _id } = model;
  */

  const navigate = useNavigate();
  const { id } = useParams();
  const [model, setModel] = useState({});
  const [loading, setLoading] = useState(true);
  const { user } = use(AuthContext);

  const { name, framework, useCase, dataset, description, image, _id } = model;

  useEffect(() => {
    fetch(`http://localhost:3000/models/${id}`, {
      headers: {
        // authorization: "hello",
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setModel(data.result);
        setLoading(false);
      });
  }, [user, id]);

  const handleDelete = () => {
    console.log("hello");

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/models/${_id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            navigate("/all-models");
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => {
            console.log(error);
          });

        /*        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        }); */
      }
    });
  };

  const handlePurchase = () => {
    fetch(`http://localhost:3000/purchase`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...model, purchased_by: user.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Model purchased successfully!");
        /* 
        navigate("/all-models");
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
         */
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (loading) {
    return <p className="text-center mt-96">Loading...</p>;
  }
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
              <button
                onClick={handlePurchase}
                className="btn text-white rounded-full bg-linear-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 w-full sm:w-auto"
              >
                Purchase Model
              </button>
              <Link
                to={`/update-model/${_id}`}
                className="btn text-white rounded-full bg-linear-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 w-full sm:w-auto"
              >
                Update Model
              </Link>
              <button
                onClick={handleDelete}
                className="btn text-white rounded-full bg-linear-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 w-full sm:w-auto"
              >
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
