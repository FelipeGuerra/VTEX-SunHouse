$(document).ready(function() {
	
	$('.sub').last().remove()
	
	
	jQuery('.wrap_vitrine_home.carousel .collectionWrap .vitrine ul').jcarousel({
		auto: 		0,
		scroll:		1,  
		animation:	"slow", 
		timeout: 	5000,
		wrap: 		'circular'
	});

	$('#banner1').before('<ul id="nav">').cycle({ 
		fx:     'fade', 
		speed:  'fast', 
		timeout: 0,
		prev: '#banner_prev',
        next: '#banner_next',
		pager:  '#nav', 
		
		
		
		// callback fn that creates a thumbnail to use as pager anchor 
		pagerAnchorBuilder: function(idx, slide) { 
			var slideSRC = $('img',slide).attr('src');
			return '<li><a href="#"><img src="' + slideSRC + '" width="50" height="50" /></a></li>'; 
		} 
	});
	
	/** Quebra do Menu **/
	
	//quebra de menu
			
	$.fn.wrapMenu = function(options){
		var defaults ={
			max: 7
		} 
		var opts = $.extend(defaults, options);
		var GROUP_COUNT = opts.max;
		this.find('ul').each(function(){
			var liElements = $(this).children('li');
			var count = liElements.length;
			counter = 0;
			var html = '';
			
			for (var i = 0; i < count; i += GROUP_COUNT) {
				html += '<li><ul>';

				liElements.slice(i, i + GROUP_COUNT).each( function() {
					html += '<li>' + $(this).html() + '</li>';
				});

				html += '</ul></li>';
			}
			
			$(this).html(html);
			$(this).find('ul').first().addClass('first');
			$(this).find('ul').last().addClass('last');
		});
	}

	$('#menu .menu-departamento').wrapMenu();
	
	/*** Menu das categorias ***/
	if(!($('body').hasClass('promocionais')) && !($('body').hasClass('home'))){
		
		$('#departmentNavigator .menu-departamento h3 span').click(function(){
			if( $(this).parent().next('ul').css('display') == 'none' ) {
			  $(this).addClass('active_span');
			}else {
			  $(this).removeClass('active_span');
			}
			$(this).parent().next('ul').slideToggle();
		});
		
		var linkHref = document.location.href.split('/');
		var linkCategoria = linkHref[3];
		
		if (linkCategoria.indexOf('#') != -1){
			newLink = linkCategoria.split('#');
			linkCategoria = newLink[0];
		}else if (linkCategoria.indexOf('?') != -1){
			newLink = linkCategoria.split('?');
			linkCategoria = newLink[0];
		}	
		
		var itensDepartamento = $('#sideBar #departmentNavigator > .menu-departamento');
		
		
		itensDepartamento.find('.'+linkCategoria).prependTo(itensDepartamento);
		$('#sideBar #departmentNavigator > .menu-departamento ul').first().css('display', 'block');
		$('#sideBar #departmentNavigator > .menu-departamento h3 span').first().addClass('active_span');
	}
	
	/* Tabs Ambientes
	$(function () {
		$('.box').each(function() {
			var content = $(this).find('.content'),
				tab     = $('> ul li', this);
			$('div.tab', content).eq(0).show();
			tab.click(function () {
				tab.removeClass('active');
				$(this).addClass('active');
				$('div.tab', content).hide().eq($(this).index()).show(); 
			});
		});
	});
	*/
});

$(document).ajaxStop(function(){
	
	/** Pager Bottom Center **/
	var pagerBottomWidth = $('.pager.bottom').width()
	$('.pager.bottom').css('margin-left', (pagerBottomWidth/2)*-1);

	
	/*banner menu*/
	$('#banner_dormitorios').appendTo('ul.dormitorios');
	$('#banner_sala_de_estar').appendTo('ul.sala-de-estar');
	$('#banner_cozinha_e_jantar').appendTo('ul.cozinha-e-jantar');
	$('#banner_escritorios').appendTo('ul.escritorios');
	$('#banner_decoracao').appendTo('ul.decoracao');
	$('#banner_jardim_e_lazer').appendTo('ul.jardim-e-lazer');
	$('#banner_moveis_sustentaveis').appendTo('ul.moveis-sustentaveis');
	
});