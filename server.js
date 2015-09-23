var koa = require('koa');
var app = koa();

app.use(function *(){
    this.body = 'This koa, hello world!';

});

app.listen(3000);