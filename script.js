const serviceManager = require("windows-service-manager");
const fs = require("fs");
const prompt = require("prompt");
const helper = require("./setup-config");

const schema = {
  properties: {
    serviceName: {
      message: "Please input Windows service",
      required: true,
    },
  },
};

prompt.start();

prompt.get(schema, function (err, result) {
  const input = result["serviceName"];
  if (err) {
    return onErr(err);
  }
  console.log("service name: " + input);

  fs.readFile("config.js", "utf8", (err, data) => {
    data = data.split("\r\n");
    const formattedArr = JSON.parse(data[0]);
    let found = formattedArr.find((item) => item.name == input);
    if (found) {
      serviceManager.queryService(input, function (error, services) {
        if (error) {
          console.log(error);
        } else {
          console.log(
            `Service: ${
              services.name
            } is ${services.stateDescription.toLowerCase()}`
          );
        }
      });
    } else {
      console.log(`Service: ${input} not authorized to query`);
    }
  });
});
