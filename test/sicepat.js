/* global before it describe */

'use strict'

var assert = require('assert')

var prepare = require('./fixtures/prepare')
var tracker = require('../')

var courier = tracker.courier(tracker.COURIER.SICEPAT.CODE, { apikey: 'test' })

describe(tracker.COURIER.SICEPAT.NAME, function () {
  var deliveredNumber = '123456789012'

  before(function () {
    // @TODO add nock
    prepare(courier, deliveredNumber)
  })

  it('delivered number', function (done) {
    courier.trace(deliveredNumber, function (err, result) {
      assert.equal(err, null)

      assert.equal(deliveredNumber, result.number)
      assert.equal(tracker.COURIER.SICEPAT.CODE, result.courier.code)
      assert.equal(tracker.STATUS.DELIVERED, result.status)

      done()
    })
  })
})
