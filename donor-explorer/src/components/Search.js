import React, { Component } from 'react'
import Header from './Header'
import '../styles/Search.css'
import Axios from 'axios'
import {Container, Row, Input, Button} from 'react-materialize'

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      city: ''
    }
    this.onChange = this.onChange.bind(this)
    this.search = this.search.bind(this)
  }

  onChange (event) {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  search (event) {
    event.preventDefault()
    // let get2018 = () => Axios.get()
    console.log('searching!')
  }

  render () {
    return (
      <div>
        <Header />

        <div className='image-search'>
          <Container>
            <Row>
              <form onSubmit={this.search}>
                <Row>
                  <Input s={4} label='First Name' name='first_name' onChange={this.onChange} />
                  <Input s={4} label='Last Name' name='last_name' onChange={this.onChange} />
                  <Input s={4} label='City' name='city' onChange={this.onChange} />
                  <Button type='submit' waves='teal'>Search</Button>
                </Row>
              </form>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default Search
