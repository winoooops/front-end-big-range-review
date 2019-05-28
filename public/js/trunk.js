// I will be the one who consumes DataStore's inner logic
((window) => {
  const App = window.App || {}
  class Trunk {
    constructor(id,db) {
      this.trunkId = id
      this.db = db
    }

    createOrder( order ){
      console.log( order )
      return this.db.add(order.email, order)
    }

    removeOrder( email ) {
      return this.db.remove(email)
    }

    printOrder( cb ) {
      // cb is too print out the order 
      // geting the res from the API server
      return this.db.getAll( (r) => {
        let customerIdArray = Object.keys( r )
        customerIdArray.forEach( (email) => {
          this.db.get(email)
            .then( (res) => cb(res) )
        })
      })
      // travase throught the result <- this.db.get()
      // print them as checkbox
      
    }
  }

  App.Trunk = Trunk
  window.App = App
})(window)