import React from "react";


function SearchBar(props){
    return(
        <form encType="multipart/form-data" method="post">
          <input type="search" id="search-bar" placeholder="Search for a product"></input> 
          <button type="submit" id="search-btn">Search</button> 
        </form>
    )
}

export default SearchBar;