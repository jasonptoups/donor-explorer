import React, { Component } from 'react'
import Axios from 'axios'
import {Container, Row, Input, Button} from 'react-materialize'

import {CLIENT_URL} from '../constants/constants'
import '../styles/Register.css'

class Register extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: ''
    }
    this.onChange = this.onChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  submit (event) {
    event.preventDefault()
    Axios({
      method: 'post',
      url: `${CLIENT_URL}api/donors/users/register`,
      data: {
        username: this.state.username,
        password: this.state.password
      }
    }).then(res => {
      console.log(res)
    })
  }

  onChange (event) {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  render () {
    return (
      <div className='register-background'>
        <div className='register-image'>
          <Container>
            <div className='register-container'>
              <h3>Sign Up</h3>
              <Row>
                <form onSubmit={this.submit}>
                  <Input s={12} type='email' validate label='Email' name='username' onChange={this.onChange} />
                  <Input s={12} type='password' label='Password' name='password' onChange={this.onChange} />
                  <Button className='center-button' type='submit' waves='teal'>Sign Up</Button>
                </form>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    )
  }
}

export default Register
