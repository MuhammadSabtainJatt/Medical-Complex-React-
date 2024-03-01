// import React from 'react'

// export default function Index() {
//     return (
//         <>
//             <div className="container d-flex flex-column text-center  rounded-5 align-item-center justify-content-center " style={{ minHeight: "80vh" }}>
//                 <div className="row">
//                     <div className="col-12 col-md-6">useImage or logo</div>
//                     <div className="col-12 col-md-6">Some Detail about </div>
//                 </div>
//             </div>
//         </>
//     )
// }
import React, { useState } from 'react';

function MealSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      if (!response.ok) {
        throw new Error('Failed to fetch meals');
      }
      const data = await response.json();
      setMeals(data.meals || []);
console.log(meals)
      setError(null);
    } catch (error) {
      setError(error.message);

    }
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
      {error && <div>Error: {error}</div>}
      <ul>
        {meals.map((meal) => (
            <div key={meal.idMeal}>
          <li >{meal.strMeal}</li>
          <img src={meals.strMealThumb} width={100} alt="" />
            </div>

        ))}
      </ul>
    </div>
  );
}

export default MealSearch;
// import React from 'react'

// export default function Index() {
//     return (
//         <>
//             <div className="container d-flex flex-column text-center  rounded-5 align-item-center justify-content-center " style={{ minHeight: "80vh" }}>
//                 <div className="row">
//                     <div className="col-12 col-md-6">useImage or logo</div>
//                     <div className="col-12 col-md-6">Some Detail about </div>
//                 </div>
//             </div>
//         </>
//     )
// }
import React, { useState } from 'react';

function MealSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      if (!response.ok) {
        throw new Error('Failed to fetch meals');
      }
      const data = await response.json();
      setMeals(data.meals || []);
console.log(meals)
      setError(null);
    } catch (error) {
      setError(error.message);

    }
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
      {error && <div>Error: {error}</div>}
      <ul>
        {meals.map((meal) => (
            <div key={meal.idMeal}>
          <li >{meal.strMeal}</li>
          <img src={meals.strMealThumb} width={100} alt="" />
            </div>

        ))}
      </ul>
    </div>
  );
}

export default MealSearch;
