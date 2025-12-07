$(function(){
 $('.menu li:nth-child(1)').on('click',function(){
	$('table').eq(0).fadeIn();
	$('table').eq(1).fadeOut();
	$('table').eq(2).fadeOut();
	$('table').eq(3).fadeOut();
	$(this).addClass('right');
	$('.menu li:nth-child(2)').removeClass('right');
	$('.menu li:nth-child(3)').removeClass('right');
	$('.menu li:nth-child(4)').removeClass('right');
 });
 $('.menu li:nth-child(2)').on('click',function(){
	$('table').eq(0).fadeOut();
	$('table').eq(1).fadeIn();
	$('table').eq(2).fadeOut();
	$('table').eq(3).fadeOut();
	$(this).addClass('right');
	$('.menu li:nth-child(1)').removeClass('right');
	$('.menu li:nth-child(3)').removeClass('right');
	$('.menu li:nth-child(4)').removeClass('right');
 });
	
 $('.menu li:nth-child(3)').on('click',function(){
	$('table').eq(0).fadeOut();
	$('table').eq(1).fadeOut();
	$('table').eq(2).fadeIn();
	$('table').eq(3).fadeOut();
	$(this).addClass('right');
	$('.menu li:nth-child(1)').removeClass('right');
	$('.menu li:nth-child(2)').removeClass('right');
	$('.menu li:nth-child(4)').removeClass('right');
 });
 $('.menu li:nth-child(4)').on('click',function(){
	$('table').eq(0).fadeOut();
	$('table').eq(1).fadeOut();
	$('table').eq(2).fadeOut();
	$('table').eq(3).fadeIn();
	$(this).addClass('right');
	$('.menu li:nth-child(1)').removeClass('right');
	$('.menu li:nth-child(2)').removeClass('right');
	$('.menu li:nth-child(3)').removeClass('right');
 });
});