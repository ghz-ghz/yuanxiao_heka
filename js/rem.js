let width = window.innerWidth;     //可视窗口宽度
if(width>640){
	width = 640;
}
let fontSize = width/750*100;     

document.querySelector("html").style.fontSize = fontSize+"px";