import React from 'react'
import { Link } from 'react-router-dom'

export default function Product(props) {
  return (
    <div>
      name:    { props.name }
      price:   { props.price }
      details:   { props.details }
      <Link to='/edit/:id'>
        <button>Edit from the product component</button>
      </Link>
      <button onClick={() => props.delete(props.id)}>Delete</button>
    </div>
  )
}


// NOTE to pass props to a stateless functional component props must be passed as an argument. The below is the exact same as above. just a different way of writing the same thing.

// import React from 'react'

// const Product = props => (
//   <div>

//     name: {props.name}
//     price: {props.price}
//     details: {props.details}

//   </div>
// )

// export default Product