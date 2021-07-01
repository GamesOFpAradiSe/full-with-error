class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);

    this.r = false
  }
display()
{
 
if((this.body.speed)<6)
{super.display();
}else
{
  if(this.r === false){
World.remove(world,this.body)  
s = s+70
this.r = true
  }
}}
};