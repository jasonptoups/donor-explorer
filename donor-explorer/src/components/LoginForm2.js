import React, {Component} from 'react'
import Header from './Header'
import Axios from 'axios'

import {Container, Row, Input, Button} from 'react-materialize'
import {CLIENT_URL} from '../constants/constants'

export default class LoginForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  handleInputChange (event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  onSubmit (event) {
    event.preventDefault()
    this.props.onSubmit(this.state.username, this.state.password)
  }

  render () {
    return (
      <div>
        <Header />
        <div className='register-image'>
          <Container>
            <h2>Log In</h2>
            <Row>
              <form onSubmit={this.submit}>
                <Row>
                  <Input s={12} type='email' validate label='Email' name='username' onChange={this.onChange} id='email' />
                  <Input s={12} type='password' label='Password' name='password' onChange={this.onChange} />
                  <Button type='submit' waves='teal'>Register</Button>
                </Row>
              </form>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}
