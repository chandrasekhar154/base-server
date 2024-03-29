const fileOwner = 'app-delegates.js';
const logger = require('../utils/logging/logger');
const appServices =  require('../service-module/app-services');

module.exports.ping = async(req, res) => {
    const functionName = "Ping Function";
    logger.info(functionName);

    try {
        let result = {
            status : "success",
            details : "Service was pinged successfully"
        }
        res.status(200).send(result);
    }
    catch(err) {
        console.log(err);
        let result = {
            status : "failed",
            details : "Internal Server Error"
        }
        res.status(500).send(result);
    }
};

module.exports.getCustomers = async(req, res) => {
    const functionName = "getCustomers";

    logger.info(functionName)

    try {
        const customersList = await appServices.getCustomers(req);
        if(customersList.statusCode === 200) {
            res.status(customersList.statusCode).send(customersList.result);
        }
    }
    catch(err) {
        console.log(err);
        let result = {
            status : "failed",
            details : "Internal Server Error",
            err : err.result
        }
        res.status(500).send(result);
    }
}

module.exports.createUser = async(req, res) => {
    const functionName = "createUser";

    logger.info(functionName);

    try {
        const addUser = await appServices.createUser(req, res);
        if(addUser.statusCode === 200) {
            res.status(addUser.statusCode).send(addUser.result);
        }
    }
    catch(err) {
        console.log(err);
        let result = {
            status : "failed",
            details : "Internal Server Error",
            err : err.result
        }
        res.status(500).send(result);
    }
}