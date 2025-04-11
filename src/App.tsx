import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import PasswordRecoveryForm from "./components/PasswordRecoveryForm";
import Signup from "./components/Signup";
import Amazon from "./page/Amazon";
import GetStart from "./page/GetStart";
import Home from "./page/Home";
import Azure from "./service/Azure";
import CompTIA from "./service/CompTIA";
import Github from "./service/Github";
import Google from "./service/Google";
import Hashicorp from "./service/Hashicorp";
import Kubernetes from "./service/Kubernetes";
import Linux from "./service/Linux";
import NVIDIA from "./service/NVIDIA";
import Oracle from "./service/Oracle";
import SpecialCloudPackages from "./service/SpecialCloudPackages";

const AppLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/getStart",
        element: <GetStart />,
      },
      {
        path: "/amazon",
        element: <Amazon />,
      },
      {
        path: "/google",
        element: <Google />,
      },
      {
        path: "/azure",
        element: <Azure />,
      },
      {
        path: "/kubernetes",
        element: <Kubernetes />,
      },
      {
        path: "/hashicorp",
        element: <Hashicorp />,
      },
      {
        path: "/nvidia",
        element: <NVIDIA />,
      },
      {
        path: "/comptia",
        element: <CompTIA />,
      },
      {
        path: "/lpi",
        element: <Linux />,
      },
      {
        path: "/github",
        element: <Github />,
      },
      {
        path: "/oracle",
        element: <Oracle />,
      },
      {
        path: "/special",
        element: <SpecialCloudPackages />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/kubernetes",
        element: <Kubernetes />,
      },
      {
        path: "/register",
        element: <Signup />,
      },
      {
        path: "/PasswordRecovery",
        element: <PasswordRecoveryForm />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={AppRouter} />;
};

export default App;
