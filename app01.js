const Koa = require('koa');
const app = new Koa();
const fs  = require('fs');


const render = async(page)=>{
 return new Promise((res,rej)=>{
  let pageUrl = `/${page}`;
  fs.readFile(pageUrl,"utf-8",(err,data)=>{
    if(err){
      rej(err);
    }
    else{
      res(data);
    }
  });
 })
};

// const route = async (url)=>{
//   let page='404.html';
//   switch(url){
//     case '/': page='index.html'; break;
//     case '/index': page='index.html'; break;
//     case '/todo' : page='todo.html'; break;
//     case '/404' : page='404.html'; break;
//     default:break;
//   }
//   console.log(page);
//   let html = await render(page)
//   return html
// };

app.use(async (ctx)=>{
  let url = ctx.request.url
  console.log(url);
  let html = await route(url)
  ctx.body = html;
})

app.listen(3000)