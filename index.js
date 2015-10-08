var CountStream = require('./countream');
var countStream = new CountStream('book');
var http = require('http');

http.get('http://www.manning.com', function(res) {
  res.pipe(countStream);
});

countSream.on('total', function(count){
  console.log('Total matches:', count);
})
