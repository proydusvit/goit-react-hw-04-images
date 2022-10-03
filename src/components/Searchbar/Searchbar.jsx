import style from 'components/Searchbar/search.module.css'

import PropTypes from "prop-types";
import { useState } from 'react';
function Searchbar({ onSearch })  {
   
  const [search, setSearch] = useState(" ")


 const handleChange = (e) => {
      setSearch(e.currentTarget.value.toLowerCase());
  }

 const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() === "") {
    
      alert("Поле пошуку пусте");
      return;
    }
    onSearch(search.trim());
   setSearch(" ")
  }
    
    return (
      <header className={style.Searchbar}>
        <form className={style.SearchForm} onSubmit={handleSubmit}>
          <button className={style.SearchForm_batton} type="submit" onClick={handleSubmit} >

            <span>Search</span>
          </button>

          <input
          name="search"
            className={style.SearchForm_input}   
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
            value={search}
          />
        </form>
      </header>
    )
  
}

export default Searchbar;


Searchbar.propTypes = {
  onSearch: PropTypes.func
}