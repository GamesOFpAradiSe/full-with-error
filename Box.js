class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
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
s = s+100
this.r = true
  }
}}
};