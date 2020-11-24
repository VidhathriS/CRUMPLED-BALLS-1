class Paper {
    constructor(x,y,radius) {
      var options = {
         
          isStatic: false,
          restitution:0.1,
          friction:1.0,
          density:1.2
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      translate(pos.x,pos.y)
      ellipseMode(CENTER);
      fill("red");
      ellipse(0,0, this.width, this.height);
      pop()
    }
  };