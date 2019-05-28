( (window) => {
  const App = window.App
  const $ = window.jQuery

  class CheckList{
    constructor(listSel) {
      this.$list = $(listSel)
    }

    addRow ( order ) {
      // remove any existing row with the same email
      this.removeRow( order.email ) 
      // creating row element basing on the order info
      const rowElement = new Row( order )
      // append the row element inside
      this.$list.append( rowElement.$element )
    }

    removeRow( email ) {
      this.$list
        .find(`[value="${email}"]`)
        .closest('[data-coffee-order="checkbox"]')
        .remove()
    }
    
    addClickHandler( cb ) {
      this.$list.on('click', (e) => {
        // getting the value email
        // remove it basing on the email 
        const email = e.target.value 
        cb( email ) // deliverOrder of myTrunk
        this.removeRow( email )
      })
    }
  }

  // define a class to dynamically append in the data I got
  class Row {
    constructor( order ) {
      console.log( order )
      let $div = $('<div></div>', {
        "data-coffee-order": "checkbox",
        "class": "checkbox"
      })

      let $label = $('<label></label>')

      let $checkbox = $('<input></input>', {
        'type': 'checkbox',
        'value': order.email
      })

      let description = order.size + ' '
      order.flavor ? description += order.flavor : ''
      description += order.order + ','
      description += ` (${order.email})`
      description += ` [${order.strength}x]`
      

      $label.append( $checkbox )
      $label.append( description )
      $div.append( $label)

      this.$element = $div
    }
  }

  App.CheckList = CheckList
  window.App = App
})(window)