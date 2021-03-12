import SingleStockReport from "./singleStockReport";
import { Link } from "react-router-dom";
import SerachBox from "./SearchBox";
import { useState } from "react";
import logo from "../../img/core-img/logo1.PNG"

function Header() {
  const [showSearch, setShowSearch] = useState();

  return (
    <header className="header-area" style={{marginBottom: '30px'}}>
      
      {/* Top Header Area */}
      <div className="top-header">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            {/* Breaking News Area */}
            <div className="col-12 col-md-6">
              <div className="breaking-news-area">
                <h5 className="breaking-news-title">Breaking news</h5>
                <div id="breakingNewsTicker" className="ticker">
                  <ul>
                    <li>
                      <a href="#">
                        Brexit breakthrough in Brussels comes after week of
                        drama
                      </a>
                    </li>
                    <li>
                      <a href="#">Brexit breakthrough in Brussels</a>
                    </li>
                    <li>
                      <a href="#">
                        Brexit breakthrough in Brussels comes after week of
                        drama
                      </a>
                    </li>
                    <li>
                      <a href="#">Brex comes after week of drama</a>
                    </li>
                    <li>
                      <a href="#">Brexit breakthrough in Bweek of drama</a>
                    </li>
                    <li>
                      <a href="#">Brexit bssels comes after week of drama</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Stock News Area */}
            <div className="col-12 col-md-6">
              <div className="stock-news-area">
                <div id="stockNewsTicker" className="ticker">
                  <ul>
                    <li>
                      <SingleStockReport currSymbol={"USD"} />
                    </li>
                    <li>
                      <SingleStockReport currSymbol={"EUR"} />
                    </li>
                    <li>
                      <SingleStockReport currSymbol={"GBP"} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Middle Header Area */}
      <div className="middle-header">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            {/* Logo Area */}
            <div className="col-12 col-md-4">
              {/* <div className="logo-area"></div> */}
              <img src={logo} />
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Header Area */}
      <div className="bottom-header">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="main-menu">
                <nav className="navbar navbar-expand-lg">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#gazetteMenu"
                    aria-controls="gazetteMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i className="fa fa-bars" /> Menu
                  </button>
                  <div className="collapse navbar-collapse" id="gazetteMenu">
                    {!showSearch && (
                      <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                          {/* <a className="nav-link" href="#">
                            Today <span className="sr-only">(current)</span>
                          </a> */}
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Pages
                          </a>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                          >
                            <Link className="dropdown-item" to="/">
                              Home
                            </Link>
                            {/* <a className="dropdown-item" href="/Category">Catagory</a>
                                                    <a className="dropdown-item" href="/PostDetails">Single Post</a> */}
                            <Link className="dropdown-item" to="/AboutUs">
                              About Us
                            </Link>
                            <Link className="dropdown-item" to="/Contact">
                              Contact
                            </Link>
                          </div>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/Category/Politics">
                            Politics
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/Category/Lifestyle">
                            Lifestyle
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/Category/Travel">
                            Travel
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/Category/Health">
                            Health
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to="/Category/Entertainment"
                          >
                            Entertainment
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/Category/Sport">
                            sport
                          </Link>
                        </li>
                      </ul>
                    )}
                    <SerachBox
                      showSearch={showSearch}
                      setShowSearch={setShowSearch}
                    />
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
