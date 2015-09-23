var koa = require('koa');
var app = koa();

app.use(function *(){
    this.body = 'This koa2, hello world! And again! And again!!! And again!!!!';

});

app.listen(3000);