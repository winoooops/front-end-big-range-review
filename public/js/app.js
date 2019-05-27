( (window) => {
  console.log("App is now up and running")
  const App = window.App || {}
  const DataStore = App.DataStore
  const Trunk = App.Trunk
  const myTrunk = new Trunk('jazzCoffee', new DataStore() )
  window.myTrunk = myTrunk
})(window)