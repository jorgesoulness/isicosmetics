import {register} from '@shopify/theme-sections';
import  $ from 'jquery'
import { isLength } from 'lodash-es';

register('header-section', {
  isSafari() {
    return /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
  },
  isChrome() {
    return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  },
  scrolMenu() {
    let c;
    let currentScrollTop = 0;
    let navbar = $('#headerGeneral');

    $(window).scroll(function () {
      var a = $(window).scrollTop();
      var b = navbar.outerHeight();
     
      currentScrollTop = a;
     
      if (c < currentScrollTop && a > b + b) {
        // navbar.addClass("scrollHUp");
        if(typeof(isSafari) || typeof(isChrome)) {
          navbar.css('-webkit-transform', 'translateY(-100%)');
        } else {
          navbar.css('transform', 'translateY(-100%)');
        }
      } else if (c > currentScrollTop && !(a <= b)) {
        // navbar.removeClass("scrollHUp");
        if(typeof(isSafari) || typeof(isChrome)) {
          navbar.css('-webkit-transform', 'translateY(0)');
        } else {
          navbar.css('transform', 'translateY(0)');
        }
      }
      c = currentScrollTop;
    });
  },
  headScrolDown() {
    //WindowSrcoll
    $(window).on("scroll", function() {
      let headerPirn = $("#headerGeneral").outerHeight();
      let sumaHead = headerPirn;
      if($(window).scrollTop() > 0) {
          $("#headerGeneral").addClass("activeHead");
      } else {
        $("#headerGeneral").removeClass("activeHead");
      }
    });
  },
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

    $(document).ready(function(){
      // Tiempo de carga para el header
      setTimeout(() => {
        var head = $('#headerGeneral').outerHeight();
        var ventana = $(window).width();
        var alturaBlock = head + 30;
        let altoBar = $('#annAlt').outerHeight();
        $('#blockhh').css({ 'height': head+'px' });
        console.log(altoBar);
        $("#headerGeneral").css({ 'top': altoBar+'px' });
      }, 1500);

      $('#md').clone().prependTo('#contListMenu').removeAttr('id').show();
      TweenMax.to($('#mm'), 0, {scale: 1.2, opacity: 0, zIndex: -1, force3D: true});
      $(".mnuContMob [aria-controls]").click(function(e) {   
        e.preventDefault();
        var iden = $(this).attr('aria-controls');
        // console.log(iden);
        $("#"+iden).toggleClass('show');
        // $(this).hide().next().addClass('hello');
      });
    });
  },
  async onLoad() {
    this.scrolMenu();
    this.headScrolDown();
    this.headerFunction();
  },
});
