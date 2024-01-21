
import { Card } from "../components"
import { useFetch } from "../hooks"

export const Categories = ({apiPath,title}) => {

  const { meals } = useFetch({apiPath})




  return (
    <main className="flex flex-wrap justify-center gap-10">
      {meals.categories && meals.categories.map((meal)=>(
        <Card key={meal.idCategory} meal={meal}  />

      ))}
        
     
    </main>
  )
}
