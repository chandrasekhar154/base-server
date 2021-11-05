const fileOwner = 'app-delegates.js';

module.exports.ping = async(req, res) => {

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