// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/templates/header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = headerTemplate;

function headerTemplate(data) {
  if (!data) return null;
  return "\n        <div class=\"cv_template-block cv_template-header\">\n            <h1>".concat(data.name, "</h1>\n            <div class=\"cv_template-header-title\">").concat(data.position, "</div>\n            \n            <div class=\"cv_template-links\">\n                ").concat(data.links.map(function (link, index) {
    return "<a \n                            class=\"cv_template-link\"\n                            href=\"".concat(link.url, "\"    \n                        >").concat(link.label, "</a>");
  }).join(''), "\n            </div>\n        </div>\n    ");
}
},{}],"src/templates/education.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = educationTemplate;

function educationTemplate(data) {
  if (!data || !data.length) return null;
  return "\n        <div class=\"cv_template-block\">\n            <h2>Education</h2>\n            ".concat(data.map(function (education) {
    return "\n                    <div>                        \n                        <div class=\"cv_template-education-place\">\n                            ".concat(education.place, "\n                        </div>                \n                        <div class=\"cv_template-education-specialization\">\n                            ").concat(education.specialization, "\n                        </div>           \n                        <div class=\"cv_template-education-info\">\n                            <div class=\"cv_template-education-dates\">\n                                ").concat(education.datetimeFrom, " \u2013 ").concat(education.datetimeTo, "\n                            </div>\n                            <div class=\"cv_template-education-location\">\n                                ").concat(education.locationCity, ", ").concat(education.locationCountry, "\n                            </div>\n                        </div>\n                    </div>\n                ");
  }), "\n        </div>\n    ");
}
},{}],"src/templates/experience.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = experienceTemplate;

function experienceTemplate(data) {
  if (!data || !data.length) return null;
  return "\n        <div class=\"cv_template-block\">\n            <h2>Experience</h2>\n            ".concat(data.map(function (experience) {
    return "\n                    <div>\n                        <h3>".concat(experience.position, "</h3>\n                        <div class=\"cv_template-experience-company\">\n                            <a href=\"").concat(experience.companyWebsite, "\">\n                                ").concat(experience.company, "\n                            </a>\n                        </div>\n                        \n                        <div class=\"cv_template-experience-info\">\n                            ").concat(experience.datetimeFrom, " \u2013 ").concat(renderDatetime(experience.datetimeTo), "\n                        </div>\n                        \n                        <div class=\"cv_template-experience-description\">\n                            ").concat(experience.description, "\n                        </div>\n                    </div>\n                ");
  }), "\n        </div>\n    ");
}

function renderDatetime(datetime) {
  if (datetime === null) return 'Ongoing';
  return datetime;
}

function countTotalDatetime(from, to) {}
},{}],"src/templates/profile.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = profileTemplate;

function profileTemplate(data) {
  if (!data) return null;
  return "\n        <div class=\"cv_template-block\">\n            <h2>Profile</h2>\n            <div>\n                ".concat(data.description, "\n            </div>\n        </div>\n    ");
}
},{}],"src/templates/skills.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = skillsTemplate;

function skillsTemplate(data) {
  if (!data) return null;
  var dataArray = Object.entries(data);
  return "\n        <div class=\"cv_template-block\">\n            <h2>Skills</h2>\n            ".concat(dataArray.map(function (skillSet) {
    if (!skillSet[1].length) return null;
    return "\n                    <div>\n                        <h3>".concat(formatTitle(skillSet[0]), ":</h3>\n                        ").concat(skillSet[1].map(function (skill) {
      return "<div>\u2013 ".concat(skill, "</div>");
    }).join(''), "\n                    </div>\n                ");
  }).join(''), "\n        </div>\n    ");
}

function formatTitle(title) {
  return title[0].toUpperCase() + title.slice(1);
}
},{}],"src/cv-template/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _header = _interopRequireDefault(require("../templates/header"));

var _education = _interopRequireDefault(require("../templates/education"));

var _experience = _interopRequireDefault(require("../templates/experience"));

var _profile = _interopRequireDefault(require("../templates/profile"));

var _skills = _interopRequireDefault(require("../templates/skills"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CVTemplate = /*#__PURE__*/function () {
  function CVTemplate(selector, options) {
    _classCallCheck(this, CVTemplate);

    this.$el = document.getElementById(selector);
    this.options = options;
    this.profile = (0, _profile.default)(this.options.profile);
    this.header = (0, _header.default)(this.options.header);
    this.education = (0, _education.default)(this.options.education);
    this.experience = (0, _experience.default)(this.options.experience);
    this.skills = (0, _skills.default)(this.options.skills);

    this._render();
  }

  _createClass(CVTemplate, [{
    key: "_setup",
    value: function _setup() {
      throw new Error('This method should be implemented');
    }
  }, {
    key: "_render",
    value: function _render() {
      var header = this.options.header;
      document.title = header.name + ' | ' + header.position;
      this.$el.innerHTML = this._setup();
    }
  }]);

  return CVTemplate;
}();

exports.default = CVTemplate;
},{"../templates/header":"src/templates/header.js","../templates/education":"src/templates/education.js","../templates/experience":"src/templates/experience.js","../templates/profile":"src/templates/profile.js","../templates/skills":"src/templates/skills.js"}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/designs/design_one.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/designs/design_one.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _cvTemplate = _interopRequireDefault(require("../cv-template"));

require("./design_one.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var CVTemplateDesign1 = /*#__PURE__*/function (_CVTemplate) {
  _inherits(CVTemplateDesign1, _CVTemplate);

  var _super = _createSuper(CVTemplateDesign1);

  function CVTemplateDesign1() {
    _classCallCheck(this, CVTemplateDesign1);

    return _super.apply(this, arguments);
  }

  _createClass(CVTemplateDesign1, [{
    key: "_setup",
    value: function _setup() {
      return "<div class=\"cv_template\">\n                <div class=\"content\">\n                    <header>\n                        <div class=\"cv_template-row\">\n                            ".concat(this.header, "\n                        </div>\n                    </header>\n                    \n                    <main>\n                        <div class=\"cv_template-row cv_template-two_columns\">\n                            <div>\n                                ").concat(this.profile, "\n                                \n                                ").concat(this.experience, "\n    \n                            </div>\n                            \n                            <div>\n                                ").concat(this.education, "\n                                \n                                ").concat(this.skills, "\n    \n                            </div>\n                        </div>\n                    \n                    </main>\n\n                    <footer>\n                        \xA92020\n                    </footer>\n\n                </div>\n            </div>");
    }
  }]);

  return CVTemplateDesign1;
}(_cvTemplate.default);

exports.default = CVTemplateDesign1;
},{"../cv-template":"src/cv-template/index.js","./design_one.scss":"src/designs/design_one.scss"}],"index.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"/Users/Samat/projects/my-website/src/fonts/Rubik-Medium.woff":[["Rubik-Medium.70fe8961.woff","src/fonts/Rubik-Medium.woff"],"src/fonts/Rubik-Medium.woff"],"/Users/Samat/projects/my-website/src/fonts/Rubik-Medium.woff2":[["Rubik-Medium.48f37735.woff2","src/fonts/Rubik-Medium.woff2"],"src/fonts/Rubik-Medium.woff2"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _design_one = _interopRequireDefault(require("./src/designs/design_one"));

require("./index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = {
  profile: {
    description: 'At this moment I work with the booking system on the client, administrative, business owners\' parts. ' + 'I\'m the only one frontender on the project. The system works in English, Russian, Japanese and Korean. ' + 'My job is to create new interfaces, support current interfaces, add new functionality, work with designer and backend developer, fix bugs if there are any, ' + 'sometimes I do translations from Russian to English and vice versa, and support our static site, which is also made by me. ' + 'I prefer less libraries way of developing. ' + '<br /><br /> <b>I do not make emails.</b>'
  },
  header: {
    name: 'Samat Zhetibaev',
    position: 'Frontend developer',
    links: [{
      label: 'samat1989@mail.ru',
      url: 'mailto:samat1989@mail.ru'
    }, {
      label: '+7(964)377-97-77',
      url: 'tel:89643779777'
    }, {
      label: 'GitHub',
      url: 'https://www.github.com/hellooldfriend'
    }, {
      label: 'Telegram',
      url: 'https://www.t.me/get_in_touch'
    }],
    locationCity: 'Saint Petersburg',
    locationCountry: 'Russia',
    typeOfWork: 'Full-time',
    // remotely
    areYouReadyForOffice: false,
    areYouReadyToRelocate: false
  },
  education: [{
    place: "Saint Petersburg's Polytechnic University",
    specialization: 'Management',
    datetimeFrom: '2009',
    datetimeTo: '2014',
    locationCity: 'Saint Petersburg',
    locationCountry: 'Russia'
  }],
  extraEducation: [],
  experience: [{
    company: 'TunnelTech',
    companyWebsite: 'https://www.tunneltech.eu',
    position: 'Frontend',
    datetimeFrom: '2017-06-15',
    datetimeTo: null,
    // null if current
    description: ''
  }],
  skills: {
    experienced: ['HTML', 'CSS', 'SCSS / SASS', 'JavaScript', 'React (before and after hooks)', 'Git / Mercurial'],
    skillful: ['TypeScript', 'Redux', 'Webpack / Gulp / Parcel'],
    basic: ['Jest / Puppeteer', 'React Native', 'Angular', 'Django templates', 'Python'],
    other: ['GitLab', 'JIRA', 'Figma / Zeplin / Photoshop', 'Firebase', 'Storybook']
  },
  languages: [{
    language: 'English',
    level: 'B2',
    description: ''
  }, {
    language: 'Russian',
    level: 'Native',
    description: null
  }],
  courses: []
};
new _design_one.default('root', options);
},{"./src/designs/design_one":"src/designs/design_one.js","./index.scss":"index.scss"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63753" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/my-website.e31bb0bc.js.map