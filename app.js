const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
//把post请求的参数转换成JSON直接加入ctx.request.body中
app.use(bodyParser());

app.use(async ctx => {
  
 if(ctx.url === '/' && ctx.method === 'GET'){
  const html = `
    <form  action = "/" method="post">
      <input name="xs" type="text"/>
      <input name="xsa" type="text"/>
      <input name="xsb6" type="text"/>
      <button type="submit">submit</button>
    </form>
  `
  ctx.body = html
 }else if(ctx.url === '/' && ctx.method === 'POST'){
   let postData = ctx.request.body
    ctx.body = postData
 }else{
  ctx.body = '<h1>404</h1>'
 };
});
// function parsePostData(ctx){
//   return new Promise((resolve,reject)=>{
//     try{
//       let postData = ''
//       ctx.req.addListener('data',(data)=>{
//         postData += data
//       })
//       ctx.req.on('end',()=>{
//         let data = parseQueryStr(postData)
//         resolve(data)
//       })
//     }
//     catch(e){
//       reject(e);
//     }
//   })
// } 

// function parseQueryStr(queryStr){
//   let queryData = {};
//   let queryList = queryStr.split('&');
//   for (let str of queryList){
//      let strArr = str.split('=');
//      queryData[strArr[0]] = decodeURIComponent(strArr[1]) 
//   }
//   return queryData
// }

app.listen(3000);
console.log('服务器已启动································');