import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <h1>Shelfie</h1>
      <Link to='/'><button>Dashboard Button</button></Link>
      <Link to='/add'><button>Add to Inventory</button></Link>
    </div>
  )
}
