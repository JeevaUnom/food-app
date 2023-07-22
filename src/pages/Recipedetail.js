import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBarsProgress,   faBowlFood, faCarrot, faCartShopping, faClockFour, faCocktail,  faPlateWheat, faStar } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";



export default function Recipedetail({recipe, loggedIn})
{
    const Rating = () => {
        const [rating, setRating] = useState(0);
        
    
    const handleRating = (e) => {
      if (!loggedIn) {
        alert('Please login to rate.');
        return;
      }

    const newRating = parseInt(e.target.value);
        setRating(newRating);
        
      };
      return (
        <div>
          <h3><FontAwesomeIcon className="icon" icon={faStar} />Ratings</h3>
          <br />
          1
          <input
            type="range"
            className="rating"
            min={0}
            max={10}
            step={1}
            value={rating}
            onChange={handleRating}
            disabled={!loggedIn}
          />
          10
         
        </div>
      );
    };
    return (
        <div >
        <h1>Recipe Title</h1><br></br><hr></hr><br></br>
        <center>
        <div class="img_container">
        <img src="img\logo\foodcourt-logo-fork-spoon-icon-600w-1508137934-transformed.webp" className="rec_img" alt="recipe-img" /><br></br><br></br><hr></hr><br></br>
        </div>
        </center>
        
        <h3><FontAwesomeIcon className="icon" icon={faClockFour} />Total timing</h3><br></br><hr></hr><br></br>
        <h3><FontAwesomeIcon className="icon" icon={faCocktail} />Cursine</h3><br></br><hr></hr><br></br>
        <h3><FontAwesomeIcon className="icon" icon={faBowlFood} />Course</h3><br></br><hr></hr><br></br>
        <h3><FontAwesomeIcon className="icon" icon={faCarrot} />Diet</h3><br></br><hr></hr><br></br>
        <h3><FontAwesomeIcon className="icon" icon={faPlateWheat} />No. of Servings</h3><br></br><hr></hr><br></br>
        <h3><FontAwesomeIcon className="icon" icon={faCartShopping} />Ingredients</h3><br></br><hr class="custom-hr"></hr><br></br>
        <h3><FontAwesomeIcon className="icon" icon={faBarsProgress} />Steps</h3><hr></hr><br></br>
        
       <Rating />

        </div>
    )
    }
