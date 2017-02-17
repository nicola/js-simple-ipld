/* eslint-env mocha */
'use strict'

const expect = require('chai').expect
const series = require('async/series')

const IPLDResolver = require('ipld-resolver')

const obj = require('../src').obj
const store = require('../src').store

describe('SimpleIPLD', () => {
  const resolver = IPLDResolver()

  it('', (done) => {
    const nicola = {
      name: 'Nicola'
    }

    const david = {
      name: 'David',
      friends: [obj(nicola)]
    }

    store(resolver, [obj(nicola), obj(david)], (err, cids) => {
      if (err) return done(err)
      // check cids
    })
  })

  it('', (done) => {
    const nicola = obj({
      name: 'Nicola'
    })

    const david = obj({
      name: 'David',
      friends: [nicola]
    })

    store.add([nicola, david], (err, cids) => {
      if (err) return done(err)
      // check cids
    })
  })
})
