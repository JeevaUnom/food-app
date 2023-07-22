import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import React, { useState } from "react";
import CustomImage from "./CustomImage";





export default function PreviousSearches({ onSearch, searchTerm, handleInputChange, recipes, topRatedRecipes }){
   
     const [searchResults, setSearchResults] = useState([]);
    const searches = ['pizza', 'burger', 'cookies', 'juice', 'biriyani', 'salad', 'ice cream', 'Shawarma', 'pudding', 'soup', 'maggi'] 



    const handleSearch = () => {
        const filteredResults = searches.filter((search) => search.toLowerCase().includes(searchTerm.toLowerCase()));
        setSearchResults(filteredResults);
    };

    const topRatedRecipe = recipes[0] || {}
    return (
        <div className="previous-searches section">
            <h2> Search For Your Recipe</h2>
            <div className="previous-searches-container">
            {searchResults.length > 0 ? (
          searchResults.map((search, index) => (
            <div key={index} style={{ animationDelay: index * 0.1 + 's' }} className="search-item">
              {search}
            </div>
          ))
        ) : (
          <div className="no-results"></div>
        )}
      </div>
      <form className="search-box" onSubmit={handleSearch}> 
        <input type="text" placeholder="Search ..."  value={searchTerm} onChange={handleInputChange} />
        <button className="btn" type="button" >
          <FontAwesomeIcon icon={faSearch} />
        </button>
        </form>
        <br></br><hr></hr>
        <div className="top-rated">
  <h2>Top Rated Recipes</h2>
  <div className="top-recipe-cards">
    {topRatedRecipes.map((recipe, index) => (
      <div key={index} className="top-recipe-card">
        <div className="top-custom-image">
          <CustomImage imgSrc={recipe.image} pt="65%" />
        </div>
        <div className="top-recipe-card-info">
          <h2 className="top-recipe-title">{recipe.title}</h2><br></br>
          <a className="top-view-btn" href="./Recipedetail">
            VIEW RECIPE
          </a>
        </div>
      </div>
    ))}
  </div>
</div>
<br></br><hr></hr>
  </div>

            
       
    )
}