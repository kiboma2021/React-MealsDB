import { useEffect, useState } from "react"

export const useFetch = ({apiPath}) => {
    const [meals, setMeals] = useState([]);

    console.log(apiPath)

    const url = `https://www.themealdb.com/api/json/v1/1/${apiPath}.php`
    console.log(url)
    
    useEffect(() => {
        async function getMeals() {
          const response = await fetch(url);
          const result = await response.json();
          setMeals(result)
        }
        getMeals();
      },[url]);
    
  return {meals}
}

