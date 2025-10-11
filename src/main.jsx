import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/Routes";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
