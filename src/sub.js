// const zmq = require("zeromq/v5-compat");
import  * as zmq  from 'zeromq/v5-compat';

async function run() {
  console.log('---Connected---');
  const sub = zmq.socket('sub').on('message', msg => {
      console.info('message Recieved...', msg);
    })
    .on('error', err => {
      if (err) {
        console.log('erroror');
      }
    });
  sub.connect("tcp://127.0.0.1:3000");
  sub.subscribe('message');
}

run();
