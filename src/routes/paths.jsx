import Checkout from "../Pages/Checkout/Checkout";
import Events from "../Pages/Events/Events";
import Home from "../Pages/Home/Home";
import SingleEvent from "../Pages/SingleEvent/SingleEvent";
import Store from "../Pages/Store/Store";

export const routes = [
  {
    id: 1,
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    id: 2,
    name: "Store",
    path: "/store",
    element: <Store />,
  },
  {
    id: 3,
    name: "Events",
    path: "/events",
    element: <Events />,
  },
  {
    id: 4,
    name: "Single Events",
    path: "/events/:eventId",
    element: <SingleEvent />,
  },
  {
    id: 5,
    name: "Checkout",
    path: "/checkout",
    element: <Checkout />,
  },
];
