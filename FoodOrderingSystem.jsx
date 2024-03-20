import React, { useState } from 'react';
import './FoodOrderingSystem.css'; // Importing the CSS file for styling

const FoodOrderingSystem = () => {
  const [selectedFood, setSelectedFood] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  const handleFoodSelection = (food) => {
    setSelectedFood({ name: food, price: foodPrices[food] });
  };

  const confirmOrder = () => {
    setIsOrderConfirmed(true);
  };

  const resetOrder = () => {
    setSelectedFood(null);
    setQuantity(1);
    setIsOrderConfirmed(false);
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  // Object containing food items and their corresponding image URLs
  const foodImages = {
    Pizza: 'https://kauveryhospital.com/blog/wp-content/uploads/2021/04/pizza-5179939_960_720.jpg',
    Burger: 'https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg',
    Salad: 'https://www.eatingwell.com/thmb/lI3yRRJ0xLduIxNQoAFehyyY7os=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/romaine-salad-with-orange-and-radish-43311e8909b444aba0d356d951262384.jpg',
    Pasta: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1tctx-0YdMG9BQUzXzLwyEj8kxnqj_LdB7Q&usqp=CAU',
    Sandwich: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv2yH4x3RQvKxozd2ol2JFaizeEZh_s9OQ7A&usqp=CAU',
    Sushi: 'https://static.toiimg.com/photo/93115693.cms',
    Tacos: 'https://www.fromvalerieskitchen.com/wordpress/wp-content/uploads/2021/04/Easy-Ground-Beef-Tacos-edit-40.jpg',
    'Chicken Wings': 'https://www.thecookierookie.com/wp-content/uploads/2018/12/baked-chicken-wings-reshoot.jpg',
    Fries: 'https://www.recipetineats.com/wp-content/uploads/2022/09/Fries-with-rosemary-salt_1.jpg',
  };

  // Object containing food items and their corresponding prices
  const foodPrices = {
    Pizza: 330,
    Burger: 280,
    Salad: 130,
    Pasta: 250,
    Sandwich: 80,
    Sushi: 390,
    Tacos: 140,
    'Chicken Wings': 500,
    Fries: 160,
  };

  return (
    <div className="food-ordering">
      <h1>Food Ordering System</h1>
      <div className="menu">
        <h2>Menu</h2>
        <ul>
          {Object.keys(foodImages).map((food) => (
            <li key={food} onClick={() => handleFoodSelection(food)}>
              {food}
              <img src={foodImages[food]} alt={food} style={{ width: '200px', height: '150px' }} /> {/* Adjust size here */}
              <p>Price: ₹{foodPrices[food]}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="selected-food">
        <h2>Selected Food</h2>
        {selectedFood ? (
          <div>
            <p>You have selected: {selectedFood.name}</p>
            <p>Price per item: ₹{selectedFood.price}</p>
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" id="quantity" value={quantity} onChange={handleQuantityChange} />
            <button className="confirm-order" onClick={confirmOrder}>Confirm Order</button>
          </div>
        ) : (
          <p>Please select a food</p>
        )}
      </div>
      {isOrderConfirmed && (
        <div className="confirmation">
          <h2>Order Confirmation</h2>
          <p>Your order for {quantity} {selectedFood.name}(s) has been confirmed!</p>
          <p>Total Price: ₹{selectedFood.price * quantity}</p>
          <button onClick={resetOrder}>Place Another Order</button>
        </div>
      )}
    </div>
  );
};

export default FoodOrderingSystem;
