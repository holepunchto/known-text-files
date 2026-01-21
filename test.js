'use strict'
const test = require('brittle')
const textFileExtensions = require('.')

test('text extensions', function (t) {
  t.ok(textFileExtensions instanceof Set)
  t.ok(textFileExtensions.has('txt'))
  t.ok(textFileExtensions.has('js'))
  t.ok(textFileExtensions.has('mjs'))
})

test('non-text extensions', function (t) {
  t.ok(textFileExtensions instanceof Set)
  t.ok(!textFileExtensions.has('pdf'))
  t.ok(!textFileExtensions.has('mp3'))
  t.ok(!textFileExtensions.has('so'))
})
