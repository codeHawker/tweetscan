import './App.css';
import TopNav from './components/TopNav/TopNav';
import SearchResults from './components/SearchResults/SearchResults';
import React from 'react';
import AboutBox from './components/AboutBox/AboutBox';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showAboutBox: false,
      seachState: 'empty'
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.apiSearch = this.apiSearch.bind(this)
    this.openAboutBox = this.openAboutBox.bind(this)
    this.closeAboutBox = this.closeAboutBox.bind(this)
  }

  handleSearch(searchTerm) {
    this.setState({ 
      searchResults: null,
      seachState: 'searching' 
    })
    this.apiSearch(searchTerm)
      .then(jsonResponse => {
        this.setState({
          searchResults: this.formatSearchResults(jsonResponse),
          searchState: 'complete'
        })
      })
  }

  formatSearchResults(apiResponse) {
    return {
      mostLiked: apiResponse['most_liked'],
      mostRetweeted: apiResponse['most_retweeted'],
      recentTweets: apiResponse['recent_tweets'],
      topWords: apiResponse['top_words']
    }
  }

  apiSearch(searchTerm) {
    return fetch(`/api/${searchTerm}`)
      .then(response => { return response.json() })
  }

  closeAboutBox() {
    this.setState({ showAboutBox: false })
  }

  openAboutBox() {
    this.setState({ showAboutBox: true })
  }

  render() {
    let searchResults
    if (this.state.searchResults) {
      searchResults = <SearchResults searchResults={this.state.searchResults} />
    }
    
    else if(this.state.seachState === 'searching') {
      searchResults = <h2 className='searching-text'>Searching ...</h2>
    }

    let aboutBox
    if (this.state.showAboutBox) {
      aboutBox = <AboutBox closeAboutBox={this.closeAboutBox} />
    }
    return (
      <div className="App">

        <TopNav
          searchTerm={this.state.searchTerm}
          handleSearch={this.handleSearch}
          openAboutBox={this.openAboutBox}
        />

        {searchResults}

        {aboutBox}

      </div>
    );
  }
}



export default App;