$('h1').hover(function () {
  $(this).stop().animate({ fontSize: '100px' }, 300);
}, function () {
  $(this).stop().animate({ fontSize: '80px' }, 300);
});