import axios from "axios";
import React, { useEffect, useState } from "react";
import '../../App.css';
import './shoes.css'
import { Link } from "react-router-dom";
// import { Carousel } from "react-bootstrap";
function Shoes() {
  const [shoesdata, setShoesdata] = useState([]);
  const [searchtext, setSearchtext] = useState("");


  useEffect(() => {
    axios
      .get(`https://mystore-n5bm.onrender.com/api/data?s=shoes&c=${searchtext}`)
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
    <div className="mainshoes">

      <div className="filter">
        <h2>Filter</h2>
        <p>Select Brand</p>
        <select
          name="company"
          id="company"
          value={searchtext}
          onChange={changedvalue}
        >
          <option value="">All</option>
          <option value="Nike">Nike</option>
          <option value="Adidas">Adidas</option>
          <option value="Puma">Puma</option>
          <option value="Converse">Converse</option>
        </select>
      </div>
      <div className="App2">
        {shoesdata.map((shoes) => (
          <div className="card" key={shoes.product_id}>
            <div className="image">  <Link to={`/shoesdetail/${shoes.product_id}`}> <img src={shoes.product_images} alt={shoes.product_name} />  </Link></div>
            <h3 style={{ textAlign: "left" }}>{shoes.product_name}</h3>
            <h3 style={{ textAlign: "left" }}>${shoes.price}</h3>
            <Link to={`/shoesdetail/${shoes.product_id}`}><button type="submit">details</button></Link>


          </div>
        ))}

      </div>
    </div>
  );

}
export default Shoes;