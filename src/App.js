import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Category from './Page/Category';
import CategoryDetail from './Page/Category_Detail';
import MealDetail from './Page/Meal_Detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Category/>} />
        <Route path ="/:categoryName" element={<CategoryDetail/>}/>
        <Route path ="/:categoryName/:mealID" element={<MealDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
