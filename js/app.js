$(document).ready(function () {

	/*=============== Burger-menu (tab) ===============*/
	const navMenu = document.getElementById('mn-tb'),
		navToggle = document.getElementById('tg-tb'),
		navClose = document.getElementById('cl-tb')
	if (navToggle) {
		navToggle.addEventListener('click', () => {
			navMenu.classList.add('show-menu')
		})
	}
	if (navClose) {
		navClose.addEventListener('click', () => {
			navMenu.classList.remove('show-menu')
		})
	}
	const navLink = document.querySelectorAll('.menu__group-item')
	const linkAction = () => {
		const navMenu = document.getElementById('mn-tb')
		navMenu.classList.remove('show-menu')
	}
	navLink.forEach(n => n.addEventListener('click', linkAction))

	/*=============== Burger-menu (mob) ===============*/
	const mobnavMenu = document.getElementById('mn-mb'),
		mobnavToggle = document.getElementById('tg-mb'),
		mobnavClose = document.getElementById('cl-mb')
	if (navToggle) {
		mobnavToggle.addEventListener('click', () => {
			mobnavMenu.classList.add('show-menu')
		})
	}
	if (navClose) {
		mobnavClose.addEventListener('click', () => {
			mobnavMenu.classList.remove('show-menu')
		})
	}
	const mobnavLink = document.querySelectorAll('.menu__group-item')
	const moblinkAction = () => {
		const mobnavMenu = document.getElementById('mn-mb')
		mobnavMenu.classList.remove('show-menu')
	}
	mobnavLink.forEach(n => n.addEventListener('click', moblinkAction))

	/*=============== Burger-menu (alerts) ===============*/
	const alertsMenu = document.getElementById('alerts-mb'),
		alertsToggle = document.getElementById('alerts-tg-mb'),
		alertsClose = document.getElementById('cl-alerts-mb')
	if (alertsToggle) {
		alertsToggle.addEventListener('click', () => {
			alertsMenu.classList.add('show-alerts')
		})
	}
	if (alertsClose) {
		alertsClose.addEventListener('click', () => {
			alertsMenu.classList.remove('show-alerts')
		})
	}
	const alertsLink = document.querySelectorAll('.menu__group-item')
	const alertslinkAction = () => {
		const alertsMenu = document.getElementById('alerts-mb')
		alertsMenu.classList.remove('show-alerts')
	}
	alertsLink.forEach(n => n.addEventListener('click', alertslinkAction))

	// alerts-tg-mb - открыть
	// alerts-mb - само окно
	// cl-alerts-mb - закрыть окно
	
	// -------------------- header --------------------------

	// $(window).scroll(function () {
	// 	if ($(this).scrollTop() > 1) {
	// 		$('header').addClass('sticky');
	// 	}
	// 	else {
	// 		$('header').removeClass('sticky');
	// 	}
	// });

	// -------------------- jQuery form styler --------------------------
	$('input, checkbox').styler();
	$('input, radio').styler();
	$('input, select').styler();
	$('#switch').styler('destroy');
	$('#chat-file').styler('destroy');
	$('.form-input--number').styler('destroy');

	// В чате при активном предложении делаю opacity: 1;
	// $('.status-accept').parent().css('opacity', '1');

	// -------------------- Tabs (whywkee) -------------------------
	$(function () {
		var tab = $('#whytabs .whytabs-items > div');
		tab.hide().filter(':first').show();
		// Клики по вкладкам.
		$('#whytabs .whytabs-nav a').click(function () {
			tab.hide();
			tab.filter(this.hash).show();
			$('#whytabs .whytabs-nav a').removeClass('active');
			$(this).addClass('active');
			return false;
		}).filter(':first').click();

		// Клики по якорным ссылкам.
		$('.whytabs-target').click(function () {
			$('#whytabs .whytabs-nav a[href=' + $(this).attr('href') + ']').click();
		});
		// Отрытие вкладки из хеша URL
		if (window.location.hash) {
			$('#whytabs-nav a[href=' + window.location.hash + ']').click();
			window.scrollTo(0, $("#".window.location.hash).offset().top);
		}
	});

	//--------------- fancybox -----------
	$('[data-fancybox-popup]').fancybox({
		closeExisting: true,
		smallBtn: false,
		toolbar: false,
		autoFocus: false,
		hash: false,
		touch: false
	});


	// FANCYBOX CERTIFICATE
	// ====================

	$('[data-fancybox-certificate]').fancybox({
		transitionEffect: 'fade',
		animationEffect: false,
		clickContent: false,
		touch: true,
		loop: true,
		selector: '.cert-item',
		backFocus: false,
		lang: 'ru',
		hideScrollbar: false,
		i18n: {
			ru: {
				CLOSE: 'Закрыть',
				ZOOM: 'Увеличить',
				FULL_SCREEN: 'На весь экран',
			}
		},
		buttons: [
			"zoom",
			"fullScreen",
			"close"
		]
	});

	$('[data-fancybox-gallery]').fancybox({
		transitionEffect: 'fade',
		animationEffect: false,
		clickContent: false,
		touch: true,
		loop: true,
		selector: '.gal-img',
		backFocus: false,
		lang: 'ru',
		hideScrollbar: false,
		i18n: {
			ru: {
				CLOSE: 'Закрыть',
				NEXT: 'Впёред',
				PREV: 'Назад',
				FULL_SCREEN: 'На весь экран',
			}
		},
		buttons: [
			"fullScreen",
			"close"
		]
	});


	// -------------------- svg--------------------------
	function svg() {
		$('img[src$=".svg"]').each(function () {
			var $img = $(this);
			var imgURL = $img.attr('src');
			var attributes = $img.prop('attributes');
			if ($img.hasClass('svg')) {
				$.get(imgURL, function (data) {
					var $svg = jQuery(data).find('svg');
					$svg = $svg.removeAttr('xmlns:a');
					$.each(attributes, function () {
						$svg.attr(this.name, this.value);
					});
					$img.removeClass('svg').replaceWith($svg);
				}, 'xml');
			}
		});
	}
	svg();	

	// ----------------- carousel ----------------------

	$('.cwk, .her').owlCarousel({
		loop: true,
		margin: 10,
		nav: false,
		navText: ['', ''],
		dots: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayTime: 5000,
		items: 1,
	})

	$('.hcat').owlCarousel({
		loop: true,
		margin: 8,
		nav: true,
		navText: ['', ''],
		dots: false,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayTime: 5000,
		items: 2,
		responsive: {
			0: {
				items: 2,
			},
			480: {
				items: 2,
			},
			800: {
				items: 3,
			},
			1024: {
				items: 3,
			},
			1200: {
				items: 4,
				margin: 24,
			},
		}
	});

	$('.tpf').owlCarousel({
		loop: false,
		margin: 8,
		nav: true,
		navText: ['', ''],
		dots: false,
		autoplay: false,
		// smartSpeed: 1000,
		// autoplayTimeout: 5000,
		scrollbarType: "progress",
		responsive: {
			0: {
				items: 1,
				loop: false,
			},
			370: {
				items: 2,
				loop: false,
			},
			576: {
				items: 3,
				loop: true,
				autoplay: true,
				autoplayTimeout: 5000,
			},
			850: {
				items: 4,
				loop: true,
			},
			1025: {
				items: 3,
				margin: 16,
				loop: true,
			},
			1200: {
				items: 4,
				loop: true,
			},
			1500: {
				items: 5,
				loop: true,
			},
		}
	})

	// $('.gt').owlCarousel({
	// 	loop: true,
	// 	nav: false,
	// 	navText: ['', ''],
	// 	dots: true,
	// 	autoplay: true,
	// 	autoplayTimeout: 3000,
	// 	margin: 20,
	// 	items: 1,
	// });

	// $('.mng').owlCarousel({
	// 	loop: true,
	// 	nav: true,
	// 	navText: ['', ''],
	// 	dots: false,
	// 	autoplay: false,
	// 	autoplayTimeout: 3000,
	// 	margin: 20,
	// 	responsiveClass: true,
	// 	responsive: {
	// 		0: {
	// 			items: 1
	// 		},
	// 		480: {
	// 			items: 2,
	// 		},
	// 		991: {
	// 			items: 2,
	// 		},
	// 		1220: {
	// 			items: 4,
	// 		}
	// 	}
	// });

	// $('.ctg').owlCarousel({
	// 	loop: true,
	// 	nav: true,
	// 	navText: ['', ''],
	// 	dots: false,
	// 	autoplay: false,
	// 	autoplayTimeout: 3000,
	// 	margin: 20,
	// 	responsiveClass: true,
	// 	responsive: {
	// 		0: {
	// 			items: 1
	// 		},
	// 		480: {
	// 			items: 2,
	// 		},
	// 		991: {
	// 			items: 2,
	// 		},
	// 		1220: {
	// 			items: 2,
	// 		}
	// 	}
	// });

	// $('.pts').owlCarousel({
	// 	loop: true,
	// 	nav: true,
	// 	navText: ['', ''],
	// 	dots: false,
	// 	autoplay: false,
	// 	autoplayTimeout: 3000,
	// 	margin: 20,
	// 	responsiveClass: true,
	// 	responsive: {
	// 		0: {
	// 			items: 1
	// 		},
	// 		480: {
	// 			items: 2,
	// 		},
	// 		991: {
	// 			items: 2,
	// 		},
	// 		1220: {
	// 			items: 4,
	// 		}
	// 	}
	// });

	// $('.crti').owlCarousel({
	// 	loop: true,
	// 	nav: true,
	// 	navText: ['', ''],
	// 	dots: false,
	// 	autoplay: false,
	// 	autoplayTimeout: 3000,
	// 	margin: 20,
	// 	responsiveClass: true,
	// 	responsive: {
	// 		0: {
	// 			items: 1
	// 		},
	// 		480: {
	// 			items: 2,
	// 		},
	// 		991: {
	// 			items: 2,
	// 		},
	// 		1220: {
	// 			items: 4,
	// 		}
	// 	}
	// });

	

	// -------------------- Scroll -------------------------

	$(".srolls").on("click", "a", function (event) {
		// исключаем стандартную реакцию браузера
		event.preventDefault();

		// получем идентификатор блока из атрибута href
		var id = $(this).attr('href'),

			// находим высоту, на которой расположен блок
			top = $(id).offset().top - 50;

		// анимируем переход к блоку, время: 800 мс
		$('body,html').animate({ scrollTop: top }, 800);
	});


	// -------------------------modal----------------------

	$('.to-state').on('click', function (event) {
		event.preventDefault();
		$('div').removeClass('active');
		$('.state').removeClass('active');
		var state = $(this).attr('data-state');
		$('.state[data-state=' + state + ']').addClass('active');
	});

	$('.close, #modal-close').on('click', function (event) {
		$(this).parents().removeClass('active');
	});

	jQuery(function ($) {
		$(document).mouseup(function (e) { // событие клика по веб-документу
			var div = $(".state-box"); // тут указываем ID элемента
			if (!div.is(e.target) // если клик был не по нашему блоку
				&& div.has(e.target).length === 0) { // и не по его дочерним элементам

				div.parents().removeClass('active'); // скрываем его
				$('body').removeClass('modal-open');
			}
		});
	});

	// ------------- Show More ---------------------
	$("article.style-desc").has("p:nth-child(1)").append('<div class="more"><span>Узнать больше</span><img src="img/icons/next.svg" alt=""></div>');
	$("article.style-desc .more").click(function () {
		var $this = $(this),
			$cards = $(this).closest('.style-desc');
		$cards.toggleClass('open');
		$this.find('span').html($cards.hasClass('open') ? 'Свернуть' : 'Узнать больше')
	});



	
	//end
});



// document.addEventListener("touchstart", function () { }, true);


// -------------------- Dropdown -------------------------
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
// function myFunction() {
// 	document.getElementById("myDropdown").classList.toggle("show");
// }
// Close the dropdown if the user clicks outside of it
// window.onclick = function (e) {
// 	if (!e.target.matches('.cl-dpdbtn')) {
// 		var myDropdown = document.getElementById("myDropdown");
// 		if (myDropdown.classList.contains('show')) {
// 			myDropdown.classList.remove('show');
// 		}
// 	}
// }

// -------------------- Accordion -------------------------
document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('.accordion');

	accordions.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const control = self.querySelector('.accordion__control');
			const content = self.querySelector('.accordion__content');

			self.classList.toggle('open');

			// если открыт аккордеон
			if (self.classList.contains('open')) {
				control.setAttribute('aria-expanded', true);
				content.setAttribute('aria-hidden', false);
				content.style.maxHeight = content.scrollHeight + 'px';
			} else {
				control.setAttribute('aria-expanded', false);
				content.setAttribute('aria-hidden', true);
				content.style.maxHeight = null;
			}
		});
	});
});



// -------------------- Dropdown -------------------------
document.addEventListener('DOMContentLoaded', () => {
  /*
    1. по клику на пункты верхнего меню открывать дропдаун
    2. по клику (повторному) на эти пункты - закрывать дропдаун
    3. по клику в любое место сайта, кроме меню - закрывать дропдаун
  */
  const menuBtns = document.querySelectorAll('.cl-dpdbtn');
  const drops = document.querySelectorAll('.cl-dpd-content');
  menuBtns.forEach(el => {
    el.addEventListener('click', (e) => {
      let currentBtn = e.currentTarget;
			let drop = currentBtn.closest('.cl-dpd').querySelector('.cl-dpd-content');
      menuBtns.forEach(el => {
        if (el !== currentBtn) {
          el.classList.remove('cl-dpdbtn--active');
        }
      });
      drops.forEach(el => {
        if (el !== drop) {
          el.classList.remove('cl-dpd-content--active');
        }
      });
      drop.classList.toggle('cl-dpd-content--active');
      currentBtn.classList.toggle('cl-dpdbtn--active');
    });
  });
  document.addEventListener('click', (e) => {
		if (!e.target.closest('.cl-dpd')) {
      menuBtns.forEach(el => {
				el.classList.remove('cl-dpdbtn--active');
      });
      drops.forEach(el => {
				el.classList.remove('cl-dpd-content--active');
      });
    }
  });
});
// -------------------- Dropdown (alerts) -------------------------
document.addEventListener('DOMContentLoaded', () => {
	const menuBtns = document.querySelectorAll('.alerts-cl-dpdbtn');
	const drops = document.querySelectorAll('.alerts-cl-dpd-content');
  menuBtns.forEach(el => {
    el.addEventListener('click', (e) => {
      let currentBtn = e.currentTarget;
			let drop = currentBtn.closest('.alerts-cl-dpd').querySelector('.alerts-cl-dpd-content');
      menuBtns.forEach(el => {
        if (el !== currentBtn) {
					el.classList.remove('alerts-cl-dpdbtn--active');
        }
      });
      drops.forEach(el => {
        if (el !== drop) {
					el.classList.remove('alerts-cl-dpd-content--active');
        }
      });
			drop.classList.toggle('alerts-cl-dpd-content--active');
			currentBtn.classList.toggle('alerts-cl-dpdbtn--active');
    });
  });
  document.addEventListener('click', (e) => {
		if (!e.target.closest('.alerts-cl-dpd')) {
      menuBtns.forEach(el => {
				el.classList.remove('alerts-cl-dpdbtn--active');
      });
      drops.forEach(el => {
				el.classList.remove('alerts-cl-dpd-content--active');
      });
    }
  });
});