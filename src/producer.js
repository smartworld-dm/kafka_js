const kafka = require('kafka-node'),
    Producer = kafka.Producer,
    client = new kafka.KafkaClient(),
    producer = new Producer(client);

producer.on('ready', function () {
    let payloads = [];

    for (let i = 0; i < 10000; i++) {
        payloads.push({
            topic: 'local-topic',
            messages: `${i}th message`,
        });
    }

    producer.send(payloads, function (err, data) {
        if (err) {
            console.log('Error while sending messages: ', err);
        } else {
            console.log('Sent messages successfully!');
        }
    });
});
 
producer.on('error', function (err) {});
