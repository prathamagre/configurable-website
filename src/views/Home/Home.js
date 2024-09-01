import React from 'react'
import "./Home.css"

import FoodCard from "./../../components/FoodCard/FoodCard"

const foods = [
  {
    imgUrl: "https://img.freepik.com/premium-photo/puri-bhaji-indian-semi-dry-potato-spicy-recipe-also-known-as-batata-aloo-ki-sabji-served-with-fried-poori-selective-focus_466689-12815.jpg?w=996",
    title: "Aloo Puri",
    description: "Delicious 'Aloo Puri' made with fresh potatos and wheat.",
    isVeg: true,
    price: 60
  },
  {
    imgUrl: "https://img.freepik.com/free-photo/top-view-pakistani-food-arrangement_23-2148825109.jpg?t=st=1723721429~exp=1723725029~hmac=05f06919af806e3138387bc1ecc5aa1fda9180b6e964d05bcc23a9034d1258fd&w=900",
    title: "Palak Paneer",
    description: "Delicious 'Palak Paneer' made with fresh paneer and spinach.",
    isVeg: true,
    price: 120
  },
  {
    imgUrl: "https://img.freepik.com/premium-photo/bowl-chinese-food-with-bowl-chicken-green-onions_579873-8438.jpg?w=1060",
    title: "Chilli Chicken",
    description: "Delicious 'Chilli Chicken' made with fresh ingredients.",
    isVeg: false,
    price: 160
  },
  {
    imgUrl: "https://img.freepik.com/premium-photo/mumbai-style-pav-bhaji-is-fast-food-dish-from-india-consists-thick-vegetable-curry-served-with-soft-bread-roll-served-plate_466689-2251.jpg?w=360",
    title: "Pav Bhaji",
    description: "Delicious 'Pav Bhaji' made with fresh Buns and fresh vegetables.",
    isVeg: true,
    price: 70
  }
]

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

          {foods.map((foodItem) => {

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