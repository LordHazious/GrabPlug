// www.kodusk.xyz //
var AutoUp;
var timeoutId = 0;

// Ping Server
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.kodusk.xyz/plugGrab/ping.php?status=loaded', true);
xhr.onload = function () {
  console.log(xhr.responseText);
};
xhr.send(null);

// add button //
$('<style type="text/css">.icon-download{background-position: -175px -280px; -webkit-filter: grayscale(100%); filter: grayscale(100%);} #playback-controls .button.download { background: rgba(0,255,0,.7);}</style>').appendTo($('head'));
$('#playback-controls').append('<div class="button download" id="download"><div class="box"><i class="icon icon-download"></i>Download</div></div>');
$('#chat-header').append('<div id="auto-up" class="chat-header-button"><i class="icon icon-meh"></i></div>');

// auto Up function //
function autoupON() {
	$('#auto-up').replaceWith('<div id="auto-up" class="chat-header-button"><i class="icon icon-woot"></i></div>');
	$('#woot').trigger('click');
	AutoUp = setInterval(function() { $('#woot').trigger('click'); }, 10000);
	$('#auto-up').one('click', autoupOFF);
}
function autoupOFF() {
	$('#auto-up').replaceWith('<div id="auto-up" class="chat-header-button"><i class="icon icon-meh"></i></div>');
	$('#meh').trigger('click');
	clearInterval(AutoUp);
	$('#auto-up').one('click', autoupON);
}
$('#auto-up').one('click', autoupON);
$('#meh').one('click', autoupOFF);

$('#grab').mousedown(function() {
    timeoutId = setTimeout(GrabMP3, 1000);
}).bind('mouseup mouseleave', function() {
    clearTimeout(timeoutId);
});

function GrabMP3() {
	window.open('https://y2mate.com/youtube-to-mp3/' + API.getMedia().cid, '_blank');
}
$('#download').one('click', GrabMP3);
