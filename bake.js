"use strict"

module.exports = bake

var parse = require("cwise-parser")

function puglify(func) {
  if(!func) {
    return parse(function(){})
  }
  return parse(func)
}

function bake(userArgs) {
  var baked = {
    args: userArgs.args,
    pre: puglify(userArgs.pre),
    body: puglify(userArgs.body),
    post: puglify(userArgs.post),
    funcName: userArgs.funcName || userArgs.body.name || "cwise",
    blockSize: userArgs.blockSize || 64
  }
  return baked
}