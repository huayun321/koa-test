var koa = require('koa');
var app = koa();

app.use(function *(){
    this.body = 'This koa2, hello world! \n';
    this.body += 'gen ssh key , then set to github, then make a webhooks, \n';
    this.body += 'fixed secret \n';
    this.body += 'why steel not pull \n';
    this.body += 'it worked !! \n';






});

app.listen(3300);