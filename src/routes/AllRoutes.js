
import { Routes,Route } from 'react-router-dom'
import { Categories,Latest,MealDetail,PageNotFound,Search } from '../pages'


export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Categories title="Home" apiPath="categories" />} />
        <Route path="latest" element={<Latest title="Latest Meals" apiPath="latest" />} />
        <Route path="search" element={<Search />} />
        <Route path="category/:id" element={<MealDetail />}  />
        <Route path="*" element={<PageNotFound />} ></Route>
      
    </Routes>
  )
}
