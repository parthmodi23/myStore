import axios from "axios";
import React, { useEffect, useState } from "react";
import '../App.css';
import './shoes.css'
import { Link } from "react-router-dom";
// import { Carousel } from "react-bootstrap";
function Shoesnew() {
  const [shoesdata, setShoesdata] = useState([]);
  const [searchtext, setSearchtext] = useState("");


  useEffect(() => {
    axios
      .get(`https://lime-outrageous-codfish.cyclic.app/api/data?s=shoes&c=${searchtext}`)
      .then((response) => {
        setShoesdata(response.data);
      })
  }, [searchtext])
  if (!shoesdata) {
    return <h1>Loading....</h1>
  }
  function changedvalue(e) {
    setSearchtext(e.target.value);
  }


  return (

     
      <div className="App2">
        {shoesdata.slice(0, 4).map((shoes) => (
          <div className="card" key={shoes.product_id}>
            <div className="image">  <Link to={`/shoesdetail/${shoes.product_id}`}> <img src={shoes.product_images} alt={shoes.product_name} />  </Link></div>
            <h3 style={{ textAlign: "left" }}>{shoes.product_name}</h3>
            <h3 style={{ textAlign: "left" }}>${shoes.price}</h3>
            <Link to={`/shoesdetail/${shoes.product_id}`}><button type="submit">details</button></Link>


          </div>
        ))}

      </div>
  );

}
export default Shoesnew;