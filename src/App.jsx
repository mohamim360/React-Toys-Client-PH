
import Alltoys from './Components/Alltoys.jsx'
import Home from './Components/Home.jsx'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Toy from './Toy.jsx';
import NotFound from './Components/NotFound.jsx';
import View from './Components/View.jsx';
import AddToy from './Components/AddToy.jsx';
import MyToys from './Components/MyToys.jsx';
import Update from './Components/Update.jsx';
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
        ,
        {
          path: "/addtoy",
            element: <AddToy></AddToy>,
        }
        ,{
          path: "/mytoy",
            element: <MyToys></MyToys>,
           
        }
        ,{
          path: "/update/:id",
            element: <Update></Update>,
            loader: ({params}) => fetch(`http://localhost:5000/addedtoy/${params.id}`)
           
        }
        ,
        {
          path: "/view",
            element: <View></View>,
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


