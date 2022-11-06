import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import "./index.scss";
import { addToCard } from "../../redux/actions/cardActions";

const Products = () => {
  const [cardData, setCardData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setCardData(response.data);
    });
  }, []);

  return (
    <div className="card-holders">
      {cardData.map((item) => {
        return (
          <div className="card" key={item.id}>
            <div className="card-image-holder">
              <img src={item.image} alt="" />
            </div>
            <div className="card-desc">
              <h2>{item.title}</h2>
              <p>
                {item.description.length > 300
                  ? `${item.description.substring(0, 200)}...`
                  : item.description}
              </p>
              <span>{item.price}$</span>
            </div>
            <div className="card-action">
              <button
                onClick={() => {
                  dispatch(
                    addToCard({
                      id: item.id,
                      image: item.image,
                      title: item.title,
                      description: item.description,
                      price: item.price
                })
                  );
                }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
