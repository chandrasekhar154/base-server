const router = require('express').Router();
const bodyParser = require('body-parser');

const urlencodedPraser = bodyParser.urlencoded({ extended : true });
const appDelegates = require('../delegate-module/app-delegates');

router.route('/ping').get(appDelegates.ping);

// router.route('/getCustomers').get(appDelegates.getCustomers);

// router.route('/createUser').post(appDelegates.createUser);

router.route('/getVendors').get(appDelegates.getVendors);

router.route('/addVendor').post(appDelegates.addVendor);

router.route('/updateVendor').put(appDelegates.updateVendor);

module.exports = router;