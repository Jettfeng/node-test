const http = require("http");
const chalk = require('chalk')
const ProgressBar = require('progress')

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("hello word");
});

server.listen(port, hostname, () => {
  console.log(`服务器运行在： http://${hostname}:${port}`);
  console.log(process.env.test);
  process.argv.forEach((val, index) => {
    console.log(`${index}:${val}`);
  });
  const args = process.argv.slice(2);
  console.log(args);

  const args1 = require("minimist")(process.argv.slice(2));
  console.log(args1);
  console.log(args1.name);
  console.log(args1.age);

  const x = 1;
  const y = 2;
  const z = 3;
  console.count("x 的值为 " + x + " 且已经检查了几次？");
  console.count("x 的值为 " + x + " 且已经检查了几次？");
  console.count("y 的值为 " + y + " 且已经检查了几次？");

  // =================================================================
  const oranges = ["橙子", "橙子"];
  const apples = ["苹果"];
  oranges.forEach((fruit) => {
    console.count(fruit);
  });
  apples.forEach((fruit) => {
    console.count(fruit);
  });

  // ===========================================================
  const doSomething = () => console.log("测试");
  const measureDoingSomething = () => {
    console.time("doSomething()");
    //做点事，并测量所需的时间。
    setTimeout(() => {
      doSomething();
    }, 1000);
    console.timeEnd("doSomething()");
  };
  measureDoingSomething();

  // ========================================================
  console.log(chalk.red('Hello world!'))
  console.log(chalk.yellow('70%'))
  
  const bar = new ProgressBar(':bar',{total:10})
  const timer = setInterval(()=>{
    bar.tick()
    if (bar.complete) {
      clearInterval(timer)
      process.exit()
    }
  },100)
});
