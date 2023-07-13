import classes from './CategoryItem.module.scss';
import React from 'react';
import clsx from 'clsx';

function CategoryItem({category}) {
  return (
    <button type="button" className={clsx(classes.item)}>
      {category.strCategory}
    </button>
  )
}

export default CategoryItem
