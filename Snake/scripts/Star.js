function Star(x,y)
{
    this.x = x;
    this.y = y;
    this.radius = 10;
    this.maxLifespan = 120;
    this.lifespan = 120;
    this.colorR = 255;
    this.colorG = 255;
    this.colorB = 255;
}

Star.prototype.dim = function()
{
    this.lifespan--;
    this.radius -= 10 / this.maxLifespan;
}
