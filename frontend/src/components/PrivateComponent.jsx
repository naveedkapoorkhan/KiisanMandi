import React from "react";
import {Navigate, Outlet} from "react-router-dom";
const PrivateComponent= ()=>{
    let auth= localStorage.getItem("user"); 
    if(auth) { return <Outlet/>;}
    else{return <Navigate to="/login"/>; }
}
export default PrivateComponent;