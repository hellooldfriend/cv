parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"EphO":[function(require,module,exports) {
"use strict";function e(e){return e?'\n        <div class="cv_template-block cv_template-header">\n            <h1>'.concat(e.name,'</h1>\n            <div class="cv_template-header-title">').concat(e.position,'</div>\n            \n            <div class="cv_template-links">\n                ').concat(e.links.map(function(e,n){return'<a \n                            class="cv_template-link"\n                            href="'.concat(e.url,'"    \n                        >').concat(e.label,"</a>")}).join(""),"\n            </div>\n        </div>\n    "):null}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"J71n":[function(require,module,exports) {
"use strict";function n(n){return n&&n.length?'\n        <div class="cv_template-block">\n            <h2>Education</h2>\n            '.concat(n.map(function(n){return'\n                    <div>                        \n                        <div class="cv_template-education-place">\n                            '.concat(n.place,'\n                        </div>                \n                        <div class="cv_template-education-specialization">\n                            ').concat(n.specialization,'\n                        </div>           \n                        <div class="cv_template-education-info">\n                            <div class="cv_template-education-dates">\n                                ').concat(n.datetimeFrom," – ").concat(n.datetimeTo,'\n                            </div>\n                            <div class="cv_template-education-location">\n                                ').concat(n.locationCity,", ").concat(n.locationCountry,"\n                            </div>\n                        </div>\n                    </div>\n                ")}),"\n        </div>\n    "):null}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=n;
},{}],"T5wl":[function(require,module,exports) {
"use strict";function n(n){return n&&n.length?'\n        <div class="cv_template-block">\n            <h2>Experience</h2>\n            '.concat(n.map(function(n){return"\n                    <div>\n                        <h3>".concat(n.position,'</h3>\n                        <div class="cv_template-experience-company">\n                            <a href="').concat(n.companyWebsite,'">\n                                ').concat(n.company,'\n                            </a>\n                        </div>\n                        \n                        <div class="cv_template-experience-info">\n                            ').concat(n.datetimeFrom," – ").concat(e(n.datetimeTo),'\n                        </div>\n                        \n                        <div class="cv_template-experience-description">\n                            ').concat(n.description,"\n                        </div>\n                    </div>\n                ")}),"\n        </div>\n    "):null}function e(n){return null===n?"Ongoing":n}function c(n,e){}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=n;
},{}],"pA1m":[function(require,module,exports) {
"use strict";function e(e){return e?'\n        <div class="cv_template-block">\n            <h2>Profile</h2>\n            <div>\n                '.concat(e.description,"\n            </div>\n        </div>\n    "):null}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"tPn4":[function(require,module,exports) {
"use strict";function n(n){if(!n)return null;var e=Object.entries(n);return'\n        <div class="cv_template-block">\n            <h2>Skills</h2>\n            '.concat(e.map(function(n){return n[1].length?"\n                    <div>\n                        <h3>".concat(t(n[0]),":</h3>\n                        ").concat(n[1].map(function(n){return"<div>– ".concat(n,"</div>")}).join(""),"\n                    </div>\n                "):null}).join(""),"\n        </div>\n    ")}function t(n){return n[0].toUpperCase()+n.slice(1)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=n;
},{}],"HcQF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=o(require("../templates/header")),t=o(require("../templates/education")),i=o(require("../templates/experience")),r=o(require("../templates/profile")),n=o(require("../templates/skills"));function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,i){return t&&u(e.prototype,t),i&&u(e,i),e}var a=function(){function o(u,l){s(this,o),this.$el=document.getElementById(u),this.options=l,this.profile=(0,r.default)(this.options.profile),this.header=(0,e.default)(this.options.header),this.education=(0,t.default)(this.options.education),this.experience=(0,i.default)(this.options.experience),this.skills=(0,n.default)(this.options.skills),this._render()}return l(o,[{key:"_setup",value:function(){throw new Error("This method should be implemented")}},{key:"_render",value:function(){var e=this.options.header;document.title=e.name+" | "+e.position,this.$el.innerHTML=this._setup()}}]),o}();exports.default=a;
},{"../templates/header":"EphO","../templates/education":"J71n","../templates/experience":"T5wl","../templates/profile":"pA1m","../templates/skills":"tPn4"}],"g94e":[function(require,module,exports) {

},{}],"bywQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("../cv-template"));function e(t){return t&&t.__esModule?t:{default:t}}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=l();return function(){var n,r=p(t);if(e){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}function a(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}require("./design_one.scss");var y=function(e){i(o,t.default);var n=f(o);function o(){return r(this,o),n.apply(this,arguments)}return c(o,[{key:"_setup",value:function(){return'<div class="cv_template">\n                <div class="content">\n                    <header>\n                        <div class="cv_template-row">\n                            '.concat(this.header,'\n                        </div>\n                    </header>\n                    \n                    <main>\n                        <div class="cv_template-row cv_template-two_columns">\n                            <div>\n                                ').concat(this.profile,"\n                                \n                                ").concat(this.experience,"\n    \n                            </div>\n                            \n                            <div>\n                                ").concat(this.education,"\n                                \n                                ").concat(this.skills,"\n    \n                            </div>\n                        </div>\n                    \n                    </main>\n\n                    <footer>\n                        ©2020\n                    </footer>\n\n                </div>\n            </div>")}}]),o}();exports.default=y;
},{"../cv-template":"HcQF","./design_one.scss":"g94e"}],"eHzx":[function(require,module,exports) {

},{"/Users/Samat/projects/my-website/src/fonts/Rubik-Medium.woff":[["Rubik-Medium.b1c4fae8.woff","fm3i"],"fm3i"],"/Users/Samat/projects/my-website/src/fonts/Rubik-Medium.woff2":[["Rubik-Medium.0334cb24.woff2","f2hs"],"f2hs"]}],"Focm":[function(require,module,exports) {
"use strict";var e=t(require("./src/designs/design_one"));function t(e){return e&&e.__esModule?e:{default:e}}require("./index.scss");var i={profile:{description:"At this moment I work with the booking system on the client, administrative, business owners' parts. I'm the only one frontender on the project. The system works in English, Russian, Japanese and Korean. My job is to create new interfaces, support current interfaces, add new functionality, work with designer and backend developer, fix bugs if there are any, sometimes I do translations from Russian to English and vice versa, and support our static site, which is also made by me. I prefer less libraries way of developing. <br /><br /> <b>I do not make emails.</b>"},header:{name:"Samat Zhetibaev",position:"Frontend developer",links:[{label:"samat1989@mail.ru",url:"mailto:samat1989@mail.ru"},{label:"+7(964)377-97-77",url:"tel:89643779777"},{label:"GitHub",url:"https://www.github.com/hellooldfriend"},{label:"Telegram",url:"https://www.t.me/get_in_touch"}],locationCity:"Saint Petersburg",locationCountry:"Russia",typeOfWork:"Full-time",areYouReadyForOffice:!1,areYouReadyToRelocate:!1},education:[{place:"Saint Petersburg's Polytechnic University",specialization:"Management",datetimeFrom:"2009",datetimeTo:"2014",locationCity:"Saint Petersburg",locationCountry:"Russia"}],extraEducation:[],experience:[{company:"TunnelTech",companyWebsite:"https://www.tunneltech.eu",position:"Frontend",datetimeFrom:"2017-06-15",datetimeTo:null,description:""}],skills:{experienced:["HTML","CSS","SCSS / SASS","JavaScript","React (before and after hooks)","Git / Mercurial"],skillful:["TypeScript","Redux","Webpack / Gulp / Parcel"],basic:["Jest / Puppeteer","React Native","Angular","Django templates","Python"],other:["GitLab","JIRA","Figma / Zeplin / Photoshop","Firebase","Storybook"]},languages:[{language:"English",level:"B2",description:""},{language:"Russian",level:"Native",description:null}],courses:[]};new e.default("root",i);
},{"./src/designs/design_one":"bywQ","./index.scss":"eHzx"}]},{},["Focm"], null)
//# sourceMappingURL=/my-website.03de3077.js.map