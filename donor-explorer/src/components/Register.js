import React, { Component } from 'react'
import Axios from 'axios'

import {Container, Row, Input, Button} from 'react-materialize'
import {CLIENT_URL} from '../constants/constants'

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
      <div>
        <div className='register-image'>
          <Container>
            <h2>Register</h2>
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

export default Register
