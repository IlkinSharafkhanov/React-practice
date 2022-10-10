import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const {id} = useParams()
  
  const [data, setData] = useState({});
  console.log(id);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <div className='content'>
        <img width={250} src={data.image} alt="product" />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <span>{data.price} $</span>
    </div>
  )
}

export default Details