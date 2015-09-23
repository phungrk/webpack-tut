require('./style.css');

var containerTpl = require('./container.jade');
var containerHTML = containerTpl({title: "WebPack is Cool"});

document.body.innerHTML = containerHTML;