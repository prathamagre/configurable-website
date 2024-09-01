import React from 'react'
import './FoodCard.css'
import vegIcon from "./veg-icon.png"
import nonVegIcon from "./nonveg-icon.png"

function FoodCard({ imgUrl, title, description, isVeg, price }) {

  return (
    <div className="food-card">
      <img
        src={imgUrl}
        className="food-img"
        alt="food" />

      <h1 className="food-card-title">{title}</h1>
      <p>{description}</p>

      <img src={isVeg ? vegIcon : nonVegIcon}
        className="food-icon"
        alt="veg-icon" />

      {
        price ?
          <p className="food-card-price">
            ₹ {price}
          </p>
          : "NOT AVAILABLE"
      }

      <button className="food-card-btn">
        Add to Cart
      </button>
    </div>
  )
}

export default FoodCard