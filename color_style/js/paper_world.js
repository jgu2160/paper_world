var myPath = new Path({
    segments: [[40,115], [80, 180], [200, 20]],
})
myPath.strokeColor = '#ff0000';
myPath.strokeWidth = 10;
myPath.strokeCap = 'round';
myPath.strokeJoin = 'round';


var firstPath = new Path.Circle({
    center: [50,300],
    radius: 35
});

firstPath.strokeColor = '#ff0000';
firstPath.fillColor = 'blue';


var secondPath = new Path.Circle({
    center: [120,300],
    radius: 35
});

secondPath.style = firstPath.style;

var myStyle = {
    strokeColor: '#00ffff',
    fillColor: '#000000',
    strokeWidth: 50
};


var thirdPath = new Path.Circle({
    center: [300,300],
    radius: 100
});

thirdPath.style = myStyle;

project.currentStyle = {
    strokeColor: '#000000',
    fillColor: '#ff0000',
    strokeWidth: 3
};

var fifthPath = new Path.Circle({
    center: [500,300],
    radius: 50
});

project.currentStyle.fillColor = 'green';
project.currentStyle.strokeWidth = 10;

var fourthPath = new Path.Circle({
    center: [650,300],
    radius: 50
});
