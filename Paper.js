class Paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.4,
			friction:0.2,
			density:0.4

			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

		this.image = loadImage("paper.png");
		
	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
		  imageMode(CENTER);
		  image(this.image, 0, 0,this.width,this.height);
			strokeWeight(3);
			fill("blue")
			ellipse(0,0,this.r, this.r);
			pop()
		
	
		 
		 
		  
		
			
	}

}