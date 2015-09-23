var koa = require('koa');
var app = koa();

app.use(function *(){
    this.body = 'This koa2, hello world! And again! And again!!! And again!!!!';
    this.body += 'pm2 auto pull!'

});

app.listen(3300);