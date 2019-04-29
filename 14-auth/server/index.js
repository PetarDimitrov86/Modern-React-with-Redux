const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

//const session = require('express-session');
//const MongoStore = require('connect-mongo')(session);

const MONGO_URI =
  '';
mongoose.Promise = global.Promise;
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true });

app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/* ' }));
router(app);

const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on: ', port);
