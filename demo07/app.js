require('./style.css');

var container = require('./container.html');
return container({title: "world"});

document.body.innerHTML = container;

var img = new Image();
img.src = require('./color.png');

document.body.appendChild(img);