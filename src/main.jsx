import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
