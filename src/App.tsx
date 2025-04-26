import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Main from "./afterSubscription/Main";
import { AuthProvider } from "./components/AuthContext";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import PasswordRecoveryForm from "./components/PasswordRecoveryForm";
import Signup from "./components/Signup";
import Amazon from "./page/Amazon";
import Course from "./page/Course";
import GetStart from "./page/GetStart";
import Home from "./page/Home";
import Azure from "./service/Azure";
import Cloud from "./service/Cloud";
import CompTIA from "./service/CompTIA";
import Github from "./service/Github";
import Google from "./service/Google";
import Hashicorp from "./service/Hashicorp";
import Kubernetes from "./service/Kubernetes";
import Linux from "./service/Linux";
import NVIDIA from "./service/NVIDIA";
import Oracle from "./service/Oracle";
import SpecialCloudPackages from "./service/SpecialCloudPackages";

const App = () => {

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
        { path: "/", element: <Home /> },
        { path: "/getStart", element: <GetStart /> },
        { path: "/amazon", element: <Amazon /> },
        { path: "/google", element: <Google /> },
        { path: "/azure", element: <Azure /> },
        { path: "/kubernetes", element: <Kubernetes /> },
        { path: "/hashicorp", element: <Hashicorp /> },
        { path: "/nvidia", element: <NVIDIA /> },
        { path: "/comptia", element: <CompTIA /> },
        { path: "/lpi", element: <Linux /> },
        { path: "/github", element: <Github /> },
        { path: "/oracle", element: <Oracle /> },
        { path: "/special", element: <SpecialCloudPackages /> },
        { path: "/login", element: <Login  /> },
        { path: "/register", element: <Signup /> },
        { path: "/PasswordRecovery", element: <PasswordRecoveryForm /> },
        { path: "/cloud", element: <Cloud /> },
        { path: "amazon/course", element: <Course /> },
        { path: "google/course", element: <Course /> },
        { path: "/main", element: <Main /> },
      ],
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={AppRouter} />
    </AuthProvider>
  );
};

export default App;
