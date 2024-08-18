import React from "react";
import "./App.css";
import PrivateComponent from "./components/PrivateComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Signin,
  Signup,
  Layout,
  Home,
  Contact,
  About,
  Seller,
  Buyer,
  Dashboard,
  MainSplash,
  Admin,
  Chatsystem,
  Weather,
  Comparison,
  Updateproduct
} from "./pages";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<MainSplash/>}></Route>
          <Route path="/" element={<Layout />}>
            <Route element={<PrivateComponent />}>
              <Route path="/seller" element={<Seller />}></Route>
              <Route path="/updateproduct" element={<Updateproduct/>}></Route>
              <Route path="/buyer" element={<Buyer />}></Route>
              <Route path="/chat" element={<Chatsystem />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/comparison" element={<Comparison/>}></Route>
              <Route path="/admin" element={<Admin />}></Route>
            </Route>
            <Route path="/home"element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/login" element={<Signin />}></Route>
            <Route path="/register" element={<Signup />}></Route>
            <Route path="/weather" element={<Weather />}></Route>

            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
