import { BiSearchAlt2 } from "react-icons/bi";
import { Link,Route, Routes } from "react-router-dom";
import Login from "./login";
import { useState } from "react";
const Nav = () => {

  let [hoverP,setHoverP] = useState(false)
    
    const OnHoverProductfuction=()=>{ 
    setHoverP(true);
     console.log("hove",hoverP);
     return(
      <div>
      <h2>New Page</h2>
      <p>This is the content of the new page.</p>
    </div>
     )
    }
  
    const OutHoverProductfuction=()=>{ 
      setHoverP(false);
       console.log("hove",hoverP);
      }  
      
      let [hoverS,setHoverS] = useState(false)

      const OnHoverSolutionsfuction=()=>{ 
        setHoverS(true);
         console.log("hove",hoverS);
         return(
          <div>
          <h2>New Page</h2>
          <p>This is the content of the new page.</p>
        </div>
         )
        }

        const OutHoverSolutionsfuction=()=>{ 
          setHoverS(false);
           console.log("hove",hoverS);
          }   

let [hoverL,setHoverL] = useState(false)
          const OnHoverLearnfuction=()=>{ 
            setHoverL(true);
             console.log("hove",hoverL);
             return(
              <div>
              <h2>New Page</h2>
              <p>This is the content of the new page.</p>
            </div>
             )
            }
            const OutHoverLearnfuction=()=>{ 
              setHoverL(false);
               console.log("hove",hoverL);
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
          <Link to="/newpage">
          <li onMouseOver={OnHoverProductfuction} onMouseOut={OutHoverProductfuction}>Products</li>
          </Link>
          <li onMouseOver={OnHoverSolutionsfuction} onMouseOut={OutHoverSolutionsfuction}>Solutions</li>
          <li>Pricing</li>
          <li onMouseOver={OnHoverLearnfuction} onMouseOut={OutHoverLearnfuction}>Learn</li>
          <li>Contact</li>
        </ul>
      
        <div className="nav-bar-btns">
          <a href="" target="_blank">
            <BiSearchAlt2 />
          </a>
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
          {/* <button className="login-btn"> Login</button> */}
          <button className="start-free-trial-btn">Start My Free Trial</button>
        </div>

        {/* Conditionally render the overlay Products content */}
        {hoverP && (
          <div className="overlay">
            <div>
            <ul>
              <li>
                Landing Pages
              </li>
              <li>
                Popus and sticky bars
              </li>
              <li>
                Apps and integrations
              </li>
              <li>
                AI copywriting
              </li>
              <li>
                AI optimization
              </li>
              <li>
                Templates
              </li>
              </ul>
            </div>
           <div>
           <p>Sacle ven faster with professional Services.</p>
           </div>
           
          </div>
        )}

        {/* Conditionally render the overlay Products content */}
        {hoverS && (
          <div className="overlay">
           <p>Sacle ven faster with professional Services.</p>
           </div>  
        )}

        {/* Conditionally render the overlay Products content */}
        {hoverL && (
          <div className="overlay">
           <p>Sacle ven faster with professional .</p>
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
