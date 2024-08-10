import axios from "axios";
import React, { useEffect, useState } from "react";
import '../../App.css';
import { Link } from "react-router-dom";
function Booksnew() {
    const [bookdata, setBookdata] = useState([]);

    useEffect(() => {
        axios
            .get(`https://mystore-n5bm.onrender.com/api/data?s=books`)
            .then((response) => {
                setBookdata(response.data);
            })
    }, [])
   
    if (!bookdata) {
        return <h1>Loading....</h1>
    }

    return (
        <>
     <div className="App2">
               {bookdata.slice(0,4).map((books) => (
                    <div className="card" key={books.product_id}>
                        <Link to={`/Bookdetails/${books.product_id}`}> <div className="image">  <img src={books.product_images} alt={books.product_name} /></div></Link>
                        <h3 style={{ textAlign: "left" }}>{books.product_name}</h3>
                        <h3 style={{ textAlign: "left" }}>${books.price}</h3>
                        <Link to={`/Bookdetails/${books.product_id}`}><button type="submit">details</button></Link>

                    </div>
                ))}

        </div>
    </>

    );

}
export default Booksnew;