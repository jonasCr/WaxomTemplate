$(function() {

//Monstrar los elementos al scroll
	
	//Elementos a monstar
	actividades=$('#actividades article');
	imgBrowser=$('#browsers');
	publicidad=$('#publicidad .container');
	boxProyectos= $('#proyectos .box');
	mobilTxt =$('#mobile-text');
	boxNumero=$('.numeros');
	boxPost=$('#recent-post .box');
	partners= $('.partners');

	$(window).scroll(function() {

		//Monstrar cuando llego al elemento
		documentScroll=$(document).scrollTop()+400;
		if (documentScroll > actividades.offset().top) {
			actividades.removeClass('invisible');
			actividades.addClass('animated zoomIn');
		}

		if (documentScroll > imgBrowser.offset().top) {
			imgBrowser.removeClass('invisible');
			imgBrowser.addClass('animated zoomIn');
		}

		if (documentScroll > publicidad.offset().top) {
			publicidad.removeClass('invisible');
			publicidad.addClass('animated zoomIn');
		}

		if (documentScroll > boxProyectos.offset().top) {
			boxProyectos.removeClass('invisible');
			boxProyectos.addClass('animated zoomIn');
		}

		if (documentScroll > mobilTxt.offset().top) {
			mobilTxt.removeClass('invisible');
			mobilTxt.addClass('animated zoomIn');
		}

		if (documentScroll > boxNumero.offset().top) {
			boxNumero.removeClass('invisible');
			boxNumero.addClass('animated zoomIn');
			//empezar a aumentar los numeros:
			intervalClient= setInterval(aumentarNumeroClient, 100);
			intervalCafe= setInterval(aumentarNumeroCafe, 100);
			intervalClient= setInterval(aumentarNumeroClient, 100);
			intervalBlog= setInterval(aumentarNumeroBlog, 100);
			intervalLikes= setInterval(aumentarNumeroLikes, 100);
		}

		if (documentScroll > boxPost.offset().top) {
			boxPost.removeClass('invisible');
			boxPost.addClass('animated zoomIn');
		}

		if (documentScroll > partners.offset().top) {
			partners.removeClass('invisible');
			partners.addClass('animated zoomIn');
		}
	});

// Cambiar el color de la nav al scroll

	$(document).on('scroll', function() {
		documentScrollNav= $(document).scrollTop();
		anchoWindow= $(window).width();
		if (documentScrollNav>150 || anchoWindow < 780) {
			$('#main-nav').css({
				background: '#4E3427',
				transition: '1s'
			});
		}

		else {
			$('#main-nav').css({
				background: 'transparent',
				transition: '1s'
			});
		}
	});
// Cambiar las imagenes de los botones del header al hover
	imgPrev=$('#img-prev');
	imgNext=$('#img-next');

	$('#btn-prev').hover(function() {
		imgPrev.attr('src', 'img/left-hover.png');;
	}, function() {
		imgPrev.attr('src', 'img/left.png');
	});

	$('#btn-next').hover(function() {
		imgNext.attr('src', 'img/right-hover.png');;
	}, function() {
		imgNext.attr('src', 'img/right.png');
	});


// Cambiar las arrows de los proyectos al hover
	boxes= $('#latest-projects .box');

	boxes.hover(function() {
		$('.arrow', this).attr('src', 'img/arrow-hover.png');
	}, function() {
		$('.arrow', this).attr('src', 'img/arrow.png');
	});

// Aumentar los numeros

	maxClient=Math.floor((Math.random() * 2000) + 1);
	inicioClient=0;
	maxCafe=Math.floor((Math.random() * 1000) + 1);
	inicioCafe=0;
	maxBlog=Math.floor((Math.random() * 500) + 1);
	inicioBlog=0;
	maxLikes=Math.floor((Math.random() * 5000) + 1);
	inicioLikes=0;
	spanClient=$('#clients');
	spanCafe=$('#coffee');
	spanBlog=$('#blog');
	spanLikes=$('#likes');

	
	function aumentarNumeroCafe() {
		if (inicioCafe<maxCafe) {
			spanCafe.html(inicioCafe);
			inicioCafe++;
		}
		else {
			clearInterval(intervalCafe);
		}
	}

	function aumentarNumeroClient() {
		if (inicioClient<maxClient) {
			spanClient.html(inicioClient);
			inicioClient++;
		}

		else {
			clearInterval(intervalClient);
		}
		
	}
	function aumentarNumeroBlog() {
		if (inicioBlog<maxBlog) {
			spanBlog.html(inicioBlog);
			inicioBlog++;
		}
		else {
			clearInterval(intervalBlog);
		}
	}
	function aumentarNumeroLikes() {
		if (inicioLikes<maxLikes) {
			spanLikes.html(inicioLikes);
			inicioLikes++;
		}
		else {
			clearInterval(intervalLikes);
		}
	}


// Monstrar los proyectos por categorias

	//las categorias
	allCategory=$('.category');
	webdesignCategory=$('.web-design');
	mobilAppCategory=$('.mobile-app');
	illustracionCategory=$('.illustration');
	photographyCategory=$('.photography');

	//los enlaces {
	enlaceAll=$('#all');
	enlaceWeb=$('#web');
	enlaceMobilApp=$('#mobile-app');
	enlaceIllustration=$('#illustration');
	enlacePhotography=$('#photography');

	enlaceAll.on('click', function(event) {
		event.preventDefault();
		allCategory.show();
	});

	enlaceWeb.on('click', function(event) {
		event.preventDefault();
		allCategory.hide();
		webdesignCategory.show();
	});

	enlaceMobilApp.on('click', function(event) {
		event.preventDefault();
		allCategory.hide();
		mobilAppCategory.show();
	});

	enlaceIllustration.on('click', function(event) {
		event.preventDefault();
		allCategory.hide();
		illustracionCategory.show();
	});

	enlacePhotography.on('click', function(event) {
		event.preventDefault();
		allCategory.hide();
		photographyCategory.show();
	});
	
});



// Cargar 3 otros articulos


