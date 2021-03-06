const Koa = require('koa')
const Router = require('koa-router')
const fs = require('fs')
const app = new Koa();
const router = new Router();

// 处理跨域
app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*")
  await next()
})

const render = async (page) => {
  return new Promise((res, rej) => {
    let pageUrl = `./${page}.json`;
    fs.readFile(pageUrl, "utf-8", (err, data) => {
      if (err) {
        rej(err);
      } else {
        res(data);
      }
    });
  })
};


router.get('/data', async (ctx) => {
  let data = await render('content')
  ctx.body = data
})

app.use(router.routes())
  .use(router.allowedMethods());



app.listen(3000, () => {
  console.log('服务器已启动····················');
})