import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import classes from './Button.module.scss';

function ButtonWithLink({link = "/", children, variant="secondary"}) {
  return (
    <Link href={link} legacyBehavior>
    <a type="button" className={clsx(classes.button, classes[`variant__${variant}`])}>
      {children}
    </a>
    </Link>
  )
}
function Button({children, variant="secondary"}) {
    return (
      <button type="button" className={clsx(classes.button, classes[`variant__${variant}`])}>
        {children}
      </button>
    )
  }

export default ButtonWithLink;
export {Button};