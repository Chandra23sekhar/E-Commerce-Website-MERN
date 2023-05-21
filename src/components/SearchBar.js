import React from "react";
import { useEffect, useState } from "react";
import styles from '../static/css/searchBar.css'




async function getProds(){
	var prd = document.getElementById('search-bar').value;
	var all_res = {}
	all_res = await fetch('/data/' + prd)
	all_res = await all_res.json()

	console.log(all_res)
}

// this.bind(getProds)

function SearchBar(){
    return(
      <div>
			<input type="search" id="search-bar" placeholder="Search for a product" name="itemName"></input> 
			<button type="submit" id="search-btn" onClick={getProds}>Search</button> 
      </div>
        // <form method="POST" action="/data/">
		
        // </form>
    )
}

export default SearchBar;