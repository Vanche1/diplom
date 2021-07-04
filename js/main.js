$(function(){

	$('.menu__btn').on('click', function() {
		$('.menu__btn').toggleClass('menu__btn--active');
		$('.menu__list').toggleClass('menu__list--active');
		$('.submenu__list').toggleClass('submenu__list--active');
		$('.submenu').toggleClass('submenu--active');
		$('.header').toggleClass('header--active');
	});

	$('.menu__list-link').on('click', function() {
		$('.menu__btn').removeClass('menu__btn--active');
		$('.menu__list').removeClass('menu__list--active');
		$('.submenu__list').removeClass('submenu__list--active');
		$('.submenu').removeClass('submenu--active');
		$('.header').removeClass('header--active');
	});
 
});
