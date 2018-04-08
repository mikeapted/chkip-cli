const cmd = require('commander')
var chkip = require('chkip');

cmd.version('0.1.0')
  .description('Command line interface for retrieving current public IP.')

  cmd.parse(process.argv)  

chkip((ip) => {
  console.log(ip);
});
