var can;
var ctx;
var w;
var h;

var girlPic = new Image();
var starPic = new Image();

var num=60;//星星的数量
var stars = [];//定义一个数组

var lastTime;
var deltaTime;
var switchy = false;
var life = 0;
function init(){
	//console.log("a");
	can = document.getElementById("canvas");//画笔
	ctx = can.getContext("2d");//画布

	w = can.width;
	h = can.height;

	document.addEventListener("mousemove",mousemove,false);

	girlPic.src = "images/girl.jpg";
	starPic.src = "images/star.png";

	for (var i = 0; i < num; i++) {
		var obj = new starObj();
		stars.push(obj);
		stars[i].init();
	}

	//console.log(w);
	//
	lastTime = Date.now();
	gameLoop();

}
document.body.onload = init;

function gameLoop(){
	requestAnimFrame(gameLoop);


	var now = Date.now();
	deltaTime = now - lastTime;

	lastTime = now;
	drawBackground();
	drawGirl();

	drawStars();

	aliveUpdate();
}
function drawBackground(){
	ctx.fillStyle = "#393550";
	ctx.fillRect(0,0,w,h);
}
function drawGirl(){
	//drawImage(img,x,y,width,heigt)绘制图片,开始位置为（x,y）,绘制出的大小为width*height
	//X轴正方向向右，Y轴正方向向下，（0，0）在canvas的左上角
	ctx.drawImage(girlPic,100,150,600,300);
}

function mousemove(e){//监控鼠标的移动事件
	if(e.offsetX||e.layerX){
		var px = e.offsetX == undefined ? e.layerX:e.offsetX;
		var py = e.offsetY == undefined ? e.layerY:e.offsetY;
		//console.log(px);
		//鼠标在图片范围内  switchy=true
		if(px > 100&&px<700&&py>150&&py<450)
			switchy=true;
		else
			switchy=false;
		//console.log(switchy);
	}
}