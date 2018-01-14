// Module dependencies
const Bunyan = require("bunyan");
const Restify = require("restify");
const Promise = require("bluebird");

// Create Logger
const Logger = Bunyan.createLogger({
  name: process.env.SERVER_NAME,
  level: process.env.LOG_LEVEL
});

// Route handlers
function handler(req, res, next) {
  return Promise.resolve()
    .then(respond)
    .then(callNext)
    .catch(errorHandler);

  function respond() {
    return res.send({ welcome: "Welcome to the dockerfiles example :)" });
  }

  function callNext() {
    return next();
  }

  function errorHandler(err) {
    return next(err);
  }
}

// Create Server
const Server = Restify.createServer({
  name: process.env.SERVER_NAME,
  version: process.env.SERVER_VERSION,
  log: Logger
});

// Routes
Server.get({ version: "1.0.0", path: "/" }, handler);

// Request logger
Server.on(
  "after",
  Restify.plugins.auditLogger({
    event: "after",
    log: Logger,
    printLog: true
  })
);

// Error handlers
Server.on("NotFound", (req, res, err, cb) => {
  err.toJSON = function toJSON() {
    return { error: "Page not found." };
  };
  return cb();
});

Server.on("BadRequest", (req, res, err, cb) => {
  err.toJSON = function toJSON() {
    return { error: "Invalid request." };
  };
  return cb();
});

Server.on("InternalServer", (req, res, err, cb) => {
  Logger.error("An error has occurred: %s", err);

  err.toJSON = function toJSON() {
    return { error: "An internal server error has ocurred." };
  };
  return cb();
});

Server.on("VersionNotAllowed", (req, res, err, cb) => {
  err.toJSON = function toJSON() {
    return { error: "Version not allowed." };
  };
  return cb();
});

Server.on("UnsupportedMediaType", (req, res, err, cb) => {
  err.toJSON = function toJSON() {
    return { error: "Unsupported media type." };
  };
  return cb();
});

// Start server
Server.listen(process.env.PORT, () => {
  Logger.info("%s listening at %s", Server.name, Server.url);
});

// Graceful Shutdown
const Signals = {
  SIGINT: 2,
  SIGTERM: 15
};

function shutdownHandler(signal, value) {
  return () => {
    Logger.warn(`Gracefully shutting down the process: #${process.pid}.`);

    Server.close(() => {
      Logger.warn(`Process ${process.pid} exited by signal ${signal}.`);
      process.exit(128 + value);
    });
  };
}

Object.keys(Signals).forEach(signal => {
  process.on(signal, shutdownHandler(signal, Signals[signal]));
});
