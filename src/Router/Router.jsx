import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/Auth/SignIn";
import SignUp from "../Pages/Auth/SignUp";
import DashLayout from "../Layouts/DashLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import UserProfile from "../Pages/Dashboard/User/UserProfile";
import EditProfile from "../Pages/Dashboard/User/EditProfile";
import BloodRequest from "../Pages/Dashboard/User/BloodRequest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: "/signIn",
    Component: SignIn,
  },

  {
    path: "/signUp",
    Component: SignUp,
  },
  {
    path: "/dashboard",
    element: <DashLayout></DashLayout>,
    children: [
      {
        index: true,
        element: <Dashboard></Dashboard>,
      },
      {
        path: "profile",
        Component: UserProfile,
      },
      {
        path: "edit-profile/:id",
        Component: EditProfile,
      },
      {
        path: "blood-request",
        Component: BloodRequest,
      },
    ],
  },
]);

export default router;
