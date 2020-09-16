/*!
 * package-base v1.0.0
 * (c) 2019-2020 yujinpan
 * Released under the MIT License.
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * @param {Msg} msg
 */
function sayMsg(msg) {
  alert(msg);
} // test

var x = '1';
sayMsg(x);

exports.sayMsg = sayMsg;
