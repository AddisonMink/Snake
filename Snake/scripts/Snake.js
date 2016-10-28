function Segment(x, y, next)
{
    this.x = x;
    this.y = y;
    this.radius = 10;
    this.speed = 5;
    this.color = "lightgray";
    this.nextSegment = next;
    this.pointBehind = null;
}

Segment.prototype.moveHead = function(x, y)
{
    var distanceVector = new Vector(x - this.x, y - this.y);
    if (distanceVector.getMagnitude() < this.radius)
        return;

    this.getPointBehind(x, y);
    var moveVector = (new Vector(x - this.x, y - this.y)).normalize().multiply(new Vector(this.speed, this.speed));
    this.x += moveVector.x;
    this.y += moveVector.y;
};

Segment.prototype.moveTail = function()
{
    if (this.nextSegment.pointBehind === null)
        return;

    var distanceVector = new Vector(this.nextSegment.x - this.x, this.nextSegment.y - this.y);
    //var distanceVector = new Vector(this.nextSegment.pointBehind.x - this.x, this.nextSegment.pointBehind.y - this.y);
    if (distanceVector.getMagnitude() < this.radius*2)
        return;

    this.getPointBehind(this.nextSegment.x, this.nextSegment.y);

    var moveVector = (new Vector(this.nextSegment.x - this.x, this.nextSegment.y - this.y)).normalize().multiply(new Vector(this.speed, this.speed));
    this.x += moveVector.x;
    this.y += moveVector.y;
}

Segment.prototype.getPointBehind = function(x, y)
{
    var pos = new Vector(this.x, this.y);
    var forward = new Vector(x, y);
    this.pointBehind = forward.subtract(pos).multiply(new Vector(-1, -1)).normalize().multiply(new Vector(this.radius * 2, this.radius * 2)).add(pos);
}

Segment.prototype.fall = function()
{
    this.speed += 0.5;
    this.y += this.speed;
}

function Snake()
{
    this.segments = [];
    this.fallingSegments = [];
    this.fallDelay = 0;
    this.alive = true;
}

Snake.prototype.addSegment = function(x, y)
{
    var newSegment = new Segment(x, y, this.segments[this.segments.length - 1]);
    this.segments.push(newSegment);
}

Snake.prototype.move = function(mouseX, mouseY)
{
    this.segments[0].moveHead(mouseX, mouseY);
    for (var i = 1; i < this.segments.length; i++)
        this.segments[i].moveTail();
}

Snake.prototype.checkSelfCollision = function()
{
    var headPos = new Vector(this.segments[0].x, this.segments[0].y);
    for(var i = 2; i <  this.segments.length; i++)
    {
        var distance = headPos.getDistanceFrom(new Vector(this.segments[i].x, this.segments[i].y));
        if(distance < this.segments[0].radius)
        {
            this.alive = false;
            return;
        }
    }
}

Snake.prototype.fall = function()
{
    if (this.segments.length > 0)
        if (this.fallDelay === 0)
        {
            this.fallingSegments.push(this.segments.shift());
            this.fallDelay = 5;
        }
        else
            this.fallDelay--;

    this.fallingSegments.forEach((segment) =>
    {
        segment.color = "white";
        segment.fall();
    });
}