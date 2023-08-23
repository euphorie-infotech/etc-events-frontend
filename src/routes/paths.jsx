import AboutUs from "../Pages/AboutUs/AboutUs";
import Checkout from "../Pages/Checkout/Checkout";
import Events from "../Pages/Events/Events";
import Home from "../Pages/Home/Home";

import SingleEvent from "../Pages/SingleEvent/SingleEvent";
import Store from "../Pages/Store/Store";
import CancelUrl from "../components/CancelUrl";
import FailedUrl from "../components/FailedUrl";
import PrivacyPolicy from "../components/PrivacyPolicy";
import ReturnAndRefundPolicy from "../components/ReturnAndRefundPolicy";
import SuccessUrl from "../components/SuccessUrl";
import TermsAndConditions from "../components/TermsAndConditions";

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
  {
    id: 6,
    name: "Terms and Conditions",
    path: "/terms-conditions",
    element: <TermsAndConditions />,
  },
  {
    id: 7,
    name: "Privacy Policy",
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    id: 8,
    name: "Return and Refund Policy",
    path: "/return-refund",
    element: <ReturnAndRefundPolicy />,
  },
  {
    id: 9,
    name: "About Us",
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    id: 10,
    name: "Payment Success",
    path: "/success",
    element: <SuccessUrl />,
  },
  {
    id: 11,
    name: "Payment Failed",
    path: "/failed",
    element: <FailedUrl />,
  },
  {
    id: 12,
    name: "Payment Cancelled",
    path: "/cancelled",
    element: <CancelUrl />,
  },
];
