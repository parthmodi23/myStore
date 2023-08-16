import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import Shoesnew from "../Shoescompo/shoesnew";
import Clothesnew from "../clothescompo/clothesnew";
import Mobilenew from "../Mobilecompo/mobilenew";
import Booksnew from "../Bookscompo/booknew";
import './Home.css';

function Home() {
    const [shoesdata, setShoesdata] = useState([]);

    useEffect(() => {
        axios
            .get("https://lime-outrageous-codfish.cyclic.app/api/data")
            .then((response) => {
                setShoesdata(response.data);
            })
    }, [])

    const offer = [
      {
        "id":20000,
      "offerimage":"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/0174e4d7-448c-4746-8572-69461ad5be101659020268081-Tops---Tees_Desk.jpg"
    },
    {"id":20001,
      "offerimage":"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg "
    },
    {"id":20002,
      "offerimage":"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/30/e8aea330-10cd-4778-91ab-da9678161ec11690739860849-PB-Banner_Wishlist-Now.jpg"
    },
    {"id":20003,
      "offerimage":"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/b656a7f4-4688-4997-bb7c-54b78793981e1658752386588-Western-Wear_Desk.jpg"
    },
    {"id":20004,
      "offerimage":"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg"
    },
    ];

    if (!shoesdata) {
        return <h1>Loading....</h1>
    }

    return (
        <>
            <Carousel
                interval={1500}
                pause="hover"
                wrap
                onSlide={(slideIndex) => console.log(`Active Slide: ${slideIndex}`)}
            >
                {offer.map((items) => (
                    <Carousel.Item key={items.id}>
                        <Link to="/clothes">
                            <img className="d-block w-100" src={items.offerimage} alt={`Slide ${items.id}`} />
                        </Link>
                    </Carousel.Item>
                ))}
            </Carousel>

            <div className="offermain">
                <h2 className="offer">Our Latest Shoes Collection</h2>
                <Shoesnew />
                <h2 className="show"><Link to="/shoes">Explore more</Link></h2>
            </div>
            <hr/>

            <div className="offermain">
                <h2 className="offer">Our Latest Clothe Collection</h2>
                <Clothesnew />
                <h2 className="show"><Link to="/clothes">Explore more</Link></h2>
            </div>
            <hr/>


            <div className="offermain">
                <h2 className="offer">Our Latest Mobile Collection</h2>
                <Mobilenew />
                <h2 className="show"><Link to="/mobiles">Explore more</Link></h2>
            </div>
            <hr/>

            <div className="offermain">
                <h2 className="offer">Our Latest Book Collection</h2>
                <Booksnew />
                <h2 className="show"><Link to="/Books">Explore more</Link></h2>
            </div>
        </>
    );
}

export default Home;
