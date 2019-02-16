import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      details: '',
    }

  }

  input1Handlder(value) {
    this.setState({
      name: value
    })
  }

  input2Handlder(value) {
    this.setState({
      price: value
    })
  }

  input3Handlder(value) {
    this.setState({
      details: value
    })
  }

  onCancelClickHandler() {
    this.setState({
      name: '',
      price: '',
      details: '',
    })
  }

  onAddClickHandler() {
    const { name, price, details } = this.state
    axios.post('/api/product')
    .then()
      
  }

  componentDidUpdate(){
    
  }

  onEditClickHandler(){
    axios.put(`/api/edits${id}`)
  }

  render() {
    return (
      <div>
        <input
          onChange={ (e) => this.input1Handlder(e.target.value) }
          placeholder='name'></input>
        <input
          onChange={ (e) => this.input2Handlder(e.target.value) }
          placeholder='price'></input>

        <input
          onChange={ (e) => this.input3Handlder(e.target.value) }
          placeholder='input here'></input>
        <Link to='/add'><button onClick={ () => { this.props.didMount() } }>Add to Inventory</button></Link>

        <button onClick={ () => this.onCancelClickHandler() }>Cancel</button>
      </div>
    )
  }
}
