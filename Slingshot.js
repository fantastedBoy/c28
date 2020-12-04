class Slingshot{

    constructor (bodyX,pointY){
    var options = {
    bodyA:bodyX,
    pointB:pointY,
    stiffness:0.05,
    length:10
}
   this.chain=Constraint.create(options)
   this.pointB=pointY
   World.add(world,this.chain)
    }
   fly(){
       this.chain.bodyA=null
   }
   
    display(){
        if(this.chain.bodyA){
        var pointA=this.chain.bodyA.position
        var pointB=this.pointB
       line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
   } 



}