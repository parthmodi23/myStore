import axios from "axios";
import React, { useEffect, useState } from "react";
import '../App.css';
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
function Books() {
    const [bookdata, setBookdata] = useState([]);

    const [searchtext, setSearchtext] = useState("");


    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/data?s=books`)
            .then((response) => {
                setBookdata(response.data);
            })
    }, [searchtext])
    function changedvalue(e) {
        setSearchtext(e.target.value);
    }
    if (!bookdata) {
        return <h1>Loading....</h1>
    }

    return (
        <>
        <Carousel
        interval={1500}
        pause="hover"
        wrap={true}
        onSlide={(slideIndex) => console.log(`Active Slide: ${slideIndex}`)}
      >
        {bookdata.map((items) => (
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


            <div className="App2">
                <div>
                    <h2>Filter</h2>
                    <select name="Gender" id="Gender" value={searchtext} onChange={changedvalue}>
                        <option value=""> All</option>
                        <option value="man"> Male</option>
                        <option value="woman"> Female</option>

                    </select>



                </div>
                {bookdata.map((books) => (
                    <div className="card" key={books.product_id}>
                        <img src={books.product_images} alt={books.product_name}  />
                        <h3 style={{ textAlign: "left" }}>{books.product_name}</h3>
                        <h3 style={{ textAlign: "left" }}>₹{books.price}</h3>
                        <div className="btn"><Link to={`/Details/${books.product_id}`}><button type="submit">More details</button></Link></div>
                    </div>
                ))}

            </div></>

    );

}
export default Books;