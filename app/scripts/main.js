$(document).ready(function () {
  'use strict'
  // Theme settings
  if (typeof localStorage.theme !== 'undefined') {
    $('#theme_styles').attr('href', 'css/themes/potasium.' + localStorage.theme + '.css')
    setTimeout(function () {
      $('.preloader').fadeOut('fast')
    }, 10)
  }
  //Home Control Dashboard Icons Settings
  $(".home-control-switch input").on("change",function(){
    var $switch = $(this);
    var $icon = $switch.parent().parent().children(".icon");
    if($switch.is(':checked')){
     $icon.css("color","#266DD3")
    } else {
     $icon.css("color","#6c757d")
      
    }
  })
  $('.special.cards .image').dimmer({ on: 'hover' })
  $('.ui.accordion').accordion()
  $('.example .ui.embed').embed()
  // Charts resize settings
  function chartResize () {
    var allCharts = $('.dash-charts')
    for (var i = 0; i < allCharts.length; i++) {
      var $item = $(allCharts[i])
      echarts.getInstanceById($item.attr('_echarts_instance_')).resize()
    }
  }
  // Change Icon Color
  $('.color-list li').on('click', function () {
    var currColor = $(this).css('backgroundColor')
    // alert(currColor)
    $('#container_sui_icon .icon-list .card i').css('color', currColor)
  })

  $(document).ready(function () {
    setTimeout(chartResize, 300)
  })
  $(window).on('load', function () {
    setTimeout(chartResize, 300)
    setTimeout(function () {
      $('.preloader').fadeOut('fast')
    }, 10)
  })

  window.onresize = function () {
    setTimeout(chartResize, 300)
  }

  $('.layout_change_boxed').click(function (e) {
    setTimeout(chartResize, 300)
  })
  $('.set-site-boxed').on('click', function () {
    setTimeout(chartResize, 300)
  })
  $('.set-site-wide').on('click', function () {
    setTimeout(chartResize, 300)
  })

  $('.ui.accordion').accordion()
  $('.ui.dropdown').dropdown({ on: 'hover', transition: 'slide right' })
  var ps
  ps = new PerfectScrollbar('.side-menu')

  /* calendar */
  $(function () {
    $('#calendar').datepicker({
      inline: true,
      showOtherMonths: true,
      selectOtherMonths: true,
      dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    })
  })
  $('.calendar-tab-menu .item').tab()
  $('.right-side-menu')
    .sidebar({ dimPage: false, transition: 'overlay', mobileTransition: 'uncover', silent: true })
    .sidebar('attach events', '.rightsidebar')
  $('.calendar-side-menu')
    .sidebar({ dimPage: false, transition: 'overlay', mobileTransition: 'uncover', silent: true })
    .sidebar('attach events', '.rightCalendarSide')
    .sidebar('setting', 'onShow', function () {})
  $('.right-side-menu .grid .column a').on('click', function () {
    var $sidebar = $('#sidebar')
    var $dropMenu = $('.side-menu .ui.dropdown.item .menu')
    var $subdropMenu = $('.side-menu .ui.dropdown.item .menu .item .menu')

    var $class = $(this).attr('class')
    $sidebar.removeClass('bg-1 bg-2 bg-3 bg-4 bg-5 bg-6 bg-7 bg-8 bg-9 bg-10 bg-11 bg-12 bg-13 bg-14').addClass($class)
    $dropMenu.removeClass('bg-1 bg-2 bg-3 bg-4 bg-5 bg-6 bg-7 bg-8 bg-9 bg-10 bg-11 bg-12 bg-13 bg-14').addClass($class)
    $subdropMenu.removeClass('bg-1 bg-2 bg-3 bg-4 bg-5 bg-6 bg-7 bg-8 bg-9 bg-10 bg-11 bg-12 bg-13 bg-14').addClass($class)
  })
  $('.theme-select').on('click', function () {
    var theme = $(this).attr('data-theme')
    localStorage.setItem('theme', theme)
    $('#theme_styles').attr('href', 'css/themes/potasium.' + theme + '.css')
  })
  $('.sidebarCollapse').on('click', function () {
    ps.destroy()
    setTimeout(chartResize, 300)
    var $sidebar = $('#sidebar')
    var $content = $('#content')
    var $brandIcon = $('.brand-icon')
    $sidebar.toggleClass('active')
    $content.toggleClass('collapsed')
    // $brandIcon.transition('jiggle')
    if ($sidebar.hasClass('active')) {
      $('.side-menu .ui.dropdown.item').removeClass('display-none')
      $('.side-menu .ui.dropdown.item .menu').removeClass('display-none')
      $('.side-menu .title.item').addClass('display-none')
      $('.side-menu .content').addClass('display-none')
      $('.side-menu .title.item .accordion-text').addClass('opacity-none')
      $('.single-item span').addClass('display-none active')
      $('.single-item').addClass('collapsed')
    } else {
      ps = new PerfectScrollbar('.side-menu')
      $('.side-menu .title.item .accordion-icon').transition('slide left')
      setTimeout(function () {
        $('.side-menu .title.item .accordion-text').removeClass('opacity-none')
      }, 0)

      $('.side-menu .ui.dropdown.item').addClass('display-none')
      $('.side-menu .ui.dropdown.item .menu').addClass('display-none')

      $('.side-menu .title.item').removeClass('display-none')
      $('.side-menu .content').removeClass('display-none')

      $('.ui.dropdown').dropdown('refresh', 'remove active')
      $('.single-item span').removeClass('display-none active')
      $('.single-item').removeClass('collapsed')
    }
  })

  // Aouto active page class add
  var url = window.location
  var menu_item = $('#sidebar div a').filter(function () {
    return this.href == url.origin + url.pathname
  })
  menu_item.parent().addClass('active')
  menu_item.addClass('active')
})
