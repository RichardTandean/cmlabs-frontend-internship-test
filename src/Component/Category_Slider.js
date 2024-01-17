import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//React Component
import { Swiper, SwiperSlide } from 'swiper/react';

//Swiper Style
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import './Category_Slider.css';

//Required Module
import { Grid, Pagination } from 'swiper/modules';
import { FreeMode } from 'swiper/modules';  

const CategorySlider = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        const dataCategory = await response.json();
        const data = dataCategory.categories;
        setCategories(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getCategory();
  }, []);

  return (
    <div>
      <p className='slider-title'>Choose the food category</p>
      <Swiper
        grid={{
          rows: 2,
        }}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        breakpoints={{
          0:{
            slidesPerView: 2,
            grid :{rows:2}
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 30,
            grid :{rows:2}
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
            grid :{rows:2}
          }
        }}
        className="mySwiper"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.idCategory} className="mt-0">
            <Link
              className='Category-box d-flex'
              id={category.strCategory}
              to={`/${category.strCategory}`}
            >
              <div className='img-div'>
                <img src={category.strCategoryThumb} id="category-img" alt={category.strCategory} />
              </div>
              <p className='category-name'>{category.strCategory}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategorySlider;
