class Apple{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("images/mango.png")
		this.apple = loadImage("images/Apple.png");
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var mangoPos=this.body.position;	
		push();
		translate(mangoPos.x, mangoPos.y);
		imageMode(CENTER);
		image(this.apple, 0,0,this.r*7.5, this.r*5)
		pop();
	
 }
}