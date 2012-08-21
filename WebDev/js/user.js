$(document).ready(function() {

	$("body.checkout .searchWrapper:last, body.minha-conta .searchWrapper:last, body.fale-conosco .searchWrapper:last, body.sku .searchWrapper:last").addClass('bottomSearchWrapper');

	if ($("body").attr("class") == "carrinho")
	{
		$("iframe").attr( "scrolling", "no");
		$("iframe").attr( "style", "overflow : hidden; width : 640px; height : 400px;");
		$("iframe").parent().attr( "style", "overflow : visible; width : 640px; height : 400px;");
		
		$("a.thickbox.tbstarted").click ( function ()
		{
			$("iframe").attr( "scrolling", "no");
			$("iframe").attr( "style", "overflow : hidden; width : 640px; height : 400px;");
			$("iframe").parent().attr( "style", "overflow : visible; width : 640px; height : 400px;");
		});
		
		if ( $.browser.safari )
		{
			$("iframe").parent().css({ "width" : "600px", "height" : "400px", "overflow" : "hidden" });
			$("iframe").css({ "width" : "600px", "height" : "450px", "overflow" : "hidden" });
		}
	};
	
	if ($("body").attr("class") == "checkout")
	{
		$("iframe").attr( "scrolling", "no");
		$("iframe").attr( "style", "overflow : hidden; width : 640px; height : 400px;");
		$("iframe").parent().attr( "style", "overflow : visible; width : 640px; height : 400px;");
		
		$("a.thickbox.tbstarted").click ( function ()
		{
			$("iframe").attr( "scrolling", "no");
			$("iframe").attr( "style", "overflow : hidden; width : 640px; height : 400px;");
			$("iframe").parent().attr( "style", "overflow : visible; width : 640px; height : 400px;");
		});
		
		if ( $.browser.safari )
		{
			$("iframe").parent().css({ "width" : "600px", "height" : "400px", "overflow" : "hidden" });
			$("iframe").css({ "width" : "600px", "height" : "450px", "overflow" : "hidden" });
		}
	};
	
	$('#wrapAppendBody').prependTo('body');
	$('.footer').appendTo('body');
	$('.searchWrapper:first fieldset.search').appendTo('#header #search');
	$('.menuwrap').appendTo('#wrapHeader #menu');
	$('.bottomSearchWrapper .searchWrapper .search').appendTo('#footerSearch');
	$('<div id="banner_destques"><img width="995" height="47" alt="banner destaques" src="/arquivos/banner_destaques.png"></div>').insertBefore('.content');
	$('.minha-conta .nav').insertAfter('.content .tabela-pedidos h3');
	
	if ($('.steps').length != 0 ){
		$('#wrapFooterSearch').css('display', 'none')
	};
	
});

$(document).ajaxStop(function(){

	$('.welcome').prependTo('#topBar > div');
	$('#LoginWrapper').insertAfter('#topBar .welcome');
	$('.welcome').eq(1).remove();
	$('.loginmsg').eq(1).remove();
	$('#bandeiras').prependTo('tfoot .total .economizou');
	/*$('<div id="alertas" />').insertAfter('.carrinhoTable');*/
	$('.alerta').insertAfter('.carrinhoTable');

});