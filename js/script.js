$('.btnNext').click(function() {
    $('.nav-tabs .active').parent().next('li').find('a').trigger('click');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

$('.btnPrev').click(function() {
    $('.nav-tabs .active').parent().prev('li').find('a').trigger('click');
    window.scrollTo({ top: 0, behavior: 'smooth' });
});