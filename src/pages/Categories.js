import { useEffect, useState } from "react"
import { Card } from "../components"

export const Categories = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function getMeals() {
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      const result = await response.json();
      setMeals(result.categories)
    }
    getMeals();
  },[]);
  return (
    <main className="flex flex-wrap justify-center gap-10 m-8 p-8">
      {meals && meals.map((meal)=>(
        <Card key={meal.idCategory} meal={meal}  />

      ))}
        
     
    </main>
  )
}
