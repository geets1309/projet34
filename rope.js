class  Rope{

constructor(body1,body2,offsetX)
    {
        var options=
        {
            bodyA:body1,
    bodyB:body2,
    pointB:{x:offsetX,y:0}
    
        }
      this.offsetX=offsetX;
      
    this.rope= Constraint.create(options);
    console.log("success")
    World.add(world,this.rope);
    }
    
    display()
    {
        
        stroke("white");
        
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
        
    
     line (pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y);
    }
    
    }