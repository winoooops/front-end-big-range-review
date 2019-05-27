// I will be the one who provide the inner logic for others to use
 ((window) => {
  const App = window.App || {}
  class DataStore{
    constructor() {
      console.log("Right now the datastore is up and running...")
      this.data = {}
    }

    add(key,val){
      this.data[key] = val
    }

    get(key) {
      return this.data[key]
    }

    remove(key) {
      delete this.data[key]
    }

    getAll() {
      return data
    }
  }

  App.DataStore = DataStore
  window.App = App
})(window)