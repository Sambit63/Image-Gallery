import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../components/navbar";
import { Card } from "../../components/card";
import { Button, ButtonGroup } from '@chakra-ui/react'

const WorkOut=()=>{
    const [arr,setArr]=useState([]);
    const [wholearr,setWholeArr]=useState([]);
    const pageArr=[];
    let i=1;
    while (i< Math.ceil(wholearr.length/5)){
        pageArr.push(i);
        i++;
    }
    const [page,setPage]=useState(1);
    const getData= async()=>{
        await fetch("http://localhost:8080/Workout",{
            method:"GET",
        })
        .then((res)=> res.json())
        .then((data)=>{
            setWholeArr(data);
            const selectedPage = page - 1;
            const itemsPerPage = 9;
            const start = selectedPage * itemsPerPage;
            const end = start + itemsPerPage;
            const newData = data.slice(start, end);
            setArr(newData);
      
            window.scrollTo(0, 0);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
    const handlePage=(el) =>{
        setPage(el);
      };
    useEffect(()=>{
        getData();
    },[page]);
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
    src="https://t4.ftcdn.net/jpg/01/84/63/09/360_F_184630923_GF9S3Yz4XydO3ZDjBBslhq6Q5pdLeIKk.jpg"
    alt="Error"
    style={{ width: '100%',position:'relative',top:'80px' }}
  />
  <div style={{ 
    position: "absolute",
    top: "43%",
    left: "33%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "White",
    fontSize: "24px",
    fontWeight: "bold",
    background: "rgba(0, 0, 0, 0)",
    padding: "10px",
    borderRadius: "5px",
    zIndex:"2"
  }}>
    <div>
      <h1>Workout</h1>
      <p style={{fontSize:"18px",fontStyle:"italic"}}>Elevate your fitness journey with our image gallery's Workout category. Dive into a visual collection of exercises, fitness routines, and inspirational fitness enthusiasts. From weightlifting and cardio workouts to yoga and mindfulness, discover images that motivate and empower you to achieve your fitness goals.</p>
      
      
      
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
export default WorkOut;