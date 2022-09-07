const mqtt = require('mqtt');

let client = mqtt.connect('mqtt://broker.hivemq.com');

client.on("connect", function() {
    
})