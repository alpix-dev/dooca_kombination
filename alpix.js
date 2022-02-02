let k_footer = $('<div id="k_footer"><div class="row justify-content-between"> <div class="col-12 col-md position-1"></div><div class="col-12 col-md position-2"></div><div class="col-12 col-md position-3"></div></div><div class="row"> <div class="col-12 position-4"></div></div><div class="row"> <div class="col-12 position-5"></div></div><div class="row"> <div class="col-12 position-6"></div></div></div>');
k_footer.prependTo('.footer-middle > .container');

let old = $('.footer-middle > .container > row.aling-items-start');
$(".footer-payment").appendTo("#k_footer .position-3");
$(".footer-social").appendTo("#k_footer .position-2");
$(".footer-navigation").appendTo("#k_footer .position-1");
$(".footer-middle .logo-link img").first().appendTo("#k_footer .position-4");
$('#k_footer + .row, .footer-logo-text').remove();

$('.footer-logo-seo').toggleClass('col col-12')
$('.footer-logo-link').attr('href','https://cadastro.dooca.store/?partner=5798d07e0e3fbe2a15715ff03873f253')

$('<div id="k_radio" class="ml-3 mr-5 d-none d-md-flex align-items-center"><span>Ouça a Rádio Kombination Online</span><div id="iframe-cover"><i class="cursor"></i><i class="player"></i><iframe id="k_radio_frame" src="https://d6ojw9st89o3o.cloudfront.net/BRGallery/index.php/player/view/flatline;65;31;ZDM2bnIwdTN4bWM0bW0uY2xvdWRmcm9udC5uZXQvaW5kZXgucGhwL2FwaS9zdHJlYW1pbmcvc3RhdHVzLzgxNjQvMjdkNzEzY2E2NzVlM2JjNmUzZTY4MzRhMmZmZTA0NmIvc2Vydmlkb3IyNS5icmxvZ2ljLmNvbQ==;false" border="0" scrolling="no" frameborder="0" allowtransparency="true" style="background-color: none;" width="65" height="31"></iframe></div></div>').insertBefore($('header .smart-search.modal-s').closest('.ml-3'));
if($('.k_homevideo').length > 0){
    // $('.k_homevideo .owl-carousel').wrap('<div class="k_video_container"></div>');
    // $('.k_homevideo .owl-carousel').toggleClass("row col-md-7")
}
$('.header-bg + .container').toggleClass('container container-fluid');
$('.header-bg + .container-fluid > .row > div:first-child').toggleClass('col-2 col-auto');
$('.header-bg + .container-fluid > .row > div:last-child').toggleClass('col-10 col');
$('#iframe-cover iframe').click(function(){$(this).closest('#iframe-cover').toggleClass('play')})
$('.product-card .product-out-of-stock').closest('.product-card').addClass('indisponivel')
$('.footer-top').append('<div class="k_divider"></div>');
window.addEventListener('blur', function () {
    window.setTimeout(function () {
        if (document.activeElement == document.querySelector('#k_radio_frame')) {
            console.log('a')
            $('#iframe-cover').toggleClass('play')
            $('#k_radio_frame').off('blur');
            $('.smart-input').focus();            
        }
    }, 0);
});

$('.product > .product-info > .container > .row > div:first-child').toggleClass('col-md-7 col-md-6');
$('.product > .product-info > .container > .row > div:last-child').toggleClass('col-md-5 col-md-6');

$('body').css('opacity','1')