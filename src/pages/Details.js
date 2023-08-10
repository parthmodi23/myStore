import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import '../App.css';
import { Link } from "react-router-dom";
function Details() {

    const { productid } = useParams();
    const [details, setDetails] = useState([]);
    const [additem, setAdditem] = useState(0);
 
    useEffect(() => {
        axios
            .get(`http://localhost:3001/api/data?id=${productid}`)
            .then((response) => {
                setDetails(response.data);
            })
    }, [productid]);
    if (!details) {
        return <h1>Loading...</h1>
    }
    const add = () => { setAdditem(additem + 1) }
    const less = () => { setAdditem(additem - 1) }
    return (
        <div className="detailmain">
            <div className="dproductimage">
                <img src={details.product_images} alt={details.product_name} height="300px" width="400px" />
            </div>

            <div className="dproductdetails">
                <h3>{details.product_name}</h3><br />
                <h3 style={{ textAlign: "left" }}>${details.price}</h3><br />
                <h3 style={{ textAlign: "left" }}>{details.description}</h3>
                <div className="sizecolor"> 
                <div className="size"><span>Size:</span><select id="size">
                    <option value="">Choose an Option</option>
                    <option value="">Size S</option>
                    <option value="">Size M</option>
                    <option value="">Size XL</option>
                    <option value="">Size XXL</option>
                    </select></div>
                <span>Color:</span><select id="size">
                        <option value="">Choose an Option</option>
                        <option value="">Red</option>
                        <option value="">Blue</option>
                        <option value="">Black</option>
                        <option value="">White</option>
                    </select>
                    </div>
            
            <div className="cartbuy">
               <div className="cart"> <button type="submit" onClick={less}>-</button>
                <span>{additem}</span>
                <button type="submit" onClick={add}>+</button></div>
               <div className="buy"> 
              <div className="cartbutton"> <button  type="submit">Add to cart🛒</button></div>
              <div className="buybutton">  
              <Link to="/signup"><button  type="submit" >Buy Now</button></Link></div>
                </div>
            </div>
        </div></div>

    );
}
export default Details;