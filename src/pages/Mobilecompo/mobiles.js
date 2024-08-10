import axios from "axios";
import React, { useEffect, useState } from "react";
import '../../App.css';
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
function Mobile() {
    const [mobiledata,setMobiledata]=useState([]);

    useEffect(()=>{
        axios
        .get("https://mystore-n5bm.onrender.com/api/data?s=mobile")
        .then((response)=>{
            setMobiledata(response.data);
        })
    },[])
    if(!mobiledata){
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
        {mobiledata.map((items) => (
          <Carousel.Item key={items.product_id}>
            <Link to={`/Details/${items.product_id}`}>
              <img
                className="d-block w-100"
                src={items.product_images}
                alt={items.product_name}  height="500px" width="500px"
              />
            </Link>
            {/* <Carousel.Caption className="d-none d-md-block">
              <h3 style={{color:"red"}}>{items.product_name}</h3>
            </Carousel.Caption> */}
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="App2">
        {mobiledata.map((shoes)=>(
            <div className="card" key={shoes.product_id}>
             <div className="image">  <Link to={`/Mobiledetails/${shoes.product_id}`}> <img src={shoes.product_images} alt={shoes.product_name} />  </Link></div>
                <h3 style={{textAlign:"left"}}>{shoes.product_name}</h3>
                <h3 style={{textAlign:"left"}}>${shoes.price}</h3>
                <Link to={`/Mobiledetails/${shoes.product_id}`}><button type="submit">details</button></Link>

              
            </div>
        ))}

        </div></>
    );
    
}
export default Mobile;