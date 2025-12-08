import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/Auth/SignIn";

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
]);

export default router;
