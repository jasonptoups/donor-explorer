import React, {Component} from 'react'
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
    this.onChange = this.onChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  onChange (event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  submit (event) {
    event.preventDefault()
    console.log('submit')
    this.props.logIn(this.state.username, this.state.password)
  }

  render () {
    return (
      <div>
        <div className='register-image'>
          <Container>
            <h2>Sign In</h2>
            <Row>
              <Row>
                <Input s={12} type='email' label='Email' name='username' onChange={this.onChange} id='email' />
                <Input s={12} type='password' label='Password' name='password' onChange={this.onChange} />
                <Button onClick={this.submit} waves='teal'>Sign In</Button>
              </Row>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}
