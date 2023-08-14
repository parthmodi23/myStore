import axios from "axios";
import React, { useEffect, useState } from "react";
import '../App.css';
import './clothes.css';
import { Link } from "react-router-dom";
function Clothesnew() {
  const [clothesdata, setClothesdata] = useState([]);
  const [searchtext, setSearchtext] = useState("");

  useEffect(() => {
    axios
      .get(`https://lime-outrageous-codfish.cyclic.app/api/data?s=clothes&g=${searchtext}`)
      .then((response) => {
        setClothesdata(response.data);
      });
  }, [searchtext]);


  function changedvalue(e) {
    setSearchtext(e.target.value);
  }

  if (!clothesdata) {
    return <h1>Loading....</h1>;
  }

  return (
    
          <div className="App2">
            {clothesdata.slice(0, 4).map((clothes) => (
            <div className="card" key={clothes.product_id}>
            <div className="image">  <Link to={`/Clothesdetails/${clothes.product_id}`}> <img src={clothes.product_images} alt={clothes.product_name} />  </Link></div>
            <h3 style={{ textAlign: "left" }}>{clothes.product_name}</h3>
            <h3 style={{ textAlign: "left" }}>${clothes.price}</h3>
            <Link to={`/Clothesdetails/${clothes.product_id}`}><button type="submit">details</button></Link>


          </div>
        ))}

      </div>
  );
}

export default Clothesnew;
