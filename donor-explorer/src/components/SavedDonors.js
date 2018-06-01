import React, { Component } from 'react'
import Axios from 'axios'
import {Container} from 'react-materialize'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import {CLIENT_URL} from '../constants/constants'

class SavedDonors extends Component {
  constructor (props) {
    super(props)
    this.state = {
      savedDonors: []
    }
    this.updatePage = this.updatePage.bind(this)
  }

  updatePage () {
    let userId = this.props.userId
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
      Header: 'Committees',
      accessor: 'committees'
    }, {
      Header: 'Percent Dem',
      accessor: 'percent_dem'
    }]
    const tableStyle = {
      background: 'rgba(216, 216, 216, 0.8)',
      margin: '40px 0 40px 0',
      fontSize: '12px'
    }
    return (
      <div>
        <div className='search-image'>
          <Container>
            <ReactTable
              data={data}
              columns={columns}
              style={tableStyle}
            />
          </Container>
        </div>
      </div>
    )
  }
}

export default SavedDonors
