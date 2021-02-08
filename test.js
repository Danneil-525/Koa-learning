const axios = require('axios')
axios.get('http://localhost:3000/data').then(res=>{
  console.log(res.data);
})