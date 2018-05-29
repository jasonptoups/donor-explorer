import React, {Component} from 'react'
import {Button, Row, Input} from 'react-materialize'

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
    // const errors = this.props.errors || {}
    return (
      <form onSubmit={this.onSubmit}>
        <Row>
          <Input s={12} label='Username' name='username' onChange={this.handleInputChange} />
          <Input s={12} label='Password' name='password' onChange={this.handleInputChange} />
        </Row>
        <Button type='submit' waves='light'>Log In</Button>
      </form>
    )
  }
}
