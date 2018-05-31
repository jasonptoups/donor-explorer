import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import '../styles/Header.css'

class Header extends Component {
  render (props) {
    return (
      <header>
        <div>
          <h1>Donor Explorer</h1>
        </div>
        <nav>
          <Link className='home' to='/'>Home</Link>
          <Link className='search' to='/search'>Search</Link>
          <Link className='donors' to='/saveddonors'>Saved Donors</Link>
          {!this.props.isAuthenticated() && <Link className='register' to='/register'>Register</Link>}
          {!this.props.isAuthenticated() && <Link className='login' to='/login'>Log In</Link>}
          {this.props.isAuthenticated() && <Link className='logout' to='/logout'>Log Out</Link>}
        </nav>
      </header>
    )
  }
}

export default Header
