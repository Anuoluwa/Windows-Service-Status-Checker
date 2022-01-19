# Windows-Service-Status-Checker

#### How To Run The Script:

- Clone the Repo
- Change directory into the root folder
- Run `npm install` 
- Run `npm start` (this will  auto-create the config file and run the app)

There is a script that populates the config file with the available services on the host machine(Windows) before the Prompt runs.
You can run the script in isolation with this command `npm run setup-config` at the root of the project folder. You shall see a file with `config` created.


- [x] Prompt the user for name of a "windows service" that user wants to check status of
- [x] Print status report based on what you find about service
        Service: {serviceName} does not exist
        Service: {serviceName} is running
        Service: {serviceName} is stopped
- [x] Bonus (optional): It pecify the list of service names in a configuration file and user should only be able to query those services. If service is not in the list, then print Service: {serviceName} not authorized to query




By Anu' Apiti
