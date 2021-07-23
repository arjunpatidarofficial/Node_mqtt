const mqtt =require("mqtt");

var client = mqtt.connect('mqtt://loalhost:1883');

client.on("connect", function () {
    setInterval(function () {
         var  random =Math.random()* 50;
         console.log(random)
        if (random <30){
            client.publish('Arjun', 'Simple MQTT using HiveMQ: '+random.toString())
        }
    }),3000;
})