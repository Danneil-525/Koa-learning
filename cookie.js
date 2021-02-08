const Koa = require('koa')
const app = new Koa();

app.use(async(ctx)=>{
  
  ctx.cookies.set(
    'MyNmae','xs'
  )
  ctx.body='hello'
})

app.listen(3000,()=>{
  console.log('服务器已启动····················');
})