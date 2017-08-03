var gui = {
  init: function () {
    gui.listeners();
    $('[data-toggle="tooltip"]').tooltip();
  },
  listeners: function () {
    $('#logo').click(gui.handlers.animateLogo);
    $('#logout').click(gui.handlers.displayLogoutModal);
    $('#language-switcher').click(gui.handlers.displayLanguages);
    $('#languages > div').click(gui.handlers.selectLanguage);
    $('#search-toggle').click(gui.handlers.displaySearchBox);
  },
  handlers: {
    animateLogo: function () {
      swal({
        imageUrl: '../img/sor.png',
        title: 'SOM ou SOR ?',
        text: 'Vous êtes actuellement sur Spirit of Metal. Souhaitez-vous visiter Spirit of Rock ?',
        showCancelButton: true,
        cancelButtonText: 'Je veux rester ici',
        confirmButtonColor: '#121212',
        confirmButtonText: 'Allons sur SOR !',
        closeOnConfirm: false
      }, function () {
        location.href = 'http://www.spirit-of-rock.com/index-l-fr.html';
      });
    },
    displayLogoutModal: function () {
      swal({
        title: 'Hey!',
        text: 'Que voulez-vous faire ?',
        type: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Rester ici',
        confirmButtonColor: '#121212',
        confirmButtonText: 'Laissez-moi sortir !',
        closeOnConfirm: false
      });
    },
    displayLanguages: function () {
      if ($('#language-switcher i').is(':visible')) {
        $('i', '#language-switcher').hide();
        $('img', '#language-switcher').fadeIn();
        $('#languages').slideDown();
      } else {
        $('#languages').slideUp();
        $('img', '#language-switcher').hide();
        $('i', '#language-switcher').fadeIn();
      }
    },
    selectLanguage: function (e) {
      switch (e.target.textContent) {
        case 'FR':
          location.href = 'http://www.spirit-of-metal.com/index-l-fr.html';
          break;
        case 'EN':
          location.href = 'http://www.spirit-of-metal.com/index-l-en.html';
          break;
        case 'ES':
          location.href = 'http://www.spirit-of-metal.com/index-l-es.html';
          break;
      }
    },
    displaySearchBox: function () {
      if ($('#search-toggle i').is(':visible')) {
        $('i', '#search-toggle').hide();
        $('img', '#search-toggle').fadeIn();
        $('#search-box').slideDown();
      } else {
        $('#search-box').slideUp();
        $('img', '#search-toggle').hide();
        $('i', '#search-toggle').fadeIn();
      }
    }
  }
};

$(document).ready(gui.init);
