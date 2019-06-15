var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: "1587997183",
  channelSecret: "555492ee7d3c54e401a830b5689ece5e",
  channelAccessToken: "Ej8gSoii1/4UT0zrSSaHu8YDB34R42kU9glYG8HSH0Av56KHf1J3gxLuLJlXsNMZzSgQzZwulrMQ+TYgc4nt0YuX1ifNIWHXRbi9aC3kii928596lRcCwbyVr1FlIaocPGuscAFLLB31YGo6Hq1y1gdB04t89/1O/w1cDnyilFU="
});

bot.on('message', function(event) {
    console.log(event); //把收到訊息的 event 印出來看看
  });

  const app = express();
  const linebotParser = bot.parser();
  app.post('/', linebotParser);

  //因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
  var server = app.listen(process.env.PORT || 8080, function() {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
