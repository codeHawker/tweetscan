import './SearchStats.css';
import React from 'react';
import Tweet from '../Tweet/Tweet';



class SearchStats extends React.Component {

  render() {
    return (
      <div className="search-stats">

        <div className="most-common-terms stats-div">
          <h2 className="stats-heading">Most Common Terms</h2>
          <ul className="common-words-div">
            {this.props.searchResults.topWords.map((term, index) => {
              return <li className="common-word" key={index} >{term[0]}</li>
            })}
          </ul>
        </div>

        <div className="most-liked stats-div">
          <h2 className="stats-heading">Most Liked</h2>
          <Tweet tweet={this.props.searchResults.mostLiked} />
        </div>

        <div className="most-retweeted stats-div">
          <h2 className="stats-heading">Most ReTweeted</h2>
          <Tweet tweet={this.props.searchResults.mostRetweeted} />
        </div>

      </div>
    )
  }
}

export default SearchStats;
