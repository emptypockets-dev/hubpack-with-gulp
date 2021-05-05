/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_general_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/general.js */ \"./src/js/general.js\");\n/* harmony import */ var _js_general_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_general_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/main.js */ \"./src/js/main.js\");\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/general.js":
/*!***************************!*\
  !*** ./src/js/general.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('this is from general');\n\n//# sourceURL=webpack:///./src/js/general.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n  // Polyfill for NodeList.prototype.forEach() in IE\n  if (window.NodeList && !NodeList.prototype.forEach) {\n    NodeList.prototype.forEach = function (callback, thisArg) {\n      thisArg = thisArg || window;\n\n      for (var i = 0; i < this.length; i++) {\n        callback.call(thisArg, this[i], i, this);\n      }\n    };\n  } // Variables\n\n\n  var nav = document.querySelector('.header__navigation');\n  var langSwitcher = document.querySelector('.header__language-switcher');\n  var search = document.querySelector('.header__search');\n  var allToggles = document.querySelectorAll('.header--toggle');\n  var navToggle = document.querySelector('.header__navigation--toggle');\n  var langToggle = document.querySelector('.header__language-switcher--toggle');\n  var searchToggle = document.querySelector('.header__search--toggle');\n  var closeToggle = document.querySelector('.header__close--toggle');\n  var allElements = document.querySelectorAll('.header--element, .header--toggle');\n  var emailGlobalUnsub = document.querySelector('input[name=\"globalunsub\"]'); // Functions\n  // Function for executing code on document ready\n\n  function domReady(callback) {\n    if (['interactive', 'complete'].indexOf(document.readyState) >= 0) {\n      callback();\n    } else {\n      document.addEventListener('DOMContentLoaded', callback);\n    }\n  } // Function for toggling mobile navigation\n\n\n  function toggleNav() {\n    allToggles.forEach(function (toggle) {\n      toggle.classList.toggle('hide');\n    });\n    nav.classList.toggle('open');\n    navToggle.classList.toggle('open');\n    closeToggle.classList.toggle('show');\n  } // Function for toggling mobile language selector\n\n\n  function toggleLang() {\n    allToggles.forEach(function (toggle) {\n      toggle.classList.toggle('hide');\n    });\n    langSwitcher.classList.toggle('open');\n    langToggle.classList.toggle('open');\n    closeToggle.classList.toggle('show');\n  } // Function for toggling mobile search field\n\n\n  function toggleSearch() {\n    allToggles.forEach(function (toggle) {\n      toggle.classList.toggle('hide');\n    });\n    search.classList.toggle('open');\n    searchToggle.classList.toggle('open');\n    closeToggle.classList.toggle('show');\n  } // Function for the header close option on mobile\n\n\n  function closeAll() {\n    allElements.forEach(function (element) {\n      element.classList.remove('hide', 'open');\n    });\n    closeToggle.classList.remove('show');\n  } // Function to disable the other checkbox inputs on the email subscription system page template\n\n\n  function toggleDisabled() {\n    var emailSubItem = document.querySelectorAll('#email-prefs-form .item');\n    emailSubItem.forEach(function (item) {\n      var emailSubItemInput = item.querySelector('input');\n\n      if (emailGlobalUnsub.checked) {\n        item.classList.add('disabled');\n        emailSubItemInput.setAttribute('disabled', 'disabled');\n        emailSubItemInput.checked = false;\n      } else {\n        item.classList.remove('disabled');\n        emailSubItemInput.removeAttribute('disabled');\n      }\n    });\n  } // Execute JavaScript on document ready\n\n\n  domReady(function () {\n    if (!document.body) {\n      return;\n    } else {\n      // Function dependent on language switcher\n      if (langSwitcher) {\n        langToggle.addEventListener('click', toggleLang);\n      } // Function dependent on navigation\n\n\n      if (navToggle) {\n        navToggle.addEventListener('click', toggleNav);\n      } // Function dependent on search field\n\n\n      if (searchToggle) {\n        searchToggle.addEventListener('click', toggleSearch);\n      } // Function dependent on close toggle\n\n\n      if (closeToggle) {\n        closeToggle.addEventListener('click', closeAll);\n      } // Function dependent on email unsubscribe from all input\n\n\n      if (emailGlobalUnsub) {\n        emailGlobalUnsub.addEventListener('change', toggleDisabled);\n      }\n    }\n  });\n})();\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });