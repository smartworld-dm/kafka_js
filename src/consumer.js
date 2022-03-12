const kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.KafkaClient(),
    consumer = new Consumer(
        client,
        [
            { topic: 'local-topic'}
        ],
        {
            autoCommit: false
        }
    );


consumer.on('message', (message) => {
    console.log('Received message: ', message);
});

consumer.on('error', (error) => {
    console.log('Error: ', error);
});
