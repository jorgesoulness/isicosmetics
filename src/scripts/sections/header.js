import {register} from '@shopify/theme-sections';
import  $ from 'jquery'

register('header-section', {
  headerFunction() {
    // Funciones Generales
    var $menuMobile = $('#mm'),
    $botnoMobile = $('#openMenuMobile'),
    $dataAttr = $('[data-menu-expand]');
    function menuOpenMobile() {
      var elDato = $dataAttr.attr('data-menu-expand');
      // console.log(elDato);
      switch (elDato) {
      case 'false':
        $menuMobile.attr('data-menu-expand', true);
        $botnoMobile.attr('data-menu-expand', true);
        $('body').addClass('bloquear');
        TweenMax.to($menuMobile, 0.3, { scale: 1.0, opacity: 1, ease: Power3.easeInOut, zIndex: 5, easeParams: [1.1,0.7], force3D: true });
        break;
      case 'true':
        $menuMobile.attr('data-menu-expand', false);
        $botnoMobile.attr('data-menu-expand', false);
        $('body').removeClass('bloquear');
        TweenMax.to($menuMobile, 0.3, { scale: 1.2, opacity: 0, ease: Power3.easeInOut, zIndex: -1, easeParams: [1.1,0.7], force3D: true });
        break;
      default:
        break;
      }
    }

    var selecciona = {
      botonabrir: '#openMenuMobile'
    }
    var botonabrir = document.querySelector(selecciona.botonabrir);
    botonabrir.addEventListener('click', menuOpenMobile);
    // window.menuOpenMobile= menuOpenMobile;

    $(document).ready(function(){
      $('#md').clone().prependTo('#contListMenu').removeAttr('id').show();
      TweenMax.to($('#mm'), 0, {scale: 1.2, opacity: 0, zIndex: -1, force3D: true});
    });
  },
  onLoad() {
    this.headerFunction();
  },
});
