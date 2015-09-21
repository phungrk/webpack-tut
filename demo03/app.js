window.setTimeout(function() {
    require.ensure([],function(sub) {
        var sub = require('./sub');
        sub('App');
    });
},3000);