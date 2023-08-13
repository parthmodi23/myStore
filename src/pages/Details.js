// Details.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Details() {
  const { productid } = useParams();
  const [details, setDetails] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [additem, setAdditem] = useState(0);
  // const userAuthenticated = !!localStorage.getItem('token');
  useEffect(() => {
    axios
      .get(`https://lime-outrageous-codfish.cyclic.app/api/data?id=${productid}`)
      .then((response) => {
        setDetails(response.data);
      });
  }, [productid]);
  const handlebuy=()=>{
    alert("Your Product will be Succesfully delivered!")
  }

  const addToCart = () => {
    // if (!selectedSize) {
    //   alert("Please select a size before adding to the cart.");
    //   return;
    // }

    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    const existingCartItem = cartItems.find(
      (item) =>
        item.product_id === details.product_id 
        // item.selectedSize === selectedSize
    );
    if (existingCartItem) {
      alert("This product with the selected size is already in the cart.");
      return;
    }
   

    const cartItem = {
      ...details,
      selectedSize: selectedSize,
    };

    cartItems.push(cartItem);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    alert("Product added successfully to the cart");
  };

  if (!details.product_name) {
    return <h1>Loading...</h1>;
  }
  const add = () => { setAdditem(additem + 1) }
  const less = () => { setAdditem(additem - 1) }

  return (
    <div className="detailmain">
            <div className="dproductimage">
                <img src={details.product_images} alt={details.product_name} height="300px" width="400px" />
            </div>

            <div className="dproductdetails">
                <h2 className="productname">{details.product_name}</h2><br />
                <h3 style={{ textAlign: "left" }}>${details.price}</h3><br />
                <h4 style={{ textAlign: "left" }}>{details.description}</h4>
                <div className="sizecolor"> 
                <div className="size"><span>Size:</span><select id="size">
                    <option value="">Choose an Option</option>
                    <option value="">10</option>
                    <option value="">9</option>
                    <option value="">8</option>
                    <option value="">7</option>
                    </select></div>
                <span>Color:</span><select id="size">
                        <option value="">Choose an Option</option>
                        {/* <option value="">Red</option>
                        <option value="">Blue</option> */}
                        <option value="">Black</option>
                        <option value="">White</option>
                    </select>
                    </div>
            
            <div className="cartbuy">
               {/* <div className="cart"> <button type="submit" onClick={less}>-</button>
                <span>{additem}</span>
                <button type="submit" onClick={add}>+</button></div> */}
               <div className="buy"> 
              <div className="cartbutton"> <button  type="submit" onClick={addToCart}>Add to cart🛒</button></div>
              <div className="buybutton"><button  type="submit" onClick={handlebuy}>Buy Now</button></div>

              {/* { ?(('/signin')):(<>
              <div className="buybutton">  
              <button  type="submit" >Buy Now</button></div>
                
                 </>)} */}
            </div></div>
        </div></div>
  );}

export default Details;
