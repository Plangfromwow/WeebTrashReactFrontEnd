import "./App.css";
import Home from "./Pages/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />
  },
  {
    path:"/events",
    element:<h1>Events Page!</h1>
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
