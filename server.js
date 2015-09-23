var koa = require('koa');
var app = koa();

app.use(function *(){
    this.body = 'hello world3';

});

app.listen(3000);