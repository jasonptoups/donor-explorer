import React, { Component } from 'react'
import Axios from 'axios'
import {Container, Button} from 'react-materialize'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import {CLIENT_URL} from '../constants/constants'

import Header from './Header'

import configureStore from '../store'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()
const store = configureStore(history)

class SavedDonors extends Component {
  constructor (props) {
    super(props)
    this.state = {
      savedDonors: []
    }
    this.updatePage = this.updatePage.bind(this)
  }

  updatePage () {
    let userId = store.getState().auth.access.user_id
    Axios.get(`${CLIENT_URL}api/donors/saved-donors`)
      .then(res => {
        let savedDonors = res.data.filter(row => row.user === userId)
        this.setState({
          savedDonors: savedDonors
        })
      })
  }

  componentDidMount () {
    this.updatePage()
  }

  render () {
    let data = this.state.savedDonors
    let columns = [{
      Header: 'First Name',
      accessor: 'first_name'
    }, {
      Header: 'Last Name',
      accessor: 'last_name'
    }, {
      Header: 'City',
      accessor: 'city'
    }, {
      Header: 'State',
      accessor: 'state'
    }, {
      Header: 'Employer',
      accessor: 'employer'
    }, {
      Header: 'Occupation',
      accessor: 'occupation'
    }, {
      Header: 'Max Donation',
      accessor: 'max_donation'
    }, {
      Header: 'Mode Donation',
      accessor: 'mode_donation'
    }, {
      Header: 'Total Donations',
      accessor: 'total_donations'
    }, {
      Header: 'Percent Dem',
      accessor: 'percent_dem'
    }]
    return (
      <div>
        <Header />
        <div className='search-image'>
          <Container>
            <ReactTable
              data={data}
              columns={columns}
            />
          </Container>
        </div>
      </div>
    )
  }
}

export default SavedDonors
