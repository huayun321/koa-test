var koa = require('koa');
var app = koa();

app.use(function *(){
    this.body = 'This koa2, hello world! \n';
    this.body += 'gen ssh key , then set to github, then make a webhooks, \n';
    this.body += 'chmod +x deploy, and fix the rsa what what problem\n';
    this.body += 'chmod +x deploy, and fix the rsa what what problem\n';
    this.body += 'chmod +x deploy, and fix the rsa what what problem\n';
    this.body += 'chmod +x deploy, and fix the rsa what what problem\n';



});

app.listen(3300);