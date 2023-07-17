import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import SearchBar from '../../componets/mealspage/SearchBar';
import classes from './meals.module.scss';
import PointText from '../../componets/text/PointText';
import axios from 'axios';
import Categories from '../../componets/categories/Categories';

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
    </div>
  )
}

export default Meals