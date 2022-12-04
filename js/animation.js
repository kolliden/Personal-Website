$(document).ready(function() {
    $('.has-animation').each(function(index) {
      $(this).delay($(this).data('delay')).queue(function(){
        $(this).addClass('animate-in');
      });
    });
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});