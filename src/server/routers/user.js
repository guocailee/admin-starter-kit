var router = require('express').Router()
var accountCenterUtil = require('../utils/accountCenter.util')
var sid = require('../config/sid').user

router.get('/', function (req, res, next) {})
router.put('/', function (req, res, next) {

})
router.post('/signin', function (req, res, next) {
  accountCenterUtil.post(sid.signin, req.body).pipe(res)
})
router.delete('/', function (req, res, next) {

})
module.exports = router
