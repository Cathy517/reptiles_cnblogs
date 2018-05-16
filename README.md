# reptiles_cnblogs
爬博客园数据

用到的库，superagent， cheerio， eventproxy，async

superagent

superagent(http://visionmedia.github.io/superagent/ ) 是个轻量的的 http 方面的库，是nodejs里一个非常方便的客户端请求代理模块

cheerio

cheerio(https://github.com/cheeriojs/cheerio ) 可以理解成一个 Node.js 版的 jquery，用来从网页中以 css selector 取数据，使用方式跟 jquery 一样一样的。

eventproxy

eventproxy(https://github.com/JacksonTian/eventproxy ) 非常轻量的工具，但是能够带来一种事件式编程的思维变化。

如果你要并发异步获取两三个地址的数据，并且要在获取到数据之后，对这些数据一起进行利用的话，常规的写法是自己维护一个计数器。
先定义一个 var count = 0，然后每次抓取成功以后，就 count++。如果你是要抓取三个源的数据，由于你根本不知道这些异步操作到底谁先完成，那么每次当抓取成功的时候，就判断一下count === 3。当值为真时，使用另一个函数继续完成操作。
而 eventproxy 就起到了这个计数器的作用，它来帮你管理到底这些异步操作是否完成，完成之后，它会自动调用你提供的处理函数，并将抓取到的数据当参数传过来。


内容保存在 server.js 中，而我们有一个这样的启动页面 index.js，
