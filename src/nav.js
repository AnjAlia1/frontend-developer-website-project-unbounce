import { BiSearchAlt2 } from "react-icons/bi";
import { Link, Route, Routes } from "react-router-dom";
import Login from "./login";
import { useState } from "react";
const Nav = () => {

  let [hoverP, setHoverP] = useState(false)

  const OnHoverProductfuction = () => {
    setHoverP(true);
    console.log("hove", hoverP);
    //  return(
    //   <div>
    //   <h2>New Page</h2>
    //   <p>This is the content of the new page.</p>
    // </div>
    //  )
  }

  const OutHoverProductfuction = () => {
    setHoverP(false);
    console.log("hove", hoverP);
  }

  let [hoverS, setHoverS] = useState(false)

  const OnHoverSolutionsfuction = () => {
    setHoverS(true);
    console.log("hove", hoverS);
    return (
      <div>
        <h2>New Page</h2>
        <p>This is the content of the new page.</p>
      </div>
    )
  }

  const OutHoverSolutionsfuction = () => {
    setHoverS(false);
    console.log("hove", hoverS);
  }

  let [hoverL, setHoverL] = useState(false)
  const OnHoverLearnfuction = () => {
    setHoverL(true);
    console.log("hove", hoverL);
    return (
      <div>
        <h2>New Page</h2>
        <p>This is the content of the new page.</p>
      </div>
    )
  }
  const OutHoverLearnfuction = () => {
    setHoverL(false);
    console.log("hove", hoverL);
  }

  return (

    <div className="nav-section">
      <p className="nav-bar-title">
        Get personalized sessions with our experts to recreate landing pages,
        improve campaigns, and more. <a>Learn more.</a>
      </p>
      <div className="nav-menu-bar-section">
        {/* <img class="nav-logo"src="https://unbounce.com/wp-content/themes/unbounce2019/assets/img/unbounce-icon-dark.svg?v=1"></img> */}
        <img
          className="nav-logo"
          src="https://unbounce.com/wp-content/themes/unbounce2019/assets/img/unbounce-icon.svg?v=1"
        ></img>
        <ul className="nav-menu-bar">
          {/* <Link to="/newpage"> */}
          <li onMouseOver={OnHoverProductfuction} onMouseOut={OutHoverProductfuction}>Products</li>
          {/* </Link> */}
          <li onMouseOver={OnHoverSolutionsfuction} onMouseOut={OutHoverSolutionsfuction}>Solutions</li>
          <li>Pricing</li>
          <li onMouseOver={OnHoverLearnfuction} onMouseOut={OutHoverLearnfuction}>Learn</li>
          <li>Contact</li>
        </ul>

        <div className="nav-bar-btns">
          <a href="" target="_blank">
            <BiSearchAlt2 className="iconStyle" />
          </a>
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
          {/* <button className="login-btn"> Login</button> */}
          <button className="start-free-trial-btn">Start My Free Trial</button>
        </div>

        {/* Conditionally render the overlay product content */}
        {hoverP && (
          <div className="overlay">
            <div >
              <ul className="product-pages">
                <li >
                  <h4>Launding pages</h4>
                  <p>
                    Buiding pages with more features that get you more sales and signups
                  </p>
                </li>
                <li className="product-pages">
                  <h4>Pop ups and sticky bars</h4>
                  <p>
                    Create pepus and sticky bars that grab your visitor's attention
                  </p>
                </li>
                <li className="product-pages">
                  <h4>Apps and integrations</h4>
                  <p>
                    Connect your favourite marketing tool and add extra functionalities
                  </p>
                </li>
              </ul>
            </div>
            <div >
              <ul>
                <li className="product-pages">
                  <h4>AI copywriting</h4>
                  <p>
                    Instantly geerate copy of your pages
                  </p>
                </li>
                <li className="product-pages">
                  <h4>AI  optimization</h4>
                  <p>
                    Automatically send visitor to their
                    best match landing pages
                  </p>
                </li>
                <li className="product-pages">
                  <h4>Templates</h4>
                  <p>Get started fast with hundred of insustry optimzed templates</p>
                </li>
              </ul>
            </div>
            <div className="overlay-items">
              <h1>
                Scale even more faster with Professional Services
              </h1>
              <p>
                Conversion expertise and technical know-how—without extra headcount. Our add-on Professional Services can help you solve complex integrations, recreate existing landing pages, and develop higher-performing campaigns...Learn more
              </p>
              <img src="https://unbounce.com/photos/pro-serv-hero-image.png" alt="" class="hero image ml-auto ls-is-cached lazyloaded" ></img>
            </div>
          </div>



        )}

        {/* Conditionally render the overlay solutions content */}

        {hoverS && (
          <div className="overlay">
            <div >
              <ul className="product-pages">
                <h4>By industry</h4>
                <li className="product-pages">
                  <h4>Pop ups and sticky bars</h4>
                </li>
                <li className="product-pages">
                  <h4>Apps and integrations</h4>
                </li>
              </ul>
            </div>
            <div >
              <ul>
                <h4>By usecase</h4>
                <li className="product-pages">
                  <h4>AI copywriting</h4>
                </li>
                <li className="product-pages">
                  <h4>AI  optimization</h4>
                </li>
                <li className="product-pages">
                  <h4>Templates</h4>
                </li>
              </ul>
            </div>
            <div className="overlay-items">
              <h1>
                Scale even more faster with Professional Services
              </h1>
              <p>
                Conversion expertise and technical know-how—without extra headcount. Our add-on Professional Services can help you solve complex integrations, recreate existing landing pages, and develop higher-performing campaigns...Learn more
              </p>
              <img src="https://unbounce.com/photos/pro-serv-hero-image.png" alt="" class="hero image ml-auto ls-is-cached lazyloaded" ></img>
            </div>
          </div>
        )}

        {/* Conditionally render the overlay Products content */}
        {hoverL && (
          <div className="overlay">
            <div >
              <ul className="product-pages">
                <h4>By industry</h4>
                <li className="product-pages">
                  <h4>Pop ups and sticky bars</h4>
                </li>
                <li className="product-pages">
                  <h4>Apps and integrations</h4>
                </li>
              </ul>
            </div>
            <div >
              <ul>
                <h4>By usecase</h4>
                <li className="product-pages">
                  <h4>AI copywriting</h4>
                </li>
                <li className="product-pages">
                  <h4>AI  optimization</h4>
                </li>
                <li className="product-pages">
                  <h4>Templates</h4>
                </li>
              </ul>
            </div>
            <div className="overlay-items">
              <h1>
                Scale even more faster with Professional Services
              </h1>
              <p>
                Conversion expertise and technical know-how—without extra headcount. Our add-on Professional Services can help you solve complex integrations, recreate existing landing pages, and develop higher-performing campaigns...Learn more
              </p>
              <img src="https://unbounce.com/photos/pro-serv-hero-image.png" alt="" class="hero image ml-auto ls-is-cached lazyloaded" ></img>
            </div>
          </div>
        )}




      </div>
    </div>
  );
};












const iconStyle = {
  fontSize: "24px", // Adjust the font size
  color: "#ffffFF", // Set the color
  marginLeft: "5px", // Add left margin
};

export default Nav;
