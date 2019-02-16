// NOTE cant shorten response to res otherwise it breaks and says res.status is not a function
module.exports = {
  getInventory: (req, res) => {
    const db = req.app.get('db')
    db.get_inventory()
      .then(response => {
        res.status(200).send(response)
        console.log('get_inventory')
      })
  },
  create_product: (req, res) => {
    // NOTE dont forget to destructure the stuff from the body and put it into the sql method invocation
    const { name, price, details } = req.body
    const db = req.app.get('db')
    db.create_product(name, price, details)
      .then(response => {
        res.status(200).send(response)
        console.log('creating products')
      })
  },
  delete_product: (req, res) => {
    console.log(req.originalUrl)
    const db = req.app.get('db')
    const { id } = req.params
    db.delete_product(id)
      .then(response => {
        res.status(200).send(response)
        console.log('hit that delete button')
      })
  },
  update_product: (req, res) => {
    const { name, price, details } = req.body
    const {id} = req.params
    const db = req.app.get('db')
    db.update_product(name, price, details, id)
      .then(response => {
        res.status(200).send(response)
        console.log('hit that edit button')
      })
  }
}