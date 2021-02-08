const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router')
const router = new Router();
const home = new Router();
const page = new Router();

//子路由
home.get('/',(ctx,next)=>{
  ctx.body = "Hello"
}).get('/login',(ctx,next)=>{
  ctx.body = "Login"
})

//子路由
page.get('/',(ctx,next)=>{
  ctx.body = "1232Hello"
}).get('/login',(ctx,next)=>{
  ctx.body = "312321312Login"
})

//装载子路由
router.use('/home',home.routes(),home.allowedMethods())
.use('/page',page.routes(),page.allowedMethods())

//挂载路由
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000,()=>{
  console.log('服务开启················');
})