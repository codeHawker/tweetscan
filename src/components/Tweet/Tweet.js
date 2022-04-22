import './Tweet.css';
import React from 'react';


class Tweet extends React.Component {

  render(){
    return(
      <div className="tweet" >
        <p>{this.props.tweet}</p>
      </div>
    )
  }
}

export default Tweet;