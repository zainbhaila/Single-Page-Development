const http = require('http');

const server = http.createServer(function(req, res) {
  if (req.url === "/") {
    res.write("What have you been doing to pass time inside?\nPlaying video games. Specifically MHW and Stardew Valley. Also, Annoying my younger brothers.");
    res.end();
  }
});

server.listen(3500);
