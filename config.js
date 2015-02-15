var config = {
  mongodb: {
    host: 'localhost',
    port: 27017,
    db: 'MyApi',
    options: {
      server: {poolSize: 5},
      db: {nativer_parser: true}
    }
  },
  web: {
    port: 5555
  },
  debug: true
}

module.exports = config;
