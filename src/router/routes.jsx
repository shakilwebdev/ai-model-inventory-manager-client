import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import AllModels from "../pages/AllModels/AllModels";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddModel from "../pages/AddModel/AddModel";
import PrivateRoute from "./PrivateRoute";
import ModelDetails from "../pages/ModelDetails/ModelDetails";
import UpdateModel from "../pages/UpdateModel/UpdateModel";
import MyModels from "../pages/MyModels/MyModels";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <p className="text-center mt-96">Loading...</p>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:3000/latest-models"),
      },
      {
        path: "/all-models",
        element: <AllModels />,
        loader: () => fetch("http://localhost:3000/models"),
      },
      {
        path: "/add-model",
        element: (
          <PrivateRoute>
            <AddModel />
          </PrivateRoute>
        ),
      },
      {
        path: "/model-details/:id",
        element: (
          <PrivateRoute>
            <ModelDetails />
          </PrivateRoute>
        ),
        /*  loader: ({ params }) =>
          fetch(`http://localhost:3000/models/${params.id}`, {
            headers: {
              authorization: "hello",
            },
          }), */
      },
      {
        path: "/my-models",
        element: (
          <PrivateRoute>
            <MyModels />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-model/:id",
        element: (
          <PrivateRoute>
            <UpdateModel />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/models/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
