import './SearchBar.css';
import React from 'react';


class SearchBar extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      searchTerm: ""
    }
    this.handleTermChange = this.handleTermChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleTermChange(e){
    this.setState({searchTerm: e.target.value})
  }

  handleSearch(e){
  
    this.props.handleSearch(this.state.searchTerm)
    e.preventDefault()

  }


  render() {
    return (
      <div className="search-bar-div">
        <form className="search-bar" action="action_page.php">

          <input 
          type="text" 
          placeholder="Search Term.." 
          name="search" 
          onChange={this.handleTermChange}/>

          <button 
          onClick={this.handleSearch}>Search!</button>

        </form>
      </div>
    )
  }
}

export default SearchBar;
