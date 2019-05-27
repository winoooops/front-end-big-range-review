// I will be the one who consumes DataStore's inner logic
((window) => {
  const App = window.App || {}
  class Trunk {
    constructor(id,db) {
      this.trunkId = id
      this.db = db
    }

    createOrder( order ){
      this.db.add(order.key, order)
    }

    removeOrder( email ) {
      this.db.remove(email)
    }

    printOrder() {
      const customerIdArray = Object.keys(this.db.getAll() )
      customerIdArray.forEach( (email) => {
        // cause I am using arrow func here, so I dont' need to bind this...
        console.log( this.db.get(email ))
      })
    }
  }

  App.Trunk = Trunk
  window.App = App
})(window)