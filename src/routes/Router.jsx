import { createBrowserRouter } from "react-router";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    index: true,
    Component: Login,
  },
]);

export default router;
