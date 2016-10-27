function Renderer(context, snake)
{
    this.context = context;
    this.snake = snake;
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
}