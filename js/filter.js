$(document).ready(function(){

$('#filter > li').click(function(){
	$(this).toggleClass();
});

$('#filter > li').toggle(
		function(){$(this).css('color', '#999');},
		function(){$(this).css('color', '#000');}
);

$('#o-toggle').click(function(){
	$('div.orange').parent().toggle();
});

$('#g-toggle').click(function(){
	$('div.green').parent().toggle();
});

$('#b-toggle').click(function(){
	$('div.blue').parent().toggle();
});

});