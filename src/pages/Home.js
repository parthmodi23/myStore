import axios from "axios";
import React, { useEffect, useState } from "react";
import '../App.css';
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import Shoes from "./shoes";
import Shoesnew from "./shoesnew";
import Clothesnew from "./clothesnew";
import Mobilenew from "./mobilenew";
import Booksnew from "./booknew";
function Home() {
    const [shoesdata,setShoesdata]=useState([]);

    useEffect(()=>{
        axios
        .get("https://lime-outrageous-codfish.cyclic.app/api/data")
        .then((response)=>{
            setShoesdata(response.data);
        })
    },[])
    const offer = [
      {
        "id":20000,
      "offerimage":"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/0174e4d7-448c-4746-8572-69461ad5be101659020268081-Tops---Tees_Desk.jpg"
    },
    {"id":20001,
      "offerimage":"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg "
    },
    {"id":20002,
      "offerimage":"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/30/e8aea330-10cd-4778-91ab-da9678161ec11690739860849-PB-Banner_Wishlist-Now.jpg"
    },
    {"id":20003,
      "offerimage":"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/b656a7f4-4688-4997-bb7c-54b78793981e1658752386588-Western-Wear_Desk.jpg"
    },
    {"id":20004,
      "offerimage":"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg"
    },
    ];
    
  
    if(!shoesdata){
        return <h1>Loading....</h1>
    }

    return(
        <>
         <Carousel
      interval={1500}
      pause="hover"
      wrap // This will make the carousel repeat automatically
      onSlide={(slideIndex) => console.log(`Active Slide: ${slideIndex}`)}
    >
      {offer.map((items) => (
        <Carousel.Item key={items.id}>
          <Link to="/clothes">
            <img className="d-block w-100" src={items.offerimage} alt={`Slide ${items.id}`} />
          </Link>
        </Carousel.Item>
      ))}
      
   </Carousel>
   <Shoesnew /> 
   <Clothesnew/>
   <Mobilenew/>
   <Booksnew/>
  
        
        {/* <div className="App2">
        {shoesdata.map((shoes)=>(
            <div className="card" key={shoes.product_id}>
             <div className="image">  <Link to={`/Details/${shoes.product_id}`}> <img src={shoes.product_images} alt={shoes.product_name} />  </Link></div>
                <h3 style={{textAlign:"left"}}>{shoes.product_name}<br/>
                ${shoes.price}</h3>
                <Link to={`/Details/${shoes.product_id}`}><button type="submit">details</button></Link>
              
            </div>
        ))}

        </div> */}
        
        </>
    );
    
}
export default Home;