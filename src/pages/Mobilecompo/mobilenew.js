import axios from "axios";
import React, { useEffect, useState } from "react";
import '../../App.css';
import { Link } from "react-router-dom";
function Mobilenew() {
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
      <div className="App2">
        {mobiledata.slice(0,4).map((shoes)=>(
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
export default Mobilenew;