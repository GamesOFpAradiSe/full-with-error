class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
 this.r = false
  }
display()
{
 
if((this.body.speed)<2.5)
{super.display();
}else
{
  if(this.r === false){
World.remove(world,this.body)  
s = s+50
this.r = true
  }
}}
};


