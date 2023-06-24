
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "./card";
import { AiFillHome } from 'react-icons/ai';
import { GiCobra } from 'react-icons/gi';
// import { SiGooglelens } from 'react-icons/si';
import { FcSearch } from 'react-icons/fc';


import "./navbar.css"; // Import the CSS file with the provided styles
import DarkModeSwitch from "./darkswitch";

function Navbar() {
  const [arr, setArr] = useState([]);
  const [searchStr, setSearchStr] = useState("");
  const [newArr, setNewArr] = useState([]);

  const handleChange = (e) => {
    setSearchStr(e.target.value);
  };

  const getData = async () => {
    const urls = [
      "http://localhost:8080/mymovies",
      "http://localhost:8080/WorkOut",
      "http://localhost:8080/mountains",
      "http://localhost:8080/animals",
      "http://localhost:8080/foods",
      "http://localhost:8080/elements",
      "http://localhost:8080/superheros",
      "http://localhost:8080/city",
      "http://localhost:8080/Cars",
      "http://localhost:8080/sports"
    ];

    try {
      const dataPromises = urls.map((url) =>
        fetch(url).then((res) => res.json())
      );

      const data = await Promise.all(dataPromises);
      const mergedData = data.flat();
      setArr(mergedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getSearchData = () => {
    if (searchStr === "") {
      setNewArr([]);
    } else {
      const newData = arr.filter(
        (item) => item.title && item.title.includes(searchStr)
      );
      setNewArr(newData);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getSearchData();
  }, [searchStr]);

  return (
     <div className="App">
      <div className="navbar">
        <div
        style={{"position":"absolute","right":"3%","top":"14.6px"}}
        ><DarkModeSwitch/>
       </div>
        <div className="top-links">
          <Link to="/">
            <button style={{position:"absolute",right:"100px",top:"15px"}}>Sign Out</button>
          </Link>
          
        </div>

        <div className="page-links">
          <Link to="/animal">Animal</Link>
          <Link to="/car">Car</Link>
          <Link to="/city">City</Link>
          <Link to="/elements">Element</Link>
          <Link to="/food">Food</Link>
          <Link to="/mountain">Mountain</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/sports">Sports</Link>
          <Link to="/superheros">Superhero</Link>
          <Link to="/workout">Workout</Link>
          
         </div>
         <div className="home-link">

          <Link to="/home">
            <AiFillHome size={20} />
          </Link>
        </div>
        <div className="logo-link">
          <GiCobra size={20} />
          <span>TECH</span>
        </div>
        
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            value={searchStr}
            onChange={(e) => handleChange(e)}
          />
          <FcSearch className="scan-icon" />
        </div>
        </div>
        {/* <div className="gallery"> */}
          {newArr.length > 0 ? (
            <div className="card-grid">
              {newArr.map((el) => (
                <Card key={el.id} image={el.url} />
              ))}
             </div> 
          ) : (
            <h1> </h1>
          )}
        
      </div>
    // </div>
  );
}

export default Navbar;