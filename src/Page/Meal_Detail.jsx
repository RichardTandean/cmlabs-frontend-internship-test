import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Component/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const MealDetail = () => {
    const { mealID } = useParams();
    const meal_ID = mealID;

    const [meal, setMeal] = useState({});

    useEffect(() => {
        const getMeal = async () => {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal_ID}`);
                const data = await response.json();

                if (data.meals && data.meals.length > 0) {
                    setMeal(data.meals[0]);
                } else {
                    console.error("Meal not found");
                }
            } catch (error) {
                console.error("Error fetching meal data:", error);
            }
        };

        getMeal();
    }, [meal_ID]);

    return (
        <div className="wrapper">
            <Navbar />
            <div className="container" style={{ paddingTop: '89px' }}>
                <div className="Meal">
                    <h1 className="meal-title">{meal.strMeal}</h1>
                    <div className="meal-content">
                        <img src={meal.strMealThumb} id="meal-img" alt={meal.strMeal}/>
                        <div className="content-text">
                            <div>
                                <h3>Instruction</h3>
                                <p className="body-text">{meal.strInstructions}</p>
                            </div>
                            <div>
                                <h3>Recipes</h3>
                                <ul>
                                    {Object.keys(meal)
                                        .filter(key => key.startsWith("strIngredient") && meal[key])
                                        .map(key => (
                                            <li className="body-text" key={key}>{`${meal[key]} - ${meal[`strMeasure${key.slice(13)}`]}`}</li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    {
                        meal.strYoutube ? (
                            <div className="video-tutorial">
                                <h3>Video Tutorial</h3>
                                <div className="ratio ratio-16x9">
                                    {meal.strYoutube && (
                                        <iframe
                                            src={meal.strYoutube.replace("watch?v=", "embed/")}
                                            title="YouTube video"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    )}
                                </div>
                                <Link className="back-button" to={`/${meal.strCategory}`}>back</Link>
                            </div>
                        ) : (
                            <></>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default MealDetail;
