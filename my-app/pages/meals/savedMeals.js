import { useQueries } from '@tanstack/react-query';
import React, { useEffect } from 'react'
import { getSingleMeal } from './[id]';

function SavedMeals() {
    const [savedMealsId, setSavedMealsId] = useState([])

    useEffect(()=>{
        if(localStorage.getItem('savedMeals')){
            savedMealsId(JSON.parse(localStorge.getItem('savedMeals')))
        }
    }, []);
    const queries = savedMealsId.map(id =>({
        queryKey:['singleMeal', id],
        queryFn: getSingleMeal
    }))
    const result = useQueries(queries)
  return (
    <div>
      
    </div>
  )
}

export default S
