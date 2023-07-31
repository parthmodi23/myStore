import axios from "axios";
import React, { useEffect, useState } from "react";
import '../App.css';
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

function Home() {
    const [shoesdata,setShoesdata]=useState([]);

    useEffect(()=>{
        axios
        .get("http://localhost:3000/api/data")
        .then((response)=>{
            setShoesdata(response.data);
        })
    },[])
    if(!shoesdata){
        return <h1>Loading....</h1>
    }

    return(
        <>
        <Carousel
        interval={1500}
        pause="hover"
        wrap={true}
        onSlide={(slideIndex) => console.log(`Active Slide: ${slideIndex}`)}
      >
        {shoesdata.map((items) => (
          <Carousel.Item key={items.product_id}>
            <Link to={`/Details/${items.product_id}`}>
              <img
                className="d-block w-100"
                src={items.product_images}
                alt={items.product_name}  height="450px" width="500px"
              />
            </Link>
            {/* <Carousel.Caption className="d-none d-md-block">
              <h3 style={{color:"red"}}>{items.product_name}</h3>
            </Carousel.Caption> */}
          </Carousel.Item>
        ))}
      </Carousel>
        
        <div className="App2">
        {shoesdata.map((shoes)=>(
            <div className="card" key={shoes.product_id}>
             <div className="image">  <Link to={`/Details/${shoes.product_id}`}> <img src={shoes.product_images} alt={shoes.product_name} />  </Link></div>
                <h3 style={{textAlign:"left"}}>{shoes.product_name}<br/>
                ${shoes.price}</h3>
              
            </div>
        ))}

        </div>
        
        </>
    );
    
}
export default Home;