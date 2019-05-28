( (window) => {
  console.log("App is now up and running")
  const App = window.App || {}
  const DataStore = App.DataStore
  const Trunk = App.Trunk
  const FormHandler = App.FormHandler
  const CheckList = App.CheckList
  const emailChecker = App.Validation.isUTSMail
  console.log( emailChecker )

  const LIST_SEL = '[data-coffee-order="checklist"]'
  const FORM_SEL = '[data-coffee-order="form"]'

  const myTrunk = new Trunk('jazzCoffee', new DataStore() )
  const formHandler = new FormHandler(FORM_SEL)
  const checkList = new CheckList(LIST_SEL) 

  checkList.addClickHandler( myTrunk.removeOrder.bind(myTrunk) ) 

  formHandler.addInputHandler( emailChecker )

  formHandler.addSubmitHandler( (data) => { 
    myTrunk.createOrder.call(myTrunk,data) 
    checkList.addRow.call(checkList, data)
  })
  window.myTrunk = myTrunk
  
})(window)