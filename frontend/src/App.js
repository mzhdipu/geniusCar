import logo from "./logo.svg";

import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Root/Router/Router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </>
  );
}

export default App;
