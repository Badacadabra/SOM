var menu = {
  init: function () {
    menu.listeners();
    $('#datepicker').datepicker();
    $('#location').typeahead({
      source: [
        {id: 'paris', name: 'Paris, FRANCE'},
        {id: 'lyon', name: 'Lyon, FRANCE'},
        {id: 'marseille', name: 'Marseille, FRANCE'}
      ],
      autoSelect: true
    });
  },
  listeners: function () {
    $('#burger').click(menu.handlers.open);
    $('#cross, #dimmer').click(menu.handlers.close);
    $('#login').submit(menu.handlers.welcome);
  },
  handlers: {
    open: function () {
      $('#burger').hide();
      $('#cross').fadeIn();
      $('#dimmer').fadeIn();
      $('#menu').slideDown();
    },
    close: function () {
      $('#cross').hide();
      $('#burger').fadeIn();
      $('#dimmer').fadeOut();
      $('#menu').slideUp();
    },
    welcome: function (e) {
      e.preventDefault();
      alert('Test réussi, ' + $('#pseudo').val() + ' !');
    }
  }
};

$(document).ready(menu.init);
