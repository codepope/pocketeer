var Pocket = require('simplepocket').Pocket;
var moment = require('moment')
var config = require('./config.json');

console.log("Go")

var lib = new Pocket(config.consumer_key, config.access_token);

lib.request('/get')
    .then(function(response) {
        console.log('Processing');
        allList = response.body.list;
        watermark = moment().subtract(4, "weeks");

        for_archive = [];

        for (var key in allList) {
            item = allList[key];
            time_updated = moment(item.time_updated, "X");
            if (time_updated.isBefore(watermark)) {
                for_archive.push({ "action": "archive", "item_id": item.item_id, "time": moment().format("X") });
            } else {
                console.log("Preserving " + time_updated.format());
            }
        }

        lib.request("/send", { "actions": for_archive }).then(function(response) {
            console.log(response);
        }).catch(function(err) {
            console.log(err);
        });
    })
    .catch(function(err) {
        console.log(err);
        console.log(err.stack);
    });