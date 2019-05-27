( (window) => {
  console.log("App is now up and running")
  const App = window.App || {}
  const DataStore = App.DataStore
  const Trunk = App.Trunk
  const FormHandler = App.FormHandler

  const FORM_SEL = '[data-coffee-order="form"]';

  const myTrunk = new Trunk('jazzCoffee', new DataStore() )
  const formHandler = new FormHandler(FORM_SEL)
  formHandler.addSubmitHandler( myTrunk.createOrder.bind(myTrunk) )
  window.myTrunk = myTrunk
  
})(window)