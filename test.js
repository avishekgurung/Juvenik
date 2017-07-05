var redis = require("redis"),
client = redis.createClient();

client.on("error", function (err) {
        console.log("Error " + err);
    });


client.set("string key", "string val", redis.print);