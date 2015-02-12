var path = new Path();
path.strokeColor = 'black';
path.add(new Point(30, 75));
path.add(new Point(30, 25));
path.add(new Point(80, 25));
path.add(new Point(80, 75));
path.closed = true;
path.fullySelected = true;
var copy = path.clone();
copy.fullySelected = true;
copy.position.x += 100;

copy.smooth();

var myCircle = new Path.Circle(new Point(100, 200), 50);
myCircle.fillColor = 'purple';

var rectangle = new Rectangle(new Point(400, 700), new Point(800,500));
var myRectangle = new Path.Rectangle(rectangle);
myRectangle.fillColor = '#e9e9ff';
myRectangle.selected = true;

var rectangle = new Rectangle(new Point(400, 300), new Point(800,400));
var cornerSize = new Size(20, 20);
var roundRectangle = new Path.RoundRectangle(rectangle, cornerSize);
roundRectangle.fillColor = 'red'

var triangle = new Path.RegularPolygon(new Point(300, 125), 3, 70);
triangle.fillColor = '#e9e9ff';
triangle.selected = true;

var decahedron = new Path.RegularPolygon(new Point(500, 70), 10, 50);
decahedron.fillColor = '#e9e9ff';
decahedron.selected = true;

