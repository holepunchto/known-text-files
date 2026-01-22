'use strict'
const test = require('brittle')
const textFileExtensions = require('.')

test('text extensions', function (t) {
  t.ok(Array.isArray(textFileExtensions))
  t.ok(textFileExtensions.includes('txt'))
  t.ok(textFileExtensions.includes('js'))
  t.ok(textFileExtensions.includes('mjs'))
})

test('non-text extensions', function (t) {
  t.ok(Array.isArray(textFileExtensions))
  t.ok(!textFileExtensions.includes('pdf'))
  t.ok(!textFileExtensions.includes('mp3'))
  t.ok(!textFileExtensions.includes('so'))
})
