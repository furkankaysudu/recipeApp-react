import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Navigate } from "react-router-dom"
import Login from "../pages/login/Login"
import Home from "../pages/home/Home"
import About from "../pages/about/About"
import Details from "../pages/details/Details"

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element= {<About/>}/>
            <Route path="/details" element= {<Details/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter