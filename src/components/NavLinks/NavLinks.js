import './NavLinks.css';
import React from 'react';


class NavLinks extends React.Component {

  render() {
    return (
      <div className="topnav">
        <p className="page-title">TweetScan</p>
        <a href="#" onClick={this.props.openAboutBox}>About</a>
        <a className="active" href="#home">Home</a>
      </div>
    )
  }
}

export default NavLinks;
