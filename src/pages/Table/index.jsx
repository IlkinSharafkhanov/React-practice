import React, { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.scss";

const Table = () => {
  const [data, setData] = useState([]);
  const [responseTitle, setResponseTitle] = useState("")
  const navigate = useNavigate()
  const [deleteProduct, setDeleteProduct] = useState("");

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setData(response.data);
      setResponseTitle(response.data)
    });
  }, [deleteProduct]);

  const deleteItem = (id) =>{
    axios.delete(`https://fakestoreapi.com/products/${id}`).then((response) =>{
      setDeleteProduct(deleteProduct)
    })
  }

  const searchFilter = (value) => {
    if(value.trim(" ")){
      const newData = responseTitle.filter((user) => user.title.toLowerCase().includes(value.toLowerCase()))
      setData(newData) 
    } else if (value.trim(" ") === ""){
      setData(responseTitle)
    }
  }


  const logOut = () => {
    localStorage.removeItem("token")
    navigate("/")
  }
  
  return (
     
    <div className="content-table">
      <input type="text" placeholder="Search.." onChange={(e) => searchFilter(e.target.value)}/>
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
