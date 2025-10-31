import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home/Home";
import RootLayout from "../layout/RootLayout/RootLayout";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home
        }
    ]
  },
]);