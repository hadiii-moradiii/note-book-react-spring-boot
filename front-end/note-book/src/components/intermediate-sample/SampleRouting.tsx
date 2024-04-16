import { RouterProvider } from "react-router-dom";
import router from "./routers/routes";

const SampleRouting = () => {
  return (
    <div>
      <h3>Instalation</h3>
      <code>npm i react-router-dom</code>
      <b />

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default SampleRouting;
