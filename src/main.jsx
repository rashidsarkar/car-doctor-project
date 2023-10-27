import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router.jsx";
import AuthProvider from "./firebase/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClinent = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="mx-auto max-w-7xl">
    <React.StrictMode>
      <QueryClientProvider client={queryClinent}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </QueryClientProvider>
    </React.StrictMode>
  </div>
);
