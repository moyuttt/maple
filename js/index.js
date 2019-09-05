var btn1 = document.getElementById('btn1');
var btn2 = document,getElementById('btn2');
var btn2 = document,getElementById('btn3');


function makefun(size){
	return function(){
		document.body.style.fontsize = size + 'px';
	}
}

btn1.onclick = makefun(12);
btn1.onclick = makefun(14);
btn1.onclick = makefun(16);

