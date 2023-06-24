import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Navbar from "./components/navbar";
import Animal from "./pages/navpage/animal";
import Mountain from "./pages/navpage/mountain";
import Food from "./pages/navpage/food";
import WorkOut from "./pages/navpage/workout";
import Movie from "./pages/navpage/movies";
import Element from "./pages/navpage/elements";
import SuperHero from "./pages/navpage/superheros";
import City from "./pages/navpage/city";
import Car from "./pages/navpage/car";
import Sport from "./pages/navpage/sports";
import Signin from "./pages/signin/signin";
import Signup from "./pages/signup/signup";


function AllRoutes(){
    return(
        <Routes>
            <Route
            path="/home"
            element={<Homepage/>}
            />
            <Route path="/home"
            element={<Navbar/>}/>
            <Route
            path="/animal"
            element={<Animal/>}
            />
            <Route
            path="/mountain"
            element={<Mountain/>}
            />
            <Route
            path="/food"
            element={<Food/>}
            />
            <Route
            path="/workout"
            element={<WorkOut/>}
            />
            <Route
            path="/movies"
            element={<Movie/>}
            />
            <Route path="/elements" element={<Element/>}/>
            <Route path="/superheros" element={<SuperHero/>}/>
            <Route path="/city" element={<City/>}/>
            <Route path="/car" element={<Car/>}/>
            <Route path="/sports" element={<Sport/>}/>
            <Route path="/" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>

        </Routes>
    )
}
export default AllRoutes;