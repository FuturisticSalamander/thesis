var connectionString = require(path.join(__dirname, '../', '../', 'config'));

pg.connect(connectionString, function(err, client, done) {
  // Handle connection errors
  if (err) {
    done();
    console.log(err);
  }

  // add dummy user
  var queryAddUser = client.query("INSERT INTO users (username) VALUES ('Alexander')");

  queryAddUser.on('end', function() {
    done();
  });

  console.log('ran');
});
