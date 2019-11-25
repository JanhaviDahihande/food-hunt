import React from 'react';
import style from './recipe.module.css';
const Recipe = ({
    title,
    calories,
    imageUrl,
    ingredients
}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p>{calories}</p>
            <img src={imageUrl} alt="" className={style.image}/>
        </div>
    );
}

export default Recipe;