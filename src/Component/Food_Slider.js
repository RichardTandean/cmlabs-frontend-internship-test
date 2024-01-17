import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Food_Slider.css';

const FoodSlider = ({ categoryName }) => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    const getFood = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
        const dataFood = await response.json();
        const data = dataFood.meals;
        setFood(data);
      } catch (error) {
        console.error('Error fetching data: ', error)
      }
    }

    getFood();
  }, [categoryName]);

  return (
    <div className="food-slider">
      {food.map((meal) => (
          <Link
            key={meal.idMeal} id={meal.idMeal}
            className='Food-box-link'
            to={`/${categoryName}/${meal.idMeal}`}
          >
            <div className='food-img'>
              <img src={meal.strMealThumb} id="food-img" alt={meal.strMeal} />
            </div>
            <div className='meal-name'>
              <p id="meal">{meal.strMeal}</p>
            </div>
          </Link>
      ))}
    </div>
  );
};

export default FoodSlider;
