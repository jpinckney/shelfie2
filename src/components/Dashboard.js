import React, { Component } from 'react'
import Product from './Product'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: []
    }
  }


  componentDidMount() {
    axios.get('/api/inventory')
      .then(res => {
        console.log(res.data)
        this.setState({
          inventory: res.data
        })
      })
  }


  onDeleteClickHandler(id) {
    axios.delete(`/api/edit/${id}`)
      .then(res => {
        this.setState({
          inventory: res.data
        })
      })
  }

  render() {
    const { inventory } = this.state
    const mappedInventory = inventory.map((product, id) => {
      console.log(inventory)
      return (
        <Product
          // ANCHOR When mapping over an array of data and trying to display like so, and passing props. generally the index iterator goes in the key and the rest follow that syntax
          key={ id }
          name={ product.name }
          price={ product.price }
          details={ product.details }
          delete={this.onDeleteClickHandler}
          id={product.id}
        />
      )
    })

    return (
      <div>
        <h1>Dashboard</h1>

        { mappedInventory }
      </div>
    )
  }
}
