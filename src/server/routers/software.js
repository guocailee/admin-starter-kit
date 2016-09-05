var router = require('express').Router()
var sid = require('../config/sid').softinfo
var donwloadCenterUtil = require('../utils/donwloadCenter.util')

router.get('/', function (req, res, next) {
  donwloadCenterUtil.post(sid.query, req.body).pipe(res)
})

router.put('/', function (req, res, next) {
  donwloadCenterUtil.post(sid.query, req.body).pipe(res)
})

router.post('/', function (req, res, next) {
  donwloadCenterUtil.post(sid.query, req.body).pipe(res)
})

router.post('/download', function (req, res, next) {
  donwloadCenterUtil.post(sid.query, req.body).pipe(res)
})

router.delete('/', function (req, res, next) {
  donwloadCenterUtil.post(sid.query, req.body).pipe(res)
})

module.exports = router
