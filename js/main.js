"use strict"

//document.addEventListener('DOMContentLoaded',function(){
//	$("#menu").addEventListener('touchstart',function(){
//		$(".forword_top").toggleClass("forword_bottom");
//	},false);
//},false);
$("#menu").on('click',function(){
	$(".forword_top").toggleClass("forword_bottom");
});

var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    autoplayDisableOnInteraction: false,
	autoplay: 2000, 
	speed: 3000, 
	disableScroll: true, 
	stopPropagation: false, 
});