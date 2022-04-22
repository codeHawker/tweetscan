import './RecentTweets.css';
import React from 'react';
import Tweet from '../Tweet/Tweet';


class RecentTweets extends React.Component {

  render(){
    return(
      <div className="recent-tweets">
        <h2 className="recent-tweet-title">Recent Tweets</h2>

        {this.props.recentTweets.map((tweet,index) => {
          return <Tweet tweet={tweet} key={index}/>
        })}
      </div>
    )
  }
}

export default RecentTweets;
