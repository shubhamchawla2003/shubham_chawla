
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import AppLayout from './Component/layout/AppLayout';
import Error from "./pages/Error";




const App = () => {

  const router = createBrowserRouter([

    {
      path:"/",
      element:<AppLayout />,
      errorElement: <Error />,
      children : [

        {
          path:"/",
          element:<Home />
        },
    
        {
          path:"/about",
          element:<About />
        },
    
        {
          path:"/project",
          element:<Project />,
        },
    
        {
          path:"/contact",
          element:<Contact />
        }

      ]
    }

    
  ]);

  return <RouterProvider router={router}/>
};

export default App;
