# README #

Kafka test by using Javascript

### How do I get set up? ###

* Install Java
* Download Kafka

* Build Kafka
```./gradlew jar -PscalaVersion=2.13.6```

* Run Zookeeper
In kafka root folder:
```sh bin/zookeeper-server-start.sh config/zookeeper.properties```

* Kafka server
In kafka root folder:
```sh bin/kafka-server-start.sh config/server.propertie```

* Run consummer
```npm run start:consumer```

* Run producer
```npm run start:producer```

* Run Zookeeper and Kafka on docker
stop above local Zookeeper and Kafka
```docker-compose up -d```
Then you can use service running in docker
