var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var maxRadius = 60;
var minRadius = 20;
var mouse = {
    x: undefined,
    y: undefined
};

window.addEventListener('mousemove', function(e) {
    mouse.x = e.x;
    mouse.y = e.y;
});

var circleArray = [];

for (var i = 0; i < 200; i++) {
    var radius = (Math.random * 30) + 3;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 5;
    var dy = (Math.random() - 0.5) * 5;
    var color = randomColor();
    circleArray.push(new Circle (x, y, dx, dy, radius, color));
    // console.log(circleArray);
}

function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, innerWidth, innerHeight);
    
    for (var i = 0; i < circleArray; i++) {
        circleArray[i].update();
    }
}

animate();

function randomColor() {
    var color = 'rgba(' + Math.round(Math.random * 225) + ',' + Math.round(Math.random * 225) + ',' + Math.round(Math.random * 225) + ',' + Math.random * 0.2 + ')';
    return color;
}