// www.kodusk.xyz //
var AutoUp;
var timeoutId = 0;

// Ping Server
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.codycodes.com.au/plugGrab/ping.php?status=loaded', true);
xhr.onload = function () {
  console.log(xhr.responseText);
};
xhr.send(null);

// add button //
$('').appendTo($('head'));
// $('.community__top-right').append('<a href="/subscribe" target="_blank" class="btn btn-secondary btn-subscribe"><i class="fa fa-download" aria-hidden="true"></i>Download</a>');
$('#chat-header').append('<div id="auto-up" class="chat-header-button"><i class="icon icon-meh"></i></div>');

// auto Up function //
function autoupON() {
	$('#auto-up').replaceWith('<div id="auto-up" class="chat-header-button"><i class="icon icon-woot"></i></div>');
	$('.btn-like').trigger('click');
	AutoUp = setInterval(function() { $('#woot').trigger('click'); }, 10000);
	$('#auto-up').one('click', autoupOFF);
}
function autoupOFF() {
	$('#auto-up').replaceWith('<div id="auto-up" class="chat-header-button"><i class="icon icon-meh"></i></div>');
	$('.btn-meh').trigger('click');
	clearInterval(AutoUp);
	$('#auto-up').one('click', autoupON);
}
$('#auto-up').one('click', autoupON);
$('.btn-meh').one('click', autoupOFF);

$('.btn-playlist').mousedown(function() {
    timeoutId = setTimeout(GrabMP3, 1000);
}).bind('mouseup mouseleave', function() {
    clearTimeout(timeoutId);
});

function GrabMP3() {
	window.open('https://y2mate.com/youtube-to-mp3/' + API.getMedia().cid, '_blank');
}
