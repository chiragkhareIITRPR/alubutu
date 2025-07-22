import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { About } from "./pages/About";
import { Contact } from "./pages/contact";
import { Country } from "./pages/country";
import { Home } from "./pages/Home";
import { AppLayout } from "./Component/Layout/AppLayout";
import { ErrorPage } from "./Errorpage";
import { Portfolio } from "./pages/Portfolio";

const Layout = () => (
  <div>
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;