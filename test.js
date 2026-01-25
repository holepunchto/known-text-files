'use strict'
const test = require('brittle')
const knownTextFiles = require('.')

test('text extensions', function (t) {
  t.ok(Array.isArray(knownTextFiles))

  t.ok(knownTextFiles.includes('.txt'))
  t.ok(knownTextFiles.includes('.js'))
  t.ok(knownTextFiles.includes('.mjs'))
  t.ok(knownTextFiles.includes('.gitignore'))
  t.ok(knownTextFiles.includes('.env'))
  t.ok(knownTextFiles.includes('dockerfile'))
  t.ok(knownTextFiles.includes('makefile'))
})

test('non-text extensions', function (t) {
  t.ok(!knownTextFiles.includes('.pdf'))
  t.ok(!knownTextFiles.includes('.mp3'))
  t.ok(!knownTextFiles.includes('foobar'))
  t.ok(!knownTextFiles.includes('.foobar'))
  t.ok(!knownTextFiles.includes(''))
  t.ok(!knownTextFiles.includes(undefined))
  t.ok(!knownTextFiles.includes(null))
})
