import clsx from 'clsx';
import React from 'react';
import classes from './Title.module.scss';

function Title({children, className, varaint="primary"}) {
  return (
    <h2 className={clsx(classes.titl, className, classes[`title__${varaint}`])}>{children}</h2>
  )
}

export default Title