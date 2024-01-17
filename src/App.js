import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Category from './Page/Category';
import Category_Detail from './Page/Category_Detail';
import Meal_Detail from './Page/Meal_Detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Category/>} />
        <Route path ="/:categoryName" element={<Category_Detail/>}/>
        <Route path ="/:categoryName/:mealID" element={<Meal_Detail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
