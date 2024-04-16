import "./App.css";
import Home from "./Pages/home";
import Events from "./Pages/events";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />
  },
  {
    path:"/events",
    element:<Events />
  }
])




function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}







export default App;
