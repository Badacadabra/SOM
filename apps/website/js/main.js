var gui = {
  init: function () {
    gui.listeners();

    $("body").tooltip({
      selector: '[data-toggle="tooltip"]'
    });

    gui.configure.typeahead();
    gui.configure.circles();
    gui.configure.carousel();

    if ($('#discography').length > 0) {
      gui.handlers.selectReleaseType();
    }
  },
  configure: {
    typeahead: function () {
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
    circles: function () {
      $('#circle-1').circliful({
        animation: 1,
        animationStep: 1,
        animateInView: true,
        foregroundBorderWidth: 5,
        backgroundBorderWidth: 5,
        backgroundColor: 'whitesmoke',
        fontColor: 'whitesmoke',
        multiPercentage: 1,
        multiPercentageLegend: 1,
        percentages: [
          {'percent': 99, 'color': '#4ADBEA', 'title': 'Avec logo' },
          {'percent': 94, 'color': '#3180B8', 'title': 'Avec photo(s)' },
          {'percent': 82, 'color': '#49EBA8', 'title': 'Avec ville' },
          {'percent': 50, 'color': '#FFCA35', 'title': 'Avec date(s)' }
        ],
        icon: 'f0c0',
        iconPosition: 'middle',
        iconColor: 'whitesmoke'
      });

      $('#circle-2').circliful({
        animation: 1,
        animationStep: 1,
        animateInView: true,
        foregroundBorderWidth: 5,
        backgroundBorderWidth: 5,
        backgroundColor: 'whitesmoke',
        fontColor: 'whitesmoke',
        multiPercentage: 1,
        multiPercentageLegend: 1,
        percentages: [
          {'percent': 16, 'color': '#4ADBEA', 'title': 'Avec paroles' },
          {'percent': 50, 'color': '#3180B8', 'title': 'Avec label(s)' },
          {'percent': 50, 'color': '#49EBA8', 'title': 'Avec producteur' },
          {'percent': 50, 'color': '#FFCA35', 'title': 'Avec studio' }
        ],
        icon: 'f001',
        iconPosition: 'middle',
        iconColor: 'whitesmoke'
      });

      $('#circle-3').circliful({
        animation: 1,
        animationStep: 1,
        animateInView: true,
        foregroundBorderWidth: 5,
        backgroundBorderWidth: 5,
        backgroundColor: 'whitesmoke',
        fontColor: 'whitesmoke',
        multiPercentage: 1,
        multiPercentageLegend: 1,
        percentages: [
          {'percent': 16, 'color': '#4ADBEA', 'title': 'Avec logo' },
          {'percent': 50, 'color': '#3180B8', 'title': 'Avec pays' }
        ],
        icon: 'f02b',
        iconPosition: 'middle',
        iconColor: 'whitesmoke'
      });
    },
    carousel: function () {
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
    }
  },
  listeners: function () {
    $(document).scroll(gui.handlers.closeSearch);
    $('#portal').click(gui.handlers.switchSite);
    $('#logout').click(gui.handlers.displayLogoutModal);
    $('#language-switcher').click(gui.handlers.displayLanguages);
    $('#languages > div').click(gui.handlers.selectLanguage);
    $('#search-toggle, #dimmer').click(gui.handlers.displaySearchBox);
    $('li', '#release-menu').click(gui.handlers.selectReleaseType);
    $('#discography').on('click', '.more', gui.handlers.loadMoreReleases);
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
    },
    selectReleaseType: function (e) {
      var releaseType = e && $(e.target).data('type') || 'Album';

      if (e) {
        $('li', '#release-menu').removeClass('current-type');
      }

      $(this).addClass('current-type');

      gui.handlers.getReleases(releaseType, 1);
    },
    loadMoreReleases: function () {
      gui.handlers.getReleases($(this).data('type'), Number($(this).data('page')) + 1, true);
    },
    getReleases: function (type, page, more) {
      $.get('http://www.spirit-of-metal.com/API/albums.php?id_groupe=17&type=' + type + '&p=' + page, function (data) {
        var releases = JSON.parse(data),
            tpl = '';

        if (releases.length === 0) {
          tpl += '<p class="not-found">Aucun élément</p>';
        } else {
          for (var i = 0; i < releases.length; i++) {
            tpl += '<a href="album.html" class="row release">';
            tpl += '  <div class="col-xs-2">';
            tpl += '    <img src="' + releases[i].cover+ '" alt="' + releases[i].name + '">';
            tpl += '  </div>';
            tpl += '  <div class="col-xs-7">';
            tpl += '    <h4>' + releases[i].name + '</h4>';
            tpl += '    <div>' + new Date(releases[i].date).getFullYear() + '</div>';
            tpl += '  </div>';
            tpl += '  <div class="col-xs-2">';
            tpl += '   <span class="grade">' + releases[i].grade + '</span>';
            tpl += '  </div>';
            tpl += '  <div class="col-xs-1 indicators">';
            tpl += '    <div class="row">';
            tpl += '      <div class="col-xl-4">';

            if (releases[i].hasAudio) {
              tpl += '      <i class="fa fa-music aria-hidden="true"></i>';
            } else {
              tpl += '      <i class="fa fa-close" aria-hidden="true"></i>';
            }

            tpl += '      </div>';
            tpl += '      <div class="col-xl-4">';

            if (releases[i].hasReview) {
              tpl += '      <i class="fa fa-quote-left" aria-hidden="true"></i>';
            } else {
              tpl += '      <i class="fa fa-close" aria-hidden="true"></i>';
            }

            tpl += '      </div>';
            tpl += '      <div class="col-xl-4">';

            if (releases[i].hasLyrics) {
              tpl += '      <i class="fa fa-microphone" aria-hidden="true"></i>';
            } else {
              tpl += '      <i class="fa fa-close" aria-hidden="true"></i>';
            }

            tpl += '      </div>';
            tpl += '    </div>';
            tpl += '  </div>';
            tpl += '</a>';
          }

          if (releases.length === 10) {
            tpl += '<span class="more" data-type="' + type + '" data-page="' + page + '">Voir plus</span>';
          }
        }

        if (more) {
          $('#releases').append(tpl);
        } else {
          $('#releases').html(tpl);
        }
      });
    }
  }
};

$(document).ready(gui.init);
