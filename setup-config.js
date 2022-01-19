const fs = require("fs");
const serviceManager = require("windows-service-manager");

(function () {
    // let result = false;
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

// serviceManager.queryServices(function (error, services) {
//   console.log("**error from querying services***", error);
//   fs.writeFile('./config.js', JSON.stringify(services), function(err) {
//     if(err) console.log(err)
//     console.log("**error creating config file***", err)
//   });
//   console.log("Config file created and populated");
// });

// read from file

// serviceManager.queryServices(function (error, services) {
//   console.log("**error from querying services***", error);
//   fs.writeFile('./config.js', JSON.stringify(services), function(err) {
//     if(err) console.log(err)
//     console.log("**error creating config file***", err)
//   });
//   console.log("Config file created and populated");
// });
