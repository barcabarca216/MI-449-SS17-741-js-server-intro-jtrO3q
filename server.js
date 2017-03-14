console.log('Hi!')
// require Node's http module and assign it to a variable
var http = require('http')

var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end(
      '<h1>HOME</h1>' + '<p>HOW ARE YOU THIS FINE DAY?</p>' + '<a href="/cuteness">Click here for adorable animals</a>' +
      '<a href="/random-joke">Click here for hilarious jokes</a>')
    } else if (request.url === '/cuteness') {
    response.end(
      '<h1>CUTE ANIMALS</h1>' +
       '<a href="/">TO THE HOME PAGE</a>' +
       '<img src="http://i.dailymail.co.uk/i/pix/2013/07/03/article-0-1AA2F04F000005DC-736_638x415.jpg" alt="CUTE">')
    } else if (request.url === '/random-joke') {
    var jokes = Math.random()
      if (jokes > 0.66) {
      var one = '<p>knock knock</p>' +
       '<p>who\'s there?</p>' +
       '<p>An extraterrestrial.</p>' +
       '<p>Extraterrestrial who?</p>' +
       '<p>What - how many extra-terrestrials do you know?</p>'
      } else if (jokes < 0.33) {
      var one = '<p>Knock Knock</p>' +
      '<p>Who\'s there?</p>' +
       '<p>a broken pencil</p>' +
       '<p>a broken pencil who?</p>' +
       '<p>nevermind its pointless.</p>'
      } else {
      var one = '<p>knock knock</p>' +
       '<p>who\'s there?</p>' +
       '<p>Amos</p>' +
       '<p>Amos who</p>' +
       '<p>a mosquito</p>' }

      response.end('<h1>HILARIOUS RANDOM JOKES</h1>' + '<a href="/">TO THE HOME PAGE</a>' + one)
  } else {
  response.end(
    '<h1>This is not the page you are looking for:</h1>' + <strong>request.url</strong> +
     '<a href="/">TO THE HOME PAGE</a>' +
     '<img src="https://s-media-cache-ak0.pinimg.com/originals/f8/c3/e8/f8c3e844d98cb3ca75a58806e11fe808.png" alt="goodhope">')
}})
// Listen on port 8080, so that we can reach the app at
// localhost:8080

var port = process.env.PORT || 8080
server.listen(port)
console.log('Server running at http://localhost:' + port + '/')
