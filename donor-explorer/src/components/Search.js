import React, { Component } from 'react'
import Axios from 'axios'
import {Container, Row, Input, Button} from 'react-materialize'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import _ from 'lodash'

import Header from './Header'
import '../styles/Search.css'
import {API_KEY, STANDARD_SETTINGS, FEC_API} from '../constants/constants'

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      city: '',
      rawData: [],
      candidatesOnly: true,
      maxDonation: null,
      meanDonation: null,
      modeDonation: null,
      percentDem: null
    }
    this.onChange = this.onChange.bind(this)
    this.search = this.search.bind(this)
    this.maxDonation = this.maxDonation.bind(this)
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
    let get2018 = () => Axios.get(`${FEC_API}/?${STANDARD_SETTINGS}&contributor_name=${this.state.firstName}%20${this.state.lastName}&contributor_city=${this.state.city}&two_year_transaction_period=2018&api_key=${API_KEY}`)
    let get2016 = () => Axios.get(`${FEC_API}/?${STANDARD_SETTINGS}&contributor_name=${this.state.firstName}%20${this.state.lastName}&contributor_city=${this.state.city}&two_year_transaction_period=2016&api_key=${API_KEY}`)
    get2018()
      .then(response2018 => {
        get2016()
          .then(response2016 => {
            let rawData = response2018.data.results.concat(response2016.data.results)
            let filteredData = rawData.filter(row => row.committee.designation === 'P')
            let maxDonation = this.maxDonation(filteredData)
            let meanDonation = this.meanDonation(filteredData)
            let modeDonation = this.modeDonation(filteredData)
            let percentDem = this.percentDem(filteredData)
            this.setState({
              filteredData,
              maxDonation,
              meanDonation,
              modeDonation,
              percentDem
            })
            console.log(this.state)
          })
      })
  }

  maxDonation (data) {
    let donations = data.map(row => row.contribution_receipt_amount)
    let maxDonation = Math.max(...donations)
    return maxDonation
  }

  meanDonation (data) {
    let donations = data.map(row => row.contribution_receipt_amount)
    let meanDonation = _.mean(donations)
    return meanDonation
  }

  modeDonation (data) {
    let donations = data.map(row => row.contribution_receipt_amount)
    let modeDonation = _.head(_(donations)
      .countBy()
      .entries()
      .maxBy('[1]'))
    return parseInt(modeDonation)
  }

  percentDem (data) {
    let allDonations = data.map(row => row.contribution_receipt_amount).reduce((accumulator, current) => accumulator + current)
    let demDonations = data.filter(row => row.committee.party === 'DEM').map(row => row.contribution_receipt_amount).reduce((accumulator, current) => accumulator + current)
    let percentDem = demDonations / allDonations * 100
    return percentDem + '%'
  }

  render () {
    const data = this.state.filteredData
    const columns = [{
      Header: 'First Name',
      accessor: 'contributor_first_name'
    }, {
      Header: 'Last Name',
      accessor: 'contributor_last_name'
    }, {
      Header: 'Year',
      accessor: 'two_year_transaction_period',
      maxWidth: 65
    }, {
      Header: 'Amount',
      accessor: 'contribution_receipt_amount'
    }, {
      Header: 'Committee',
      accessor: 'committee.name',
      minWidth: 150
    }, {
      Header: 'Party',
      accessor: 'committee.party'
    }]
    const tableStyle = {
      background: 'rgba(216, 216, 216, 0.8)',
      margin: '0 0 100px 0'
    }

    const summaryData = [{
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      city: this.state.city,
      maxDonation: this.state.maxDonation,
      meanDonation: this.state.meanDonation,
      modeDonation: this.state.modeDonation,
      percentDem: this.state.percentDem
    }]
    const summaryColumns = [{
      Header: 'First Name',
      accessor: 'firstName'
    }, {
      Header: 'Last Name',
      accessor: 'lastName'
    }, {
      Header: 'City',
      accessor: 'city'
    }, {
      Header: 'Max Donation',
      accessor: 'maxDonation'
    }, {
      Header: 'Average',
      accessor: 'meanDonation'
    }, {
      Header: 'Most Common',
      accessor: 'modeDonation'
    }, {
      Header: 'Percent Dem',
      accessor: 'percentDem'
    }]

    return (
      <div>
        <Header />
        <div className='image-search'>
          <Container>
            <Row>
              <form onSubmit={this.search}>
                <Row>
                  <Input s={4} label='First Name*' name='firstName' onChange={this.onChange} />
                  <Input s={4} label='Last Name*' name='lastName' onChange={this.onChange} />
                  <Input s={4} label='City*' name='city' onChange={this.onChange} />
                  <Button type='submit' waves='teal'>Search</Button>
                  <Input name='candidatesOnly' type='checkbox' onChange={this.onChange} label='Candidate Committees Only' className='filled-in' checked={this.state.candidatesOnly} />
                </Row>
              </form>
            </Row>
            <ReactTable
              data={data}
              columns={columns}
              defaultPageSize={7}
              style={tableStyle}
              noDataText='Search a donor to see results'
            />
            <ReactTable
              data={summaryData}
              columns={summaryColumns}
              defaultPageSize={1}
              style={tableStyle}
              noDataText='Search a donor to see results'
              showPageSizeOptions={false}
              showPagination={false}
            />
          </Container>
        </div>
      </div>
    )
  }
}

export default Search
