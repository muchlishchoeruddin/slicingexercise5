$('.owl-carousel').owlCarousel({
	loop:true,
	nav: true,
	dots:false,
	items:1
});
$(window).scroll(function(){
	if ($(this).scrollTop()>60) {
		$('.navbar').css({
			'background-color':'white',
		});
		$('.navbar a,i').addClass('colorblack');
	}else{
		$('.navbar').css({
			'background-color':'transparent',
		});
		$('.navbar a,i').removeClass('colorblack');
	}
});