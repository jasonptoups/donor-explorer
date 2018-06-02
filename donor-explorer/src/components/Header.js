import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import '../styles/Header.css'

class Header extends Component {
  render (props) {
    console.log(this.props.location.pathname)
    const homeSelected = this.props.location.pathname === '/donor-explorer/' ? {background: '#326786'} : {}
    const searchSelected = this.props.location.pathname === '/donor-explorer/search' ? {background: '#326786'} : {}
    const savedDonorsSelected = this.props.location.pathname === '/donor-explorer/saveddonors' ? {background: '#326786'} : {}
    const registerSelected = this.props.location.pathname === '/donor-explorer/register' ? {background: '#326786'} : {}
    const loginSelected = this.props.location.pathname === '/donor-explorer/login' ? {background: '#326786'} : {}
    return (
      <header>
        <div>
          <h2>Donor Explorer</h2>
          <div className='logo-image' />
        </div>
        <nav>
          <Link style={homeSelected} className='home' to='/donor-explorer/'>Home</Link>
          <Link style={searchSelected} className='search' to='/donor-explorer/search'>Search</Link>
          <Link style={savedDonorsSelected} className='donors' to='/donor-explorer/saveddonors'>Saved Donors</Link>
          {!this.props.isAuthenticated() && <Link style={registerSelected} className='register' to='/donor-explorer/register'>Register</Link>}
          {!this.props.isAuthenticated() && <Link style={loginSelected} className='login' to='/donor-explorer/login'>Log In</Link>}
          {this.props.isAuthenticated() && <Link className='logout' to='/donor-explorer/logout'>Log Out</Link>}
        </nav>
      </header>
    )
  }
}

const HeaderWithRouter = withRouter(Header)

export default HeaderWithRouter
