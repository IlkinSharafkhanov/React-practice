import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.scss";

const Table = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
    //   console.log(response.data);
      setData(response.data);
    });
  }, []);
  return (
    <div className="content">
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
                <span>
                  <Link to = {`/details${item.id}`}>Details</Link>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
