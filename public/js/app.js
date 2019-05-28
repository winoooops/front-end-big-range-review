( (window) => {
  console.log("App is now up and running")
  const App = window.App || {}
  // const DataStore = App.DataStore
  const RemoteDataStore = App.RemoteDataStore
  const Trunk = App.Trunk
  const FormHandler = App.FormHandler
  const CheckList = App.CheckList
  const emailChecker = App.Validation.isUTSMail

  const LIST_SEL = '[data-coffee-order="checklist"]'
  const FORM_SEL = '[data-coffee-order="form"]'
  const API_URL = 'http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders'

  const remoteDB = new RemoteDataStore(API_URL)
  const myTrunk = new Trunk('jazzCoffee', remoteDB )
  const formHandler = new FormHandler(FORM_SEL)
  const checkList = new CheckList(LIST_SEL) 

  myTrunk.printOrder()

  checkList.addClickHandler( myTrunk.removeOrder.bind(myTrunk) ) 

  formHandler.addInputHandler( emailChecker )

  // formHandler.addSubmitHandler( (data) => { 
  //   myTrunk.createOrder.call(myTrunk,data) 
  //   checkList.addRow.call(checkList, data)
  // })
  formHandler.addSubmitHandler( (data) => { 
    myTrunk.createOrder.call(myTrunk,data)
      .then( () => {
        checkList.addRow.call(checkList,data)
      })
      .catch( (err) => {
        console.error(err)
      })
  })
  window.myTrunk = myTrunk
  
})(window)