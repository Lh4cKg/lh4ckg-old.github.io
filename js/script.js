!function($) {

  
  /* Work page
   * =========
   */

  // Fancybox
  if ('fancybox' in $.prototype) {
    $(".fancybox").fancybox({
      padding: [15,15,35,15]
    });
  }


  // Filtering
  if ('isotope' in $.prototype) {
    var $container = $('#worklist');

    $('#worklist').isotope({
      itemSelector : '.work',
      layoutMode : 'fitRows'
    }); 

    $('.filter-block .btn').on('click', function(){
      var selector = $(this).data('filter');
      $container.isotope({ filter: selector });
      return false; 
    }); 
  }

  // Hover effects 
  if ('mateHover' in $.prototype) {
    $('.webdesign, .photoshop').mateHover({
      position: 'y+i',
      overlayBg: '#fff',
      overlayOpacity: 0.5,
      overlayStyle: 'four'
    });

    $('.wordpress, .icondesign').mateHover({
      position: 'x+i',
      overlayStyle: 'double',
      doublePosition: 'vertical',
      overlayOpacity: 1,
      overlayBg: '#fff'
    });

    $('.photoshop').mateHover({
      position: 'x',
      overlayStyle: 'four',
      overlayEasing: 'easeOutBounce',
      fourSpeedIn0:400,   // 1
      fourSpeedOut0:400,   // 1
      fourSpeedIn1:900,   // 2
      fourSpeedOut1:900,   // 2
      fourSpeedIn2:500,   // 3
      fourSpeedOut2:500,   // 3
      fourSpeedIn3:800,   // 4
      fourSpeedOut3:800,
      overlayBg:'#fff',
      popupEasing:'easeInOutQuart'
    });

  }
  
  // Make sure items in definition-rows are all same height
  $('.definition-rows').each(function(){
    $el = $(this);
    $dt = $('.dt', $el);
    $dd = $('.dd', $el);
    if ($dt.height() < $dd.height()) {
      $dt.height($dd.height());
      return;
    }
    if ($dd.height() < $dt.height()) {
      $dd.height($dt.height());
      return;
    }
  });
  
  
  

  /*
   * Twitter Bootstrap JS
   */
  // Load tooltips for social icons
  $('.social-icons-nav a').tooltip();






  /*
   * CSS3PIE - CSS3 decorations for IE
   * =================================
   */

  if ('PIE' in window) {
    /* Create an array of all elements that will need CSS3PIE */
    var PIEElements = ['.navbar-inner',
    '.navbar .nav li:first-child a',
    '.navbar .nav li:last-child a',
    '.main',
    '#home-placeholder',
    '.button',
    '.button-inner',
    '.site-footer'];

    /* Apply PIE to each element */
    $.each(PIEElements, function(index, element){
      var $element = $(element);
      $element.css({'position':'relative','zoom':'1'});
      window.PIE.attach($element.get(0));
    });

  } 
  
}( window.jQuery );
