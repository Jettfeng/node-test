const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req,res) => {
  res.statusCode = 200
  res.setHeader('Content-Type','text/plain')
  res.end('hello word')
})

server.listen(port,hostname,()=>{
  console.log(`服务器运行在： http://${hostname}:${port}`);
  console.log(process.env.test);
  process.argv.forEach((val,index)=>{
    console.log(`${index}:${val}`)
  })
  const args = process.argv.slice(2)
  console.log(args);

  const args1 = require('minimist')(process.argv.slice(2))
  console.log(args1)
  console.log(args1.name);
  console.log(args1.age);
})