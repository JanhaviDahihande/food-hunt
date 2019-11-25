import React from 'react';

const Recipe = ({
    title,
    calories,
    imageUrl,
    ingredients
}) => {
    return (
        <div>
            <h1>{title}</h1>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p>{calories}</p>
            <img src={imageUrl} alt=""/>
        </div>
    );
}

export default Recipe;