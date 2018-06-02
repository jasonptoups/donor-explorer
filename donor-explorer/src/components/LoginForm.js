import React, {Component} from 'react'
import {Container, Row, Input, Button} from 'react-materialize'
import SpinnerModal from './SpinnerModal'

export default class LoginForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
      // modalIsOpen: false
    }
    this.onChange = this.onChange.bind(this)
    this.submit = this.submit.bind(this)
    // this.openModal = this.openModal.bind(this)
    // this.closeModal = this.closeModal.bind(this)
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
    this.props.logIn(this.state.username, this.state.password)
  }

  // openModal () {
  //   this.setState({modalIsOpen: true})
  // }

  // closeModal () {
  //   this.setState({modalIsOpen: false})
  // }

  render () {
    return (
      <div>
        <div className='login-background'>
          <Container>
            <div className='login-container'>
              <h2>Sign In</h2>
              <Row>
                <form onSubmit={this.submit}>
                  <Input s={12} type='email' label='Email' name='username' onChange={this.onChange} id='email' />
                  <Input s={12} type='password' label='Password' name='password' onChange={this.onChange} />
                  <Button onClick={this.submit} waves='teal'>Sign In</Button>
                </form>
              </Row>
              <SpinnerModal
                isOpen={this.props.loginModalIsOpen}
                closeModal={this.props.closeLoginModal}
                message='Logging in'
              />
            </div>
          </Container>
        </div>
      </div>
    )
  }
}
