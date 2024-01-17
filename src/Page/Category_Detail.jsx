import React, {useEffect, useState} from "react";
import FoodSlider from "../Component/Food_Slider";
import Navbar from "../Component/Navbar";
import { useParams, Link } from "react-router-dom";

const Category_Detail = () => {
    const { categoryName } = useParams();
    const [desc, setDesc] = useState();

    useEffect(() => {
        const getDesc = async () => {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
                const dataDesc = await response.json()
                const data = dataDesc.categories;
                const dataLength = data.length;
                let desc = null;
                for(let i = 0; i < dataLength; i++){
                    if(data[i].strCategory == {categoryName}.categoryName) {
                        desc = data[i].strCategoryDescription;
                        break;
                    }
                }
                setDesc(desc);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        getDesc()
    })


    return(
        <div>
            <div className="wrapper">
                <Navbar/>
                <div className="container" style={{paddingTop: '89px'}}>
                    <div className="Heading-text d-flex">
                        <h1 className="head-text">Here are some <span style={{fontFamily:'LibreBold'}}>{categoryName}</span> meal</h1>
                        <p className="subhead-text">{desc}</p>
                    </div>
                    <div className="content">
                        <FoodSlider categoryName={categoryName}/>
                        <div className="mt-5 d-flex justify-content-center">
                            <Link className="back-button" to={`/`}>back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category_Detail;