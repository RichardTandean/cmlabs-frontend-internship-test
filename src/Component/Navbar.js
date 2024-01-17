import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css';

function Navbar() {
    return(
            <nav className="navbar navbar-expand-lg fixed-top py-4">
                <div className="container">
                    <a className="navbar-brand navLogo" href="/">Daily Meals App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe- d-flex align-items-center gap-3">
                            <li className="nav-item ">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Foods</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Ingredients</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Local Culinary</a>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar;