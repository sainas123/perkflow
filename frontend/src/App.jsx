import {createBrowserRouter,createRoutesFromElements, Route} from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import Login from "./pages/login"
import Register from "./pages/register"
import Dashboard from "./pages/dashboard"

const router=createBrowserRouter(
    createRoutesFromElements(

        <Route path="/" element={<RootLayout/>}>

            <Route index element={<Register/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>

        </Route>

    )
  
)

export default router


         


        
         
    
