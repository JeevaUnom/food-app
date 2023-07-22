import React from "react";
import CustomImage from "./CustomImage"


export default function RecipeCard({recipe, searchTerm}){

    const isMatchingSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase());

    
    if (!isMatchingSearch) {
      return  (
        <div className="recipe-card no-match">
          <p>No matching recipes found.</p>
        </div>
      );
    }
    return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.image} pt="65%"/>
            <div className="recipe-card-info">
               
                <p className="recipe-title">{recipe.title}</p>
                
                <a className="view-btn" href="./Recipedetail">VIEW RECIPE</a>
            </div>
        </div>
    )
}