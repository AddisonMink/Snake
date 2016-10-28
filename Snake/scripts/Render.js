function Renderer(context, snake)
{
    this.context = context;
    this.snake = snake;
}

Renderer.prototype.renderBackground = function()
{
    context.fillStyle = "#e3dac9";
    context.fillRect(0, 340, 800, 60);

    //context.fillStyle = "white";
    context.fillStyle = "#F5F3CE";
    context.beginPath();
    context.moveTo(120, 120);
    context.arc(120, 120, 100, 0, 2 * Math.PI, false);
    context.fill();

    context.fillStyle = "darkgray";
    context.moveTo(100, 350);
    context.beginPath();
    context.lineTo(100, 350);
    context.lineTo(100, 345);
    context.lineTo(130, 330);
    context.lineTo(140, 350);
    context.closePath();
    context.fill();

    context.beginPath();
    context.moveTo(250, 370);
    context.lineTo(250, 370);
    context.lineTo(270, 350);
    context.lineTo(270, 290);
    context.lineTo(280, 300);
    context.lineTo(290, 370);
    context.closePath();
    context.fill();
}

Renderer.prototype.renderStar = function()
{
    if (star === null)
        return;
    context.fillStyle = "white";
    context.beginPath();
    context.arc(star.x, star.y, star.radius, 0, 2 * Math.PI, false);
    context.fill();
}

Renderer.prototype.renderSegments = function()
{
    this.snake.segments.forEach((segment) =>
    {
        context.fillStyle = segment.color;
        context.beginPath();
        context.moveTo(segment.x, segment.y);
        context.arc(segment.x, segment.y, segment.radius, 0, 2 * Math.PI, false);
        context.fill();
    });

    this.snake.fallingSegments.forEach((segment) =>
    {
        context.fillStyle = segment.color;
        context.beginPath();
        context.moveTo(segment.x, segment.y);
        context.arc(segment.x, segment.y, segment.radius, 0, 2 * Math.PI, false);
        context.fill();
    });
}

Renderer.prototype.renderForeground = function()
{
    context.fillStyle = "darkgray";
    context.moveTo(500, 400);
    context.beginPath();
    context.lineTo(500, 400);
    context.lineTo(550, 350);
    context.lineTo(700, 300);
    context.lineTo(800, 320);
    context.lineTo(800, 400);
    context.closePath();
    context.fill();

    context.beginPath();
    context.moveTo(300, 400);
    context.lineTo(300, 400);
    context.lineTo(310, 390);
    context.lineTo(380, 370);
    context.lineTo(390, 400);
    context.closePath();
    context.fill();

    context.beginPath();
    context.moveTo(0, 400);
    context.lineTo(0, 400);
    context.lineTo(0, 320);
    context.lineTo(20, 320);
    context.lineTo(40, 360);
    context.lineTo(100, 400);
    context.closePath();
    context.fill();
}

Renderer.prototype.renderGameOver = function()
{
    if (snake.alive)
        return;
    context.fillStyle = "white";
    context.font = "32px Trebuchet MS";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText("Game Over", 400, 200);
}