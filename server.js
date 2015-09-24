var koa = require('koa');
var app = koa();

app.use(function *(){
    this.body = 'This koa2, hello world! And again! And again!!! And again!!!!\n';
    this.body += 'pm2 auto pull! pull again!!!\n';
    this.body += 'chmod +x deploy, and fix the rsa what what problem\n';
    this.body += 'chmod +x deploy, and fix the rsa what what problem\n';
    this.body += 'chmod +x deploy, and fix the rsa what what problem\n';


});

app.listen(3300);