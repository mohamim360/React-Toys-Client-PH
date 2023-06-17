
import { Outlet } from "react-router-dom"
import Header from "./Components/Header"


function Toy() {
 
  return (
   
      <div>
      <Header></Header>
      <Outlet></Outlet>
      
      </div>
      
  
  )
}

export default Toy
