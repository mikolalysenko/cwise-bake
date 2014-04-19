"use strict"

module.exports = bake

var parse = require("cwise-parser")

function bake(userArgs) {
  return {
    userArgs.args,
    pre: parse(userArgs.pre || function(){}),
    body: parse(userArgs.body),
    post: parse(userArgs.post || function(){}),
    funcName: userArgs.funcName || userArgs.body.name || "cwise",
    blockSize: userArgs.blockSize || 64
  }
}