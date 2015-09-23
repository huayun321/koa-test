var koa = require('koa');
var app = koa();

app.use(function *(){
    this.body = 'hello world2';

});

app.listen(3000);