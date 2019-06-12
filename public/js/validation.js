( window => {
  const App = window.App || {}
  class Validation {
    constructor () {}

    static isUTSMail( email ) {
      console.log( /.+@student\.uts\.edu\.au$/.test(email) 
      || /.+@uts\.edu\.au$/.test(email) )
      return /.+@student\.uts\.edu\.au$/.test(email) 
      || /.+@uts\.edu\.au$/.test(email)
    }
  }

  App.Validation = Validation
  window.App = App
})(window)