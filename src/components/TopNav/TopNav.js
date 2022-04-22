import './TopNav.css';
import React from 'react';
import SearchBar from '../SearchBar/SeachBar';
import NavLinks from '../NavLinks/NavLinks';


class TopNav extends React.Component {

  render() {
    return (
      <header className="app-header">
        <NavLinks openAboutBox={this.props.openAboutBox}/>
        <SearchBar handleSearch={this.props.handleSearch}/>
      </header>
    )
  }
}

export default TopNav;