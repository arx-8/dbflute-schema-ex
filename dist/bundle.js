!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=0)}([function(n,t,e){"use strict";e.r(t);var r=function(n){return"".concat(n.value).concat(c)},o=function(n){return"".concat(n.value).concat(u)},a="_show_sql_button",c="_show_sql_dialog",u="_show_sql_textarea";function l(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var i=function(){function n(t){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.columnName=t}var t,e,r;return t=n,(e=[{key:"value",get:function(){return this.columnName.toLowerCase()}}])&&l(t.prototype,e),r&&l(t,r),n}();function f(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var s=function(){function n(t){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.tableName=t}var t,e,r;return t=n,(e=[{key:"value",get:function(){return this.tableName.toLowerCase()}}])&&f(t.prototype,e),r&&f(t,r),n}(),d=function(){return document},b=function(n){return Array.prototype.slice.call(d().querySelectorAll(n))},m=function(n){var t=b(n);if(1===t.length)return t[0];throw new Error('Logic Failure: "'.concat(n,'" is always 1 element exists'))},v=function(n,t){var e=n.querySelectorAll(t);if(1===e.length)return e[0];throw new Error('Logic Failure: "'.concat(t,'" is always 1 element exists'))},p=function(){var n=function(n){var t=b(n);if(0===t.length)return null;if(1===t.length)return t[0];throw new Error('Logic Failure: "'.concat(n,'" found multiple elements'))}("dbflute-schema-ex_system-status");return null==n?"NONE":"INJECTED"===n.textContent?"INJECTED":"NONE"},h=function(n,t){t.forEach(function(t){var e=d().createElement("span");e.innerHTML=n.value;var c=v(e,"#".concat("BUTTON_ID"));c.id=function(n){return"".concat(n.value).concat(a)}(t),c.onclick=y(t),v(e,"#".concat("DIALOG_ID")).id=r(t),v(e,"#".concat("TEXTAREA_ID")).id=o(t);var u="#".concat(t.value);m(u).appendChild(e)})},y=function(n){return function(){var t=x(n),e=function(n,t){return"".concat(n,":").concat(t.join(","))}(n.value,t.map(function(n){return n.value}));m("#".concat(o(n))).value=e,m("#".concat(r(n))).show()}},x=function(n){return b(function(n){return"#".concat(n.value,"-body td.columnnamecell")}(n)).map(function(n){if(null==n.textContent)throw new Error("elm.textContent は必ず存在するはず");return new i(n.textContent)})},w={value:'\n<button id="'.concat("BUTTON_ID",'" class="').concat("dbflute-schema-ex_button",'">\n  Show SQL\n</button>\n<dialog id="').concat("DIALOG_ID",'" class="').concat("dbflute-schema-ex_dialog",'">\n  <textarea id="').concat("TEXTAREA_ID",'" class="').concat("dbflute-schema-ex_textarea",'"></textarea>\n</dialog>\n'),type:"HTMLString"},_={value:"\n<style>\n.".concat("dbflute-schema-ex_dialog"," {\n  padding: 8px;\n  border: 0;\n  border-radius: 0.6rem;\n  box-shadow: 0 0 1em black;\n}\n.").concat("dbflute-schema-ex_textarea"," {\n  width: 400px;\n  height: 300px;\n}\n#").concat("dbflute-schema-ex_system-status",' {\n  display: none;\n}\n</style>\n\n<div id="').concat("dbflute-schema-ex_system-status",'">\n  INJECTED\n<div>\n  '),type:"HTMLString"};!function(){if("INJECTED"!==p()){var n,t,e=b("#table-list-body td.namecell").map(function(n){if(null==n.textContent)throw new Error("elm.textContent は必ず存在するはず");return new s(n.textContent.trim())});n=_,(t=d().createElement("div")).innerHTML=n.value,m("body").appendChild(t),h(w,e)}}()}]);