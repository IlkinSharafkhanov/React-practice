import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header";

// rooting
import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "../../utils/PrivateRoutes";


import Details from "../Details";
import Main from "../Main";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.scss";

const Table = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  const [deleteProduct, setDeleteProduct] = useState("");
  console.log(data);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
    //   console.log(response.data);
      setData(response.data);
    });
  }, [deleteProduct]);

  const deleteItem = (id) =>{
    axios.delete(`https://fakestoreapi.com/products/${id}`).then((response) =>{
      console.log(response);
      setDeleteProduct(deleteProduct)
    })
  }

  const logOut = () => {
    localStorage.removeItem("token")
    navigate("/")
  }
  
  return (
     
    <div className="content">
      <button onClick={logOut}>Log Out</button>
      <table id="customers">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>
                <span className="details">
                  <Link to = {`/details${item.id}`}>Details</Link>
                </span>
                <span className="delete" onClick={()=>deleteItem(item.id)}>Delete</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
};

export default Table;
