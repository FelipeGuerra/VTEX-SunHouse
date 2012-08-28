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
	$('<div id="banner_destques"><img width="995" height="47" alt="banner destaques" src="/arquivos/banner_destaques.png"></div>').insertBefore('.content, .minha-conta .mainContentWrapper');
	$('.minha-conta .nav').insertAfter('.content .tabela-pedidos h3');
	$('.content.content-meuspedidos').prev('#banner_destques').remove();
	$('.manutencao-conta .mainContentWrapper #banner_destques').remove();
	$('.minha-conta.meus-pedidos-detalhes #banner_destques, .minha-conta.minha-conta-meus-pedidos.meus-pedidos.rastrear-pedido #banner_destques').eq(1).remove();
	$('.mainContentWrapper #banner_destques').remove();
	
	
	/*Detalhes do Pedido*/
	$('.meus-pedidos-detalhes .mainContentWrapper').append('<div id="tabela_login"><div id="tabela_login_conteudo"><ul class="abas"><li class="meu-perfil"><a href="/Vitrine/MinhaConta/MinhaConta.aspx" title="Meu Perfil">Meu Perfil</a></li><li class="meus-pedidos ativo"><a title="Meus Pedidos">Meus Pedidos</a></li><li class="listas"><a href="/lista/" title="Meus Pedidos">Listas</a></li></ul><div id="sideBar"><div class="sideBarItem linkList"><h2>Meu perfil</h2><ul><li><a title="Meu Perfil" href="/Vitrine/MinhaConta/MinhaConta.aspx">Meu Perfil</a></li><li><a title="Editar dados" href="/Site/cadastroCliente.aspx">Editar dados</a></li><li><a title="Alterar senha" href="/site/AlterarSenha.aspx">Alterar senha</a></li></ul></div><div class="sideBarItem linkList"><h2>Meus Endereços</h2><ul><li><a title="Catálogo de Endereços" href="/Site/Endereco.aspx">Catálogo de Endereços</a></li></ul></div><div class="sideBarItem linkList"><h2>Listas</h2><ul class="menu"><li><a href="/lista/">Buscar uma Lista</a></li><li><a href="/lista/criar/">Criar nova Lista</a></li><li><a href="/lista/gerenciar/">Gerenciar minhas Listas</a></li></ul></div></div><div id="content"></div></div></div>');
	
	$('.meus-pedidos-detalhes .content').appendTo('#content');
	$('.meus-pedidos-detalhes .dados-entrega').appendTo('.meus-pedidos-detalhes .informacoes-entrega');
	$('.meus-pedidos-detalhes .box-dados-pedido .descricao-entrega').appendTo('.meus-pedidos-detalhes .informacoes-entrega');
	$('.meus-pedidos-detalhes #ctl00_Conteudo_controleDadosPagamento_fieldsetDadosPagamento').appendTo('.meus-pedidos-detalhes .informacoes-entrega');
	$('.meus-pedidos-detalhes .box-dados-pedido .descricao-compra').appendTo('.meus-pedidos-detalhes .content');
	/****/
	
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