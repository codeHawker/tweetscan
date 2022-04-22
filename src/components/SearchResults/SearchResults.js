import './SearchResults.css';
import React from 'react';
import SearchStats from '../SearchStats/SearchStats';
import RecentTweets from '../RecentTweets/RecentTweets';


class SearchResults extends React.Component {

  render(){
    return(
        <div className="search-results">
          <SearchStats searchResults={this.props.searchResults}/>
          <RecentTweets recentTweets={this.props.searchResults.recentTweets}/>
        </div>
    )
  }
}

export default SearchResults;
