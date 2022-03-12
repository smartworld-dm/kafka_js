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


consumer.on('message', (data) => {
    console.log('Received message: ', data.value);
});

consumer.on('error', (error) => {
    console.log('Error: ', error);
});
