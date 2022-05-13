import React, { useEffect, useState } from 'react'
import "./Project.css"
// import heartFill from "../../images/heart-fill.png";
import heartFill from "../images/heart-fill.png";
import axios from 'axios';

function Project() {

    const [products, setProduct] = useState([])
const [counter, setCounter] = useState(0);
const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;


const increaseLike = () =>{
    setCounter(counter + 1);
}

const decreaseLike = () =>{
    setCounter(counter - 1);
}
 
    const url = 'https://fakerapi.it/api/v1/products?_quantity=10';
  
    useEffect(() => {
      const loadCompanyName = async () => {
        const response = await axios.get(
        url
        );
        // const request = response.data.data.data
        // setProduct(request);
        setProduct(response.data.data);
        console.log(response.data.data, "res")
      };
      loadCompanyName();
    }, []);

    

  return (
    <div className="transaction">
    
    { products ? products.map((product, index) => (
        <div key={index} className="card">
      <div className="card-header">
        <div className="profile">

          <span className="letter">A</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">{product.name}</h5>
          <div className="card-date">  <p>Current date is {date}</p></div>
        </div>
      </div>
      <img className="card-image" src={product.image} alt="Logo" />
      <div className="card-text">{product.description}
      <br/>
      <br/>
      <p>Taxes: {product.taxes}</p>
      <p>Net Price: {product.net_price}</p>
      <p>Price: {product.price}</p>
      </div>
      <div className="card-like-bar">
       
            <div className="increasel">

            <button  className="increasel2" onClick={increaseLike}>
Like
          <img className="card-like-icon" src={heartFill} alt="Logo" />
            </button>

            <button className="increasel3" onClick={decreaseLike}>
Dislike
            </button>
            </div>
        
        
        <div className="like-text">
          <b>{counter}</b> likes.
        </div>
      </div>
    </div>

    )) : null}
  
    



    </div>
  )
}

export default Project







