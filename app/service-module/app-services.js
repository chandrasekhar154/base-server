
const connectionPool = require('../db-config/db-config-logic');

module.exports.getCustomers = (data)=> {

    return new Promise( async(resolve, reject) => {
        try {
            connectionPool.connect((err) => {
                if(err) {
                    reject({ 'statusCode' : 404, 'result': err })
                }
                console.log("connected..");
                let selectQuery = "SELECT * FROM `customer_master` order by customer_id asc limit 100";
                connectionPool.query(selectQuery, (err, result) => {
                    if(err){
                        reject({ 'statusCode' : 404, 'result': err })
                    }
                    resolve({ 'statusCode' : 200, 'result': result });
                })
            });
        }
        catch (err) {
            console.log("Catch in Main Logic.. Hello world.." + err);
            reject({'statusCode' : 404, 'result': err });
        }
    })
}