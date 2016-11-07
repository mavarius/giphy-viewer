const config = {
  db: {
    'production': process.env.MONGO_URI,
    'development': 'mongodb://localhost/bp',
    'test': 'mongodb://localhost/bp-test'
  }
}

module.exports = config
