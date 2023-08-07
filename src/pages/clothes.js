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
      .get(`http://localhost:3001/api/data?s=clothes&g=${searchtext}`)
      .then((response) => {
        setClothesdata(response.data);
      });
  }, [searchtext]);
  const offer = [
    {
      "id":20000,
    "offerimage":"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg"
  },
  {"id":20001,
    "offerimage":"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/b656a7f4-4688-4997-bb7c-54b78793981e1658752386588-Western-Wear_Desk.jpg"
  },
  {"id":20002,
    "offerimage":"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/30/e8aea330-10cd-4778-91ab-da9678161ec11690739860849-PB-Banner_Wishlist-Now.jpg"
  },
  {"id":20003,
    "offerimage":"https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/8f3a227f1526cba9.jpg?q=50"
  },
  {"id":20004,
    "offerimage":"https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/4cd6690ef44564f3.jpg?q=50"
  },
  ];

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
            {/* <Carousel.Caption className="d-none d-md-block">
              <h3 style={{color:"red"}}>{items.product_name}</h3>
            </Carousel.Caption> */}
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
