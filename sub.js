const mqtt =require("mqtt");

var client = mqtt.connect('mqtt://localhost:1883');

client.on("connect", function () {
       client.subscribe("Arjun");
       console.log("Client has subscribed successfully")
})

client.on('message', function (topic, message) {
      console.log(message.toString())
})
