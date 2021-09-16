
import  * as zmq  from 'zeromq/v5-compat';

async function run() {
  const publisherSocket = zmq.socket('pub');
  publisherSocket.bind("tcp://127.0.0.1:3000", (err) =>  {
    if(err) {
        logger.error("Publisher bind error: " + err);
    }
  });

  while (true) {
    console.log("sending a multipart message envelope");
    publisherSocket.send('message', 0);
    await new Promise(resolve => setTimeout(resolve, 500))
  }
}

run();