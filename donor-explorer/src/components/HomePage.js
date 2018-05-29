import React, { Component } from 'react'
import Header from './Header'
import '../styles/HomePage.css'

class HomePage extends Component {
  render () {
    return (
      <div>
        <Header />
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
