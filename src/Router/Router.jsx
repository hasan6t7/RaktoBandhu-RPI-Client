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
import BecomeDonor from "../Pages/Dashboard/User/BecomeDonor";
import BloodRequestsPage from "../Pages/Dashboard/Admin/BloodRequests";
import BloodRequestDetails from "../Pages/Dashboard/Admin/BloodRequestDetails";
import AboutUs from "../Pages/about/AboutUs";
import BloodGroupInfo from "../Pages/Blood Group/BloodGroup";
import Members from "../Pages/Members/Members";
import Contact from "../Pages/contact/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "become-donor",
        Component: BecomeDonor,
      },
      {
        path: "about",
        Component: AboutUs,
      },
      {
        path: "blood-group",
        Component: BloodGroupInfo,
      },
      {
        path: "members",
        Component: Members,
      },
      {
        path: "contact",
        Component: Contact,
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
      {
        path: "all/blood-request",
        Component: BloodRequestsPage,
      },
      {
        path: "blood-request/:requestId",
        Component: BloodRequestDetails,
      },
    ],
  },
]);

export default router;
