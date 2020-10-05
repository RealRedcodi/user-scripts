// ==UserScript==
// @name         OOF Focus
// @namespace    https://redcodi.space
// @version      0.16
// @description  OOF Focus!
// @author       Redcodi
// @match        https://*.pcsb.org/*
// @match        http://*.pcsb.org/*
// @supportURL   https://github.com/RealRedcodi/user-scripts/issues
// @homepage     https://github.com/RealRedcodi/user-scripts/tree/main/OofFocus
// @require      https://unpkg.com/sweetalert/dist/sweetalert.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @require      https://greasyfork.org/scripts/411028-oof-api/code/OOF%20API.user.js
// @updateURL    https://raw.githubusercontent.com/RealRedcodi/user-scripts/main/OofFocus/OofFocus.user.js
// @downloadURL  https://raw.githubusercontent.com/RealRedcodi/user-scripts/main/OofFocus/OofFocus.user.js
// @grant        none
// ==/UserScript==


// From https://greasyfork.org/en/scripts/407905-loggerjs
function logger(content, type = "log") {
    switch (type) {
        case "log": {
            var css = "background: #6495ED;";
            return console.log(`%c${type.toUpperCase()}`, `${css}`, `${content}`);
        }
        case "warn": {
            var css = "background: #FF6600; color: black;"
            return console.log(`%c${type.toUpperCase()}`, `${css}`, `${content}`);
        }
        case "error": {
            var css = "background: #FF0066"
            return console.log(`%c${type.toUpperCase()}`, `${css}`, `${content}`);
        }
        case "debug": {
            var css = "color: #66FF00;"
            return console.log(`%c${type.toUpperCase()}`, `${css}`, `${content}`);
        }
        case "cmd": {
            var css = "background: #FFFFFF; color: black;"
            return console.log(`%c${type.toUpperCase()}`, `${css}`, `${content}`);
        }
        case "ready": {
            var css = "background: #66FF00; color: black;"
            return console.log(`%c${type.toUpperCase()}`, `${css}`, `${content}`);
        }
        case "disconnect": {
            var css = "background: #FF0066"
            return console.log(`%c${type.toUpperCase()}`, `${css}`, `${content}`);
        }
    }
};

function msg() {
  //console.log("Work in progress");
  logger("This is a work in progress! This doesnt even work yet!", "log");
  //swal("Warning", "This is a work in progress! Things might break!", "warning");
}
msg();

if (window.location.href.indexOf("focus") > -1) {
  //console.log("On Focus Placeholder");
  logger("Loaded on Focus", "log");
}