var gui = {
  init: function () {
    gui.listeners();

    $('[data-toggle="tooltip"]').tooltip();

    $('.owl-carousel').owlCarousel({
      items: 1,
      center: true,
      autoHeight:true,
      loop: true,
      video: true,
      videoWidth: 570,
      videoHeight: 428,
      lazyLoad: true
    });

    $('#search-box > input[type="text"]').typeahead({
      source: [
        {id: 'style', name: '[Style] Heavy Black'},
        {id: 'band', name: '[Groupe] Children Of Bodom'},
        {id: 'artist', name: '[Artiste] Alexi Laiho'},
        {id: 'album', name: '[Album] Something Wild'},
        {id: 'audio', name: '[Audio] Lake Bodom'},
        {id: 'video', name: '[Vidéo] Deadnight Warrior'},
        {id: 'label', name: '[Label] Nuclear Blast'},
        {id: 'lieu', name: '[Lieu] Lac Bodom'}
      ],
      autoSelect: true
    });
  },
  listeners: function () {
    $(document).scroll(gui.handlers.closeSearch);
    $('#portal').click(gui.handlers.switchSite);
    $('#logout').click(gui.handlers.displayLogoutModal);
    $('#language-switcher').click(gui.handlers.displayLanguages);
    $('#languages > div').click(gui.handlers.selectLanguage);
    $('#search-toggle, #dimmer').click(gui.handlers.displaySearchBox);
  },
  handlers: {
    closeSearch: function () {
      $('img', '#search-toggle').hide();
      $('i', '#search-toggle').fadeIn();
      $('#dimmer').hide();
      $('#search-box').fadeOut();
    },
    switchSite: function () {
      swal({
        imageUrl: 'img/sor-logo.png',
        title: 'Spirit of Rock',
        text: 'Vous êtes actuellement sur Spirit of Metal. Souhaitez-vous changer de site ?',
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
        $('#dimmer').fadeIn();
        $('#search-box').slideDown();
      } else {
        $('#search-box').slideUp();
        $('img', '#search-toggle').hide();
        $('#dimmer').fadeOut();
        $('i', '#search-toggle').fadeIn();
      }
    }
  }
};

$(document).ready(gui.init);
