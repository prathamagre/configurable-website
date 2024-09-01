import React from 'react'
import "./Home.css"

import FoodCard from "./../../components/FoodCard/FoodCard"
import { PRODUCTS ,MAIN_TITLE, PRODUCT_LIST} from '../../config/data'

function Home() {
  return (
    <div>
      <h1 className="title">
        <u>{MAIN_TITLE}</u>
      </h1>
      <div className="menu-card">
        <h2>
          {PRODUCT_LIST}
        </h2>
        <div className="food-card-container">

          {PRODUCTS.map((foodItem) => {

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