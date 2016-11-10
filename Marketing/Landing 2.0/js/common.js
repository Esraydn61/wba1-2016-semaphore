$(document).ready(function() {

	//Mobile Menu Slide 
	$(".main_mnu_button").click(function() {
		$(".main_mnu ul").slideToggle();
	});

	// Smooth scrolling
	$('a[href^="#"]').click(function () { 
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;

	if (elementClick == '#top_header') {
		$('body,html').animate({scrollTop: 0}, 1300);
	} else {
		$('body,html').animate({scrollTop: destination}, 1300);
	}

		return false;
	});

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});



	//Main Slider 
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 1,
		itemsDesktop : 1,
		itemsDesktopSmall : 1,
		itemsTablet : 1,
		itemsTabletSmall : 1,
		itemsMobile : 1,
		autoPlay: 5000

	});
	
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});

	//Screen Slider
	var owl = $(".screen_carousel");
	owl.owlCarousel({

		items : 4,
		autoPlay: 5000

	});
	
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});

	//Knopf "nach oben"
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 1200);
		return false;
	});
	
	//Ajax Kontakt Form
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});