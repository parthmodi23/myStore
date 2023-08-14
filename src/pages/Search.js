import axios from "axios";
import React, { useEffect, useState } from "react";
import '../App.css';
import { useParams } from "react-router";
import { Link } from "react-router-dom";
function Search() {
    const { searchtext } = useParams();
    const [searchdata,  setSearchdata]=useState([]);

    useEffect(()=>{
        axios
        .get(`https://lime-outrageous-codfish.cyclic.app/api/data?s=${searchtext}`)
        .then((response)=>{
            setSearchdata(response.data);
        })
    }, [searchtext] );
    if(!searchdata){ 
        return <h1>Loading....</h1>
    }

    return(
        
        <div className="App2">
        {searchdata.map((searchvalue)=>(
            <div className="card" key={searchvalue.product_id}>
             <div className="image">  <Link to={`/clothesdetails/${searchvalue.product_id}`}> <img src={searchvalue.product_images} alt={searchvalue.product_name} />  </Link></div>
                <h3 style={{textAlign:"left"}}>{searchvalue.product_name}</h3>
                <h3 style={{textAlign:"left"}}>${searchvalue.price}</h3>
                <Link to={`/clothesdetails/${searchvalue.product_id}`}><button type="submit">details</button></Link>

            </div>
        ))}

        </div>
    );
    
}
export default Search;