import React from "react";
import styles from '../static/css/searchBar.css'

function SearchBar(props){
    return(
        <form method="POST" action="/">
          <input type="search" id="search-bar" placeholder="Search for a product" name="itemName"></input> 
          <button type="submit" id="search-btn">Search</button> 
        </form>
    )
}

export default SearchBar;