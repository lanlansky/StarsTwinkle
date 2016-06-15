var starObj = function(){//定义了一个类
	this.x;//类的成员变量
	this.y;
	this.picNo;
	this.timer;
	this.xSpeed;
	this.ySpeed;
}
starObj.prototype.init = function(){//类的成员函数
	this.x = Math.random()*600+100;
	this.y = Math.random()*300+150;

	this.picNo = Math.floor(Math.random()*7);//取整
	this.timer = 0;
	this.xSpeed = Math.random()*3 - 1.5;//速度有正有负
	this.ySpeed = Math.random()*3 - 1.5;
}
starObj.prototype.update = function(){
	this.x +=this.xSpeed*deltaTime*0.004;
	this.y +=this.ySpeed*deltaTime*0.004;
	//如果超过范围，重生
	if(this.x < 100 ||this.x > 700){
		this.init();
		return;
	}
	if(this.y < 150 ||this.y > 450){
		this.init();
		return;
	}
	this.timer += deltaTime;
	if(this.timer > 50){
		this.picNo +=1;
		this.picNo %=7;
		this.timer = 0;
	}
	
	
}
starObj.prototype.draw = function(){
	//drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
	//globalAlpha全局透明度
	//save(),restore()控制某些属性只在标签内的语句起作用
	ctx.save();
	ctx.globalAlpha = life;
	ctx.drawImage(starPic,this.picNo*7,0,7,7,this.x,this.y,7,7);
	ctx.restore();
}
function drawStars(){
	for (var i = 0; i < num; i++) {
		stars[i].update();
		stars[i].draw();
	}
}
function aliveUpdate(){
	//life是0--1之间的数值，因为透明度是0--1
	if(switchy){//显示星星
		life +=0.03 * deltaTime *0.05;
		if(life > 1)
			life = 1;

	}
	else{//隐藏

		life -=0.03 * deltaTime *0.05;
		if(life < 0)
			life = 0;

	}
}