import React from 'react'
import "./Home.css"

import FoodCard from "./../../components/FoodCard/FoodCard"
import { products } from '../../config/data'

function Home() {
  return (
    <div>
      <h1 className="title">
        <u>Happy Cafe</u>
      </h1>
      <div className="menu-card">
        <h2>
          MENU
        </h2>
        <div className="food-card-container">

          {products.map((foodItem) => {

            return <FoodCard
              imgUrl={foodItem.imgUrl}
              title={foodItem.title}
              description={foodItem.description}
              isVeg={foodItem.isVeg}
              price={foodItem.price}
            />
          })}
        </div>
      </div>
    </div>
  )
}

export default Home