var router = require('express').Router()
var donwloadCenterUtil = require('../utils/donwloadCenter.util')
var sid = require('../config/sid').softtype

// query softtype
router.get('/', function (req, res, next) {
  donwloadCenterUtil.post(sid.query, req.body).pipe(res)
})

// update softtype
router.put('/', function (req, res, next) {
  donwloadCenterUtil.post(sid.update, req.body).pipe(res)
})

// add softtype
router.post('/', function (req, res, next) {
  donwloadCenterUtil.post(sid.add, req.body).pipe(res)
})

// delete softtype
router.delete('/', function (req, res, next) {
  donwloadCenterUtil.post(sid.delete, req.body).pipe(res)
})

module.exports = router
