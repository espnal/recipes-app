import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import SearchBar from '../../componets/mealspage/SearchBar';
import classes from './meals.module.scss';
import PointText from '../../componets/text/PointText';
import axios from 'axios';
import Categories from '../../componets/categories/Categories';
import BeatLoader from 'react-spinners/BeatLoader';
import SingleMealCard from '../../componets/mealspage/SingleMealCard';

const override = {
  displayName: 'inline-block',
  margin: '0 auto'
}
const getCategories = async () => {
  const {data} = await axios.get('/categories.php')
  return data.categories;
}
const getMeals = async ({queryKey}) => {
  const {data} = await axios.get(`/filter.php?c=${queryKey[1]}`)
  return data?.meals || [];
}
function Meals() {
  const [selectedCategory,setSelectedCategory] = useState("");

  const {data: categories, 
    isLoading: categoriesIsLoading, 
    isError: categoriesIsError} = useQuery(['categories'], getCategories)
  
  const {data, isLoading, isError} = useQuery(['mealsByCategory', selectedCategory], getMeals);
  useEffect(()=>{
    if(categories){
      setSelectedCategory(categories[0].strCategory)
    }
  },[categories] )
  const [searchText, setSearchText] = useState('');
  const [query, setQuery] = useState('');

    return (
    <div className={classes.meals__page}>
      <SearchBar/>
      <PointText className={classes.text} >Search meals or select categories from below.</PointText>
    <Categories 
    categories={categories} 
    categoriesIsError={categoriesIsError}
    categoriesIsLoading={categoriesIsLoading}

    selectedCategory={selectedCategory}
    setSelectedCategory={setSelectedCategory}>
    </Categories>
    {isLoading || categoriesIsLoading ? (
      <div className={classes.loadingSpinner}>
      <BeatLoader color="#fff" loading={isLoading || categoriesIsLoading} cssOverride={override} size={20}/>
      </div>) : null}
      <div className={classes.meals__container}>
      {!isLoading && !isError && data && data.map((meal)=>(
        <SingleMealCard meal={meal} key={meal.idMeal}/>
      ))}
      </div>
    </div>
  )
}

export default Meals