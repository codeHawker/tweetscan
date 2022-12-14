import './AboutBox.css';
import React from 'react';


class AboutBox extends React.Component {
  constructor(props){
    super(props)
    this.handleCloseButtonClick = this.handleCloseButtonClick.bind(this)
  }

  handleCloseButtonClick(e){
    this.props.closeAboutBox()
  }

  render(){
    return(
        <div className='about-div'>

       
        <div className='about-box'>
          <div className='about-info'>
            <h2>TweetScan</h2>
            <p>Twitter is a great way to stay up to date on the latest news, but it can be hard to keep track of everything. That's where our TweetScan comes in! We scrape tweets on your topic and provide you with valuable insight. This way, you can easily see what's being talked about and get a feel for the general sentiment.</p>
            <button onClick={this.handleCloseButtonClick}>Close</button>
          </div>

        </div>
        </div>
    )
  }
}

export default AboutBox;
