import React from "react";
import Home from "./home"
import Admin from "./admin";
import Login from "./login"
import  Register from "./register";
// import Adlog from "./adlog"
import Userdetails from "./Userdetails";
// import Bouquet from "./bouquet";
// import Handycraft from "./handycraft"
import Addtocart from "./addtocart"
// import Teddy from "./teddy";
// import Choco from "./choco"
// import Asthetic from "./asthetic"
import Collections from "./collections"
import Categary from "./categary"
// import Aside from "./aside"
import { Route,Routes,Link } from "react-router-dom";
// import { Register } from "./verify";
export default function App(){
  return(
    <div>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:email" element={<Home/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      {/* <Route path="/adminlogin" element={<Adlog/>}/> */}
      <Route path="/userdetails" element={<Userdetails/>}/>
      {/* <Route path="/bouquet" element={<Bouquet/>}/>
      <Route path="/handycraft" element={<Handycraft/>}/> */}

      {/* <Route path="/teddy" element={<Teddy/>}/>
      <Route path="/choco" element={<Choco/>}/>
      <Route path="/asthetics" element={<Asthetic/>}/> */}
      <Route path="/addtocart/:i" element={<Addtocart/>}/>
      <Route path="/categary" element={<Categary/>}/>
      <Route path="/collections" element={<Collections/>}/>
      {/* <Route path="asidecategary/:index" element={<Aside/>}/> */}
     </Routes>
    </div>
  )
}
