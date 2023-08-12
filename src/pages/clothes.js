import axios from "axios";
import React, { useEffect, useState } from "react";
import '../App.css';
import './clothes.css';
import { Link } from "react-router-dom";
// import { Carousel } from "react-bootstrap";
function Clothes() {
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
    <div className="mainclothes">
      <div className="filter">
        <h2>Filter</h2>
        <p>select Gender</p>
        <select
          name="Gender"
          id="Gender"
          value={searchtext}
          onChange={changedvalue}
        >
          <option value=""> All</option>
          <option value="man"> Male</option>
          <option value="woman"> Female</option>
        </select>
      
      </div>
          <div className="App2">
            {clothesdata.map((clothes) => (
            <div className="card" key={clothes.product_id}>
            <div className="image">  <Link to={`/Details/${clothes.product_id}`}> <img src={clothes.product_images} alt={clothes.product_name} />  </Link></div>
            <h3 style={{ textAlign: "left" }}>{clothes.product_name}</h3>
            <h3 style={{ textAlign: "left" }}>${clothes.price}</h3>
            <Link to={`/Details/${clothes.product_id}`}><button type="submit">details</button></Link>


          </div>
        ))}

      </div>
    </div>
  );
}

export default Clothes;
