import style from 'components/Searchbar/search.module.css'
import { Component } from 'react';

class Searchbar extends Component  {
   state = {
      search: '',
      
  }

     handleChange = (e) => {
       this.setState({ search: e.currentTarget.value.toLowerCase() });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.search.trim() === "") {
    
      alert("Поле пошуку пусте");
      return;
    }
    this.props.onSearch(this.state.search.trim());
    this.reset();
  }
  
  reset() {
    this.setState({
      search: '', 
    })
  }


  render()
  {
    
    const { search } = this.state;
    const { handleSubmit, handleChange } = this;
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
}

export default Searchbar;
