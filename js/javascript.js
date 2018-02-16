$(function() {

// Cambiar el color de la nav al scroll

	$(document).on('scroll', function() {
		hola= $(document).scrollTop();
		anchoWindow= $(window).width();
		if (hola>150 || anchoWindow < 780) {
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

	intervalCafe= setInterval(aumentarNumeroCafe, 10)
	intervalClient= setInterval(aumentarNumeroClient, 10)
	intervalBlog= setInterval(aumentarNumeroBlog, 10)
	intervalLikes= setInterval(aumentarNumeroLikes, 10)

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
});



// Monstrar los proyectos por categorias

// Cargar 3 otros articulos