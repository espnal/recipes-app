import React from 'react'
import classes from './searchBar.module.scss'
function SearchBar({searchText, setSearchText}) {
  return (
    <input className={classes.input}
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}
    placeholder ='Search for meals'
    />
    
  )
}

export default SearchBar
