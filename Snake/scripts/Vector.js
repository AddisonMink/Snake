function Vector(x, y)
{
    this.x = x;
    this.y = y;
}

Vector.prototype.add = function(vector)
{
    var x = this.x + vector.x;
    var y = this.y + vector.y;
    return new Vector(x, y);
}

Vector.prototype.subtract = function(vector)
{
    var x = this.x - vector.x;
    var y = this.y - vector.y;
    return new Vector(x, y);
}

Vector.prototype.multiply = function(vector)
{
    var x = this.x * vector.x;
    var y = this.y * vector.y;
    return new Vector(x, y);
}

Vector.prototype.divide = function(vector)
{
    var x = this.x / vector.x;
    var y = this.y / vector.y;
    return new Vector(x, y);
}

Vector.prototype.normalize = function()
{
    var magnitude = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    var x = this.x / magnitude;
    var y = this.y / magnitude;
    return new Vector(x, y);
}

Vector.prototype.getMagnitude = function()
{
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
}

Vector.prototype.getDistanceFrom = function(vector)
{
    return Math.sqrt(Math.pow(this.x - vector.x, 2) + Math.pow(this.y - vector.y, 2));
}
