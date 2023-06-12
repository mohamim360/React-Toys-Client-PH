import React from 'react'




import Alltoys from './Components/Alltoys.jsx'
import Home from './Components/Home.jsx'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Toy from './Toy.jsx';
import NotFound from './Components/NotFound.jsx';
function App(){
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Toy></Toy>,
      children:[
        {
          
            path: "/",
              element: <Home></Home>,
          
        
        },
        {
          path: "/alltoys",
            element: <Alltoys></Alltoys>,
        }
      ]
    },
    
        {
          path: "*",
            element: <NotFound></NotFound>,
        }
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}
export default App


