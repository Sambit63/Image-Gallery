
import React, { useEffect, useState, useRef } from "react";
import { Card } from "../components/card";
import Navbar from "../components/navbar";
import { Button, ButtonGroup } from '@chakra-ui/react'

function Homepage() {
  const [arr, setArr] = useState([]);
  const [wholearr, setWholeArr] = useState([]);
  const [page, setPage] = useState(1);
  const [servers] = useState([
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
  ]);

  const pageArr = [];
  let i = 1;
  while (i < Math.ceil(wholearr.length / 22)) {
    pageArr.push(i );
    i++;
  }

  
  const getData = async () => {
    const dataPromises = servers.map((server) =>
      fetch(server, {
        method: "GET",
      }).then((res) => res.json())
    );
  
    Promise.all(dataPromises)
      .then((data) => {
        const mergedData = data.flat();
        setWholeArr(mergedData);
  
        const selectedPage = page - 1;
        const itemsPerPage = 24;
        const start = selectedPage * itemsPerPage;
        const end = start + itemsPerPage;
        const newData = mergedData.slice(start, end);
        setArr(newData);
  
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  

  const handlePage = (el) => {
    setPage(el);
  };

  useEffect(() => {
    getData();
  }, [page]);

  const paginationDivRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const middleDivHeight = document.documentElement.scrollHeight;
      const windowScrollPosition =
        window.innerHeight + window.pageYOffset + 100;

      if (windowScrollPosition >= middleDivHeight) {
        paginationDivRef.current.style.display = "block";
      } else {
        paginationDivRef.current.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ position: "relative", width: "100%" }}>
  <img
    src="https://wallpapercave.com/wp/wp6689718.jpg"
    alt="Error"
    style={{ width: '100%' }}
  />
  <div style={{ 
    position: "absolute",
    top: "50%",
    left: "35%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
    background: "rgba(0, 0, 0, 0)",
    padding: "10px",
    borderRadius: "5px",
    zIndex:"2"
  }}>
    <div>
      <h1>Welcome to Our Image Gallery</h1>
      <p style={{fontSize:"18px",fontStyle:"italic"}}>Explore stunning images from various categories in our extensive gallery. Whether you're looking for breathtaking landscapes, captivating portraits, or fascinating abstract compositions, you'll find a diverse range of visual delights here.</p>
      
      <p style={{fontSize:"18px",fontStyle:"italic"}}>Our user-friendly interface allows you to easily navigate and search for specific images or dive into different categories. From nature and wildlife to architecture and street photography, there's something for everyone.</p>
      
    </div>
  </div>
</div>

      {arr.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            marginTop: "10%",
            marginBottom: "60px",
            marginLeft:"100px",
            padding: "0 10px",
            position: "relative",
            minHeight: "100vh",
          }}
        >
          {arr.map((el) => {
            return <Card image={el.url} />;
          })}
        </div>
      ) : (
        <div
          style={{
            marginTop: "10%",
            marginBottom: "60px",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>No Data Found</h1>
        </div>
      )}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: arr.length > 0 ? "block" : "none",
        }}
        ref={paginationDivRef}
      >
        {pageArr.map((el) => {
          return <Button colorScheme='blue' size='sm' onClick={() => handlePage(el)}>{el}</Button>;
        })}
      </div>
    </div>
  );
}

export default Homepage;