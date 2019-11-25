import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const APP_ID = '2c7daea0';
  const API_KEY = 'ba14a12978e2d0ba416b9447dd41be21';
  
  const [recipes, setRecipes] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState('chicken');

  const exampleRequest = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`;

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(exampleRequest);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearchValue(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(searchValue);
    setSearchValue('');
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={searchValue} onChange={updateSearch} />
        <button className="search-button" type="submit">submit</button>
      </form>
      { recipes.map(recipe => ( 
        <Recipe 
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          imageUrl={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        /> 
      ))}
    </div>
  );
}

export default App;
