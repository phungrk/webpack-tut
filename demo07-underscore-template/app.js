require('./style.css');

var containerTpl = require('./container.html');
var containerHTML = containerTpl({title: "WebPack is Cool"});

document.body.innerHTML = containerHTML;

var img = new Image();
img.src = require('./color.png');

document.body.appendChild(img);