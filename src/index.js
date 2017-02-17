const dagCBOR = require('ipld-dag-cbor')
const parallel = require('async/parallel')
const series = require('async/series')
const map = require('async/forEach')

class Format {
  constructor (format, obj, opts) {
    this.format = format
    this.obj = obj
    this.opts = opts
  }
}

exports.dagCBOR = (object, opts) => {
  return Format('dagCBOR', object, opts)
}

exports.dagPB = (object, opts) => {
  return Format('dagPB', object, opts)
}

const store = (resolver, array, done) => {
  // check if there are links inside, resolve them (recursively)
  // move to next, if object already done, skip
  // const queue = []
  // series([
  //   (cb) => {
  //     const queue =
  //     map(cidQueue(array), (obj) => getCID(obj), cb)
  //   }
  // ])
}

module.exports = {
  obj: obj,
  store: store
}
