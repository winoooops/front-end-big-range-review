/**
 * In charge of form operations 
 * 1. Once the submit button is clicked 
 *    - prevent default 
 *    - getting the properties of the form
 *    - passing the properties as a whole to a callback func
 *    - reset the form
 *    - autofocus
 * 2. Once the reset button is clicked
 *    - reset the form 
 *    - autofocus
 */
((window) => {
  const $ = window.jQuery
  const App = window.App || {}
  class FormHandler{
    constructor(formSel) {
      this.$form = $(formSel)
    }

    addSubmitHandler( cb ) {
      this.$form.on('submit', e => {
        e.preventDefault()
        let data = {}
        this.$form.serializeArray().forEach( (prop) => {
          data[prop.name] = prop.value
        })
        cb(data)
        this.$form[0].reset()
        this.$form[0].elements[0].focus()
      })
    }

    addInputHandler( cb ) {
      this.$form.on('input', '[name="emailAddress"]',(e) => {
        let emailAddress = e.target.value
        let msg = ''
        if ( cb( emailAddress ) ) {
          return e.target.setCustomValidity('')
        } else {
          console.log('poop')
          msg = emailAddress + " is not a valid address..."
          console.log( msg )
          e.target.setCustomValidity( msg )
        }
        
      })
    }

  }

  App.FormHandler = FormHandler
  window.App = App
})(window)