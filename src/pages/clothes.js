import axios from "axios";
import React, { useEffect, useState } from "react";
import '../App.css';
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
function Clothes() {
  const [clothesdata, setClothesdata] = useState([]);
  const [searchtext, setSearchtext] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/data?sub=clothes&g=${searchtext}`)
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
    <>
      <Carousel
        interval={1500}
        pause="hover"
        wrap={true}
        onSlide={(slideIndex) => console.log(`Active Slide: ${slideIndex}`)}
      >
        {clothesdata.map((items) => (
          <Carousel.Item key={items.product_id}>
            <Link to={`/Details/${items.product_id}`}>
              <img
                className="d-block w-100"
                src={items.product_images}
                alt={items.product_name}  height="500px" width="500px"
              />
            </Link>
            <Carousel.Caption className="d-none d-md-block">
              <h3 style={{color:"red"}}>{items.product_name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      
        <div>
          <h2>Filter</h2>
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
          <div className="genderbox">
           <div className="women" ><img src={require('../images/womenpic.jpg')} alt="Women"/>
            <h1>SHOPE NOW</h1></div>
            <img src={require('../images/menpic.jpg')} alt="Men"/>
            <img src={require('../images/kidspic.jpg')} alt="Kids"/>


          </div>
        </div>
        <div className="App2">
        {clothesdata.map((Mobiles)=>(
            <div className="card" key={Mobiles.product_id}>
             <div className="image">  <Link to={`/Details/${Mobiles.product_id}`}> <img src={Mobiles.product_images} alt={Mobiles.product_name} />  </Link></div>
                <h3 style={{textAlign:"left"}}>{Mobiles.product_name}</h3><br/>
                <h3 style={{textAlign:"left"}}>${Mobiles.price}</h3>
              
            </div>
        ))}

        </div>
    </>
  );
}

export default Clothes;
