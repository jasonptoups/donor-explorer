import React, { Component } from 'react'
import '../styles/HomePage.css'

class HomePage extends Component {
  render () {
    return (
      <div>
        <div className='image-home'>
          <div className='textbox'>
            <h3 className='instruction-header'>
              Purpose
            </h3>
            <p>
              All campaign contributions to Federal campaigns are listed by the FEC. This website allows users to view those contributors quickly and easily. It provides computed fields, such as percentage donations to Democrat or Republican candidates.
            </p>
            <p>
              Users can register an account and save donors that they have looked up. This makes it easier to see the relationship between campaign contributions. This website is strictly for research and should not be used for commercial purposes. Please see the <a href='#'>Terms and Conditions</a> for more information
            </p>
            <h3 className='instruction-header'>
              Instructions
            </h3>
            <ol>
              <li>
                Register for an account if you do not have one
              </li>
              <li>
                Log in to your account
              </li>
              <li>
                Use the Search tab to look up campaign contributors. By default, this searches contributions during the 2016 and 2018 cycles.
              </li>
              <li>
                After a search completes, calculated fields will render at the bottom of the page. If you want to save this donor, click 'Save Donor'.
              </li>
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage
