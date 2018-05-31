import React, { Component } from 'react'
import '../styles/HomePage.css'

class HomePage extends Component {
  render () {
    // console.log(this.props.isAuthenticated())
    return (
      <div>
        <div className='image-home'>
          <div className='textbox'>
            <h2>
              Purpose
            </h2>
            <p>
              Text
            </p>
            <h2>
              Instructions
            </h2>
            <p>
              Text
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage
