const router = require('express').Router();
const bodyParser = require('body-parser');

const urlencodedPraser = bodyParser.urlencoded({ extended : true });
const appDelegates = require('../delegate-module/app-delegates');

router.route('/ping').get(appDelegates.ping);

router.route('/getCustomers').get(appDelegates.getCustomers);

module.exports = router;