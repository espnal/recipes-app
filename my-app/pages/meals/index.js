import React from 'react';
import SearchBar from '../../componets/mealspage/SearchBar';
import classes from './meals.module.scss';
import PointText from '../../componets/text/PointText';


function Meals() {
  const result = useQuery(['categories'], getCategories)
  return (
    <div className={classes.meals__page}>
      <SearchBar/>
      <PointText className={classes.text} >Search meals or select categories from below.</PointText>
    </div>
  )
}

export default Meals