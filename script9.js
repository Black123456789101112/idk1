let popUp = document.getElementsByClassName('popUp');
let close = document.getElementsByClassName('close');
let	popUp1 = document.getElementsByClassName('popUp1');
let close1 = document.getElementsByClassName('close1');
setTimeout(function(){
	popUp1[0].style.display = "block";
}, 5000);
close1[0].addEventListener('click', function(){
	popUp1[0].style.display = "none";
});

setInterval(function(){
	popUp[0].style.display = "block";
}, 30000);
close[0].addEventListener('click', function(){
	popUp[0].style.display = "none";
});

let topimg = document.getElementsByClassName('img');
let e = 1;
let uptext = document.getElementsByClassName('uptext');
let menuItself = document.getElementsByClassName('menu-itself');

topimg[0].addEventListener('click', function(){
	if(e == 1){
		topimg[0].style.transform = "rotate(90deg)";
		uptext[0].style.opacity = "1";
		menuItself[0].style.display = "block";
		e = 2;
	}
	else{
		topimg[0].style.transform = "rotate(0)";
		uptext[0].style.opacity = "0";
		menuItself[0].style.display = "none";
		e = 1;
	}
});

let minutes = 2;
let seconds = 59;
let ended = document.getElementsByClassName('ended');
let b1 = document.getElementsByClassName('b1')
let a = 1;
let c = document.getElementsByClassName('main-timer-seconds');
let d = document.getElementsByClassName('main-timer-minutes');
let b11 = document.getElementsByClassName('b11');
c[0].innerHTML = "SECONDS LEFT: " + seconds;
d[0].innerHTML = "MINUTES LEFT: " + minutes;
let timer = setInterval(function(){
	seconds -= 1;
	c[0].innerHTML = "SECONDS LEFT: " + seconds;
	if(seconds <= 0){
		seconds = 59;
		c[0].innerHTML = "SECONDS LEFT: " + seconds;
		minutes -= 1;
		d[0].innerHTML = "MINUTES LEFT: " + minutes;
	}
	if(minutes == -1 && seconds == 59){
		clearInterval(timer);
		minutes = 0;
		seconds = 0;
		c[0].innerHTML = "SECONDS LEFT: " + seconds;
		d[0].innerHTML = "MINUTES LEFT: " + minutes;
		ended[0].style.display = "block";
	}
}, 1000);
b1[0].addEventListener('click', function(){
	b1[0].innerHTML = "THANKS FOR THE PURCHASE!";
	c[0].style.display = "none";
	d[0].style.display = "none";
	b11[0].style.marginTop = "185px";
});
let slider1 = document.getElementsByClassName('Slider1');
let slider2 = document.getElementsByClassName('Slider2');
let dot = document.getElementsByClassName('dot')

dot[1].addEventListener("click", function(){
	slider1[0].style.left = "-1350px"
	slider2[0].style.left = "0"
	dot[1].style.backgroundColor = "#195468"
	dot[0].style.backgroundColor = "black"
});
dot[0].addEventListener("click",function(){
	slider1[0].style.left = "0"
	slider2[0].style.left = "1350px"
	dot[1].style.backgroundColor = "black"
	dot[0].style.backgroundColor = "#195468"
});