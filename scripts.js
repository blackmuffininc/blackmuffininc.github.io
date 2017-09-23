$(function(){
	fontColor = 240;
	diff = 1;
	setInterval(update, 10);
});

function update() {
	if (fontColor >= 400 || fontColor < 125) {
		diff = -diff;
	}
	fontColor += diff;
	colorString = 'rgb(' + (fontColor < 240 ? fontColor : 240) + ',0,0)';
	$('header span, section span').css({color: colorString});
}