var headerVisible = true;
var scrollPos = $(document).scrollTop();

$(window).scroll(function() {
	var scrollTop = $(document).scrollTop();
	
	if(headerVisible && scrollTop > scrollPos)
	{
		headerVisible = false;
		$(".header").addClass('hidden-header');
	}
	else if(!headerVisible && scrollTop < scrollPos)
	{
		headerVisible = true;
		$(".header").removeClass('hidden-header');
	}
	
	scrollPos = scrollTop;
});	