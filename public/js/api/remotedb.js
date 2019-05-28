/**************
 * API will return the response to whoever request for the page
 * everything needs to be wrapped up after return keyword
 */

(window => {
  const App = window.App || {}
  const $ = window.jQuery
  class RemoteDataStore{
    constructor(url) {
      this.serverUrl = url
    }

    getAll( cb ) { 
      // cb is the one who can print out all the res to the page
      return $.get( this.serverUrl, (res) => {
        console.log(res)
        cb( res)
      })
    }

    get( key ) {
       // cb will render the item to the page
       return $.get(this.serverUrl + '/' + key, (res) => {
         console.log(`getting th info for ${key}`)
       })
    }

    add( key, val) {
      return $.post( this.serverUrl, val, (res) => {
        console.log(res)
      })
    }

    remove( key ) {
      return $.ajax({
        type: "DELETE"
      })
    }
  }

  App.RemoteDataStore = RemoteDataStore
  window.App = App
})(window)