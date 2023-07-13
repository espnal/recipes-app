import React from 'react';
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

function Meals() {
  const {data: categories, 
    isLoading: categoriesIsLoading, 
    isError: categoriesIsError} = useQuery(['categories'], getCategories)
  return (
    <div className={classes.meals__page}>
      <SearchBar/>
      <PointText className={classes.text} >Search meals or select categories from below.</PointText>
    <Categories 
    categories={categories} 
    categoriesIsError={categoriesIsError}
    categoriesIsLoading={categoriesIsLoading}>
    </Categories>
    </div>
  )
}

export default Meals