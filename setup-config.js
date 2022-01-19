const fs = require("fs");
const serviceManager = require("windows-service-manager");

(function () {
    serviceManager.queryServices(function (error, services) {
        if (error) {
            console.log("**error from querying services***", error);
        }

        fs.writeFile("./config.js", JSON.stringify(services), function (err) {
            if (err) {
                console.log("**error creating config file***", err);
            }
        });
    });
})()

