
import { Routes,Route } from 'react-router-dom'
import { Categories,Latest,MealDetail } from '../pages'


export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Categories title="Home" />} />
        <Route path="latest" element={<Latest title="Latest Meals"/>} />
        <Route path="category/:id" element={<MealDetail />} />
      
    </Routes>
  )
}
