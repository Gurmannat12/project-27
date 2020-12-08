class Bob {
    constructor(x,y,r){
    var options={
        isStatic:false,
        restitution:1,
        friction:0,
        density:7.8
   
        }
   
    this.x = x;
    this.y = y;
    this.r = r;
    this.body = Bodies.circle(x,y,25,options);
    World.add(world,this.body);
    }
   
   
   
    display()
    {
   
        push()
        ellipseMode(CENTER)
        strokeWeight(3);
        fill(255,0,255)
        ellipse(this.body.position.x,this.body.position.y,50,50);
        pop()
   
    }
   } 