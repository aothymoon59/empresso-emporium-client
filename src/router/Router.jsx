import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../components/Home/HomePage/HomePage";
import AddCoffee from "../components/AddCoffe/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee/UpdateCoffee";
import Errorpage from "../components/ErrorPage/Errorpage";
import ViewCoffee from "../components/ViewCoffee/ViewCoffee";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(
            `https://coffee-server-aothymoon59.vercel.app/coffees/${params.id}`
          ),
      },
      {
        path: "/viewCoffee/:id",
        element: <ViewCoffee></ViewCoffee>,
        loader: ({ params }) =>
          fetch(
            `https://coffee-server-aothymoon59.vercel.app/coffees/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
