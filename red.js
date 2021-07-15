class Red {
    constructor(x, y, radius) {
        var options={
            restitution:0.8,
            density:1.5,
            friction:1
        }
        this.body=Matter.Bodies.circle(x, y, radius, options);
        this.x=x;
        this.y=y;
        this.radius=radius;
        Matter.World.add(world, this.body);
    }
    display() {
        this.body.position.x=mouseX;
        this.body.position.y=mouseY;
        push();
        fill(255,0, 0,);
        strokeWeight(5);
        stroke(255, 25, 25);
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius)
        pop();
    }
}