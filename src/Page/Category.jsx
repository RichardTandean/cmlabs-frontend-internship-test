import Navbar from "../Component/Navbar";
import CategorySlider from "../Component/Category_Slider";
import './Page.css';

const Category = () => {
    return (
        <div className="wrapper">
            <Navbar/>
            <div className="container" style={{paddingTop:'89px'    }}>
                    <div className="Heading-text d-flex">
                        <h1 className="head-text">Welcome to <span style={{fontFamily:'LibreBold'}}>Daily Meals App</span>.</h1>
                        <h3 className="subhead-text">We will provide you with <span style={{fontFamily:'LibreBold'}}>delicious meals</span> on earth!</h3>
                    </div>
                    <div className="content" style={{height:'602px'}}>
                        <CategorySlider/>
                    </div>
            </div>
        </div>
    )
}

export default Category;