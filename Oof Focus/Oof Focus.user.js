// ==UserScript==
// @name         Oof Focus
// @namespace    https://redcodi.space
// @version      0.11
// @description  OOF
// @author       Trash
// @match        https://*.pcsb.org/*
// @match        http://*.pcsb.org/*
// @supportURL   https://greasyfork.org/en/scripts/411024-oof-focus/feedback
// @homepage     https://greasyfork.org/en/scripts/411024-oof-focus
// @require      https://unpkg.com/sweetalert/dist/sweetalert.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @require      https://greasyfork.org/scripts/407905-loggerjs/code/LoggerJS.js?version=831993
// @require      https://greasyfork.org/scripts/411028-oof-api/code/OOF%20API.user.js
// @grant        none
// ==/UserScript==

function msg() {
  //console.log("Work in progress");
  logger("This is a work in progress! Things might break!", "log");
  //swal("Warning", "This is a work in progress! Things might break!", "warning");
}
msg();

if (window.location.href.indexOf("focus") > -1) {
  //console.log("On Focus Placeholder");
  logger("Loaded on Focus", "log");
}