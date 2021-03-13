module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("WhtB");


/***/ }),

/***/ "4VAe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./database/data.js
const data = [{
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1"
  },
  location: {
    name: "Earth (Replacement Dimension)",
    url: "https://rickandmortyapi.com/api/location/20"
  },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  episode: ["https://rickandmortyapi.com/api/episode/1", "https://rickandmortyapi.com/api/episode/2", "https://rickandmortyapi.com/api/episode/3", "https://rickandmortyapi.com/api/episode/4", "https://rickandmortyapi.com/api/episode/5", "https://rickandmortyapi.com/api/episode/6", "https://rickandmortyapi.com/api/episode/7", "https://rickandmortyapi.com/api/episode/8", "https://rickandmortyapi.com/api/episode/9", "https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/11", "https://rickandmortyapi.com/api/episode/12", "https://rickandmortyapi.com/api/episode/13", "https://rickandmortyapi.com/api/episode/14", "https://rickandmortyapi.com/api/episode/15", "https://rickandmortyapi.com/api/episode/16", "https://rickandmortyapi.com/api/episode/17", "https://rickandmortyapi.com/api/episode/18", "https://rickandmortyapi.com/api/episode/19", "https://rickandmortyapi.com/api/episode/20", "https://rickandmortyapi.com/api/episode/21", "https://rickandmortyapi.com/api/episode/22", "https://rickandmortyapi.com/api/episode/23", "https://rickandmortyapi.com/api/episode/24", "https://rickandmortyapi.com/api/episode/25", "https://rickandmortyapi.com/api/episode/26", "https://rickandmortyapi.com/api/episode/27", "https://rickandmortyapi.com/api/episode/28", "https://rickandmortyapi.com/api/episode/29", "https://rickandmortyapi.com/api/episode/30", "https://rickandmortyapi.com/api/episode/31", "https://rickandmortyapi.com/api/episode/32", "https://rickandmortyapi.com/api/episode/33", "https://rickandmortyapi.com/api/episode/34", "https://rickandmortyapi.com/api/episode/35", "https://rickandmortyapi.com/api/episode/36", "https://rickandmortyapi.com/api/episode/37", "https://rickandmortyapi.com/api/episode/38", "https://rickandmortyapi.com/api/episode/39", "https://rickandmortyapi.com/api/episode/40", "https://rickandmortyapi.com/api/episode/41"],
  url: "https://rickandmortyapi.com/api/character/1",
  created: "2017-11-04T18:48:46.250Z"
}, {
  id: 2,
  name: "Morty Smith",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1"
  },
  location: {
    name: "Earth (Replacement Dimension)",
    url: "https://rickandmortyapi.com/api/location/20"
  },
  image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  episode: ["https://rickandmortyapi.com/api/episode/1", "https://rickandmortyapi.com/api/episode/2", "https://rickandmortyapi.com/api/episode/3", "https://rickandmortyapi.com/api/episode/4", "https://rickandmortyapi.com/api/episode/5", "https://rickandmortyapi.com/api/episode/6", "https://rickandmortyapi.com/api/episode/7", "https://rickandmortyapi.com/api/episode/8", "https://rickandmortyapi.com/api/episode/9", "https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/11", "https://rickandmortyapi.com/api/episode/12", "https://rickandmortyapi.com/api/episode/13", "https://rickandmortyapi.com/api/episode/14", "https://rickandmortyapi.com/api/episode/15", "https://rickandmortyapi.com/api/episode/16", "https://rickandmortyapi.com/api/episode/17", "https://rickandmortyapi.com/api/episode/18", "https://rickandmortyapi.com/api/episode/19", "https://rickandmortyapi.com/api/episode/20", "https://rickandmortyapi.com/api/episode/21", "https://rickandmortyapi.com/api/episode/22", "https://rickandmortyapi.com/api/episode/23", "https://rickandmortyapi.com/api/episode/24", "https://rickandmortyapi.com/api/episode/25", "https://rickandmortyapi.com/api/episode/26", "https://rickandmortyapi.com/api/episode/27", "https://rickandmortyapi.com/api/episode/28", "https://rickandmortyapi.com/api/episode/29", "https://rickandmortyapi.com/api/episode/30", "https://rickandmortyapi.com/api/episode/31", "https://rickandmortyapi.com/api/episode/32", "https://rickandmortyapi.com/api/episode/33", "https://rickandmortyapi.com/api/episode/34", "https://rickandmortyapi.com/api/episode/35", "https://rickandmortyapi.com/api/episode/36", "https://rickandmortyapi.com/api/episode/37", "https://rickandmortyapi.com/api/episode/38", "https://rickandmortyapi.com/api/episode/39", "https://rickandmortyapi.com/api/episode/40", "https://rickandmortyapi.com/api/episode/41"],
  url: "https://rickandmortyapi.com/api/character/2",
  created: "2017-11-04T18:50:21.651Z"
}, {
  id: 3,
  name: "Summer Smith",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Female",
  origin: {
    name: "Earth (Replacement Dimension)",
    url: "https://rickandmortyapi.com/api/location/20"
  },
  location: {
    name: "Earth (Replacement Dimension)",
    url: "https://rickandmortyapi.com/api/location/20"
  },
  image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
  episode: ["https://rickandmortyapi.com/api/episode/6", "https://rickandmortyapi.com/api/episode/7", "https://rickandmortyapi.com/api/episode/8", "https://rickandmortyapi.com/api/episode/9", "https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/11", "https://rickandmortyapi.com/api/episode/12", "https://rickandmortyapi.com/api/episode/14", "https://rickandmortyapi.com/api/episode/15", "https://rickandmortyapi.com/api/episode/16", "https://rickandmortyapi.com/api/episode/17", "https://rickandmortyapi.com/api/episode/18", "https://rickandmortyapi.com/api/episode/19", "https://rickandmortyapi.com/api/episode/20", "https://rickandmortyapi.com/api/episode/21", "https://rickandmortyapi.com/api/episode/22", "https://rickandmortyapi.com/api/episode/23", "https://rickandmortyapi.com/api/episode/24", "https://rickandmortyapi.com/api/episode/25", "https://rickandmortyapi.com/api/episode/26", "https://rickandmortyapi.com/api/episode/27", "https://rickandmortyapi.com/api/episode/29", "https://rickandmortyapi.com/api/episode/30", "https://rickandmortyapi.com/api/episode/31", "https://rickandmortyapi.com/api/episode/32", "https://rickandmortyapi.com/api/episode/33", "https://rickandmortyapi.com/api/episode/34", "https://rickandmortyapi.com/api/episode/35", "https://rickandmortyapi.com/api/episode/36", "https://rickandmortyapi.com/api/episode/38", "https://rickandmortyapi.com/api/episode/39", "https://rickandmortyapi.com/api/episode/40", "https://rickandmortyapi.com/api/episode/41"],
  url: "https://rickandmortyapi.com/api/character/3",
  created: "2017-11-04T19:09:56.428Z"
}, {
  id: 4,
  name: "Beth Smith",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Female",
  origin: {
    name: "Earth (Replacement Dimension)",
    url: "https://rickandmortyapi.com/api/location/20"
  },
  location: {
    name: "Earth (Replacement Dimension)",
    url: "https://rickandmortyapi.com/api/location/20"
  },
  image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
  episode: ["https://rickandmortyapi.com/api/episode/6", "https://rickandmortyapi.com/api/episode/7", "https://rickandmortyapi.com/api/episode/8", "https://rickandmortyapi.com/api/episode/9", "https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/11", "https://rickandmortyapi.com/api/episode/12", "https://rickandmortyapi.com/api/episode/14", "https://rickandmortyapi.com/api/episode/15", "https://rickandmortyapi.com/api/episode/16", "https://rickandmortyapi.com/api/episode/18", "https://rickandmortyapi.com/api/episode/19", "https://rickandmortyapi.com/api/episode/20", "https://rickandmortyapi.com/api/episode/21", "https://rickandmortyapi.com/api/episode/22", "https://rickandmortyapi.com/api/episode/23", "https://rickandmortyapi.com/api/episode/24", "https://rickandmortyapi.com/api/episode/25", "https://rickandmortyapi.com/api/episode/26", "https://rickandmortyapi.com/api/episode/27", "https://rickandmortyapi.com/api/episode/28", "https://rickandmortyapi.com/api/episode/29", "https://rickandmortyapi.com/api/episode/30", "https://rickandmortyapi.com/api/episode/31", "https://rickandmortyapi.com/api/episode/32", "https://rickandmortyapi.com/api/episode/33", "https://rickandmortyapi.com/api/episode/34", "https://rickandmortyapi.com/api/episode/35", "https://rickandmortyapi.com/api/episode/36", "https://rickandmortyapi.com/api/episode/38", "https://rickandmortyapi.com/api/episode/39", "https://rickandmortyapi.com/api/episode/40", "https://rickandmortyapi.com/api/episode/41"],
  url: "https://rickandmortyapi.com/api/character/4",
  created: "2017-11-04T19:22:43.665Z"
}, {
  id: 5,
  name: "Jerry Smith",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
    name: "Earth (Replacement Dimension)",
    url: "https://rickandmortyapi.com/api/location/20"
  },
  location: {
    name: "Earth (Replacement Dimension)",
    url: "https://rickandmortyapi.com/api/location/20"
  },
  image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
  episode: ["https://rickandmortyapi.com/api/episode/6", "https://rickandmortyapi.com/api/episode/7", "https://rickandmortyapi.com/api/episode/8", "https://rickandmortyapi.com/api/episode/9", "https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/11", "https://rickandmortyapi.com/api/episode/12", "https://rickandmortyapi.com/api/episode/13", "https://rickandmortyapi.com/api/episode/14", "https://rickandmortyapi.com/api/episode/15", "https://rickandmortyapi.com/api/episode/16", "https://rickandmortyapi.com/api/episode/18", "https://rickandmortyapi.com/api/episode/19", "https://rickandmortyapi.com/api/episode/20", "https://rickandmortyapi.com/api/episode/21", "https://rickandmortyapi.com/api/episode/22", "https://rickandmortyapi.com/api/episode/23", "https://rickandmortyapi.com/api/episode/26", "https://rickandmortyapi.com/api/episode/29", "https://rickandmortyapi.com/api/episode/30", "https://rickandmortyapi.com/api/episode/31", "https://rickandmortyapi.com/api/episode/32", "https://rickandmortyapi.com/api/episode/33", "https://rickandmortyapi.com/api/episode/35", "https://rickandmortyapi.com/api/episode/36", "https://rickandmortyapi.com/api/episode/38", "https://rickandmortyapi.com/api/episode/39", "https://rickandmortyapi.com/api/episode/40", "https://rickandmortyapi.com/api/episode/41"],
  url: "https://rickandmortyapi.com/api/character/5",
  created: "2017-11-04T19:26:56.301Z"
}, {
  id: 6,
  name: "Abadango Cluster Princess",
  status: "Alive",
  species: "Alien",
  type: "",
  gender: "Female",
  origin: {
    name: "Abadango",
    url: "https://rickandmortyapi.com/api/location/2"
  },
  location: {
    name: "Abadango",
    url: "https://rickandmortyapi.com/api/location/2"
  },
  image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
  episode: ["https://rickandmortyapi.com/api/episode/27"],
  url: "https://rickandmortyapi.com/api/character/6",
  created: "2017-11-04T19:50:28.250Z"
}, {
  id: 7,
  name: "Abradolf Lincler",
  status: "unknown",
  species: "Human",
  type: "Genetic experiment",
  gender: "Male",
  origin: {
    name: "Earth (Replacement Dimension)",
    url: "https://rickandmortyapi.com/api/location/20"
  },
  location: {
    name: "Testicle Monster Dimension",
    url: "https://rickandmortyapi.com/api/location/21"
  },
  image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
  episode: ["https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/11"],
  url: "https://rickandmortyapi.com/api/character/7",
  created: "2017-11-04T19:59:20.523Z"
}, {
  id: 8,
  name: "Adjudicator Rick",
  status: "Dead",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
    name: "unknown",
    url: ""
  },
  location: {
    name: "Citadel of Ricks",
    url: "https://rickandmortyapi.com/api/location/3"
  },
  image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
  episode: ["https://rickandmortyapi.com/api/episode/28"],
  url: "https://rickandmortyapi.com/api/character/8",
  created: "2017-11-04T20:03:34.737Z"
}, {
  id: 9,
  name: "Agency Director",
  status: "Dead",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
    name: "Earth (Replacement Dimension)",
    url: "https://rickandmortyapi.com/api/location/20"
  },
  location: {
    name: "Earth (Replacement Dimension)",
    url: "https://rickandmortyapi.com/api/location/20"
  },
  image: "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
  episode: ["https://rickandmortyapi.com/api/episode/24"],
  url: "https://rickandmortyapi.com/api/character/9",
  created: "2017-11-04T20:06:54.976Z"
}, {
  id: 10,
  name: "Alan Rails",
  status: "Dead",
  species: "Human",
  type: "Superhuman (Ghost trains summoner)",
  gender: "Male",
  origin: {
    name: "unknown",
    url: ""
  },
  location: {
    name: "Worldender's lair",
    url: "https://rickandmortyapi.com/api/location/4"
  },
  image: "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
  episode: ["https://rickandmortyapi.com/api/episode/25"],
  url: "https://rickandmortyapi.com/api/character/10",
  created: "2017-11-04T20:19:09.017Z"
}, {
  id: 11,
  name: "Albert Einstein",
  status: "Dead",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1"
  },
  location: {
    name: "Earth (Replacement Dimension)",
    url: "https://rickandmortyapi.com/api/location/20"
  },
  image: "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
  episode: ["https://rickandmortyapi.com/api/episode/12"],
  url: "https://rickandmortyapi.com/api/character/11",
  created: "2017-11-04T20:20:20.965Z"
}, {
  id: 12,
  name: "Alexander",
  status: "Dead",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1"
  },
  location: {
    name: "Anatomy Park",
    url: "https://rickandmortyapi.com/api/location/5"
  },
  image: "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
  episode: ["https://rickandmortyapi.com/api/episode/3"],
  url: "https://rickandmortyapi.com/api/character/12",
  created: "2017-11-04T20:32:33.144Z"
}, {
  id: 13,
  name: "Alien Googah",
  status: "unknown",
  species: "Alien",
  type: "",
  gender: "unknown",
  origin: {
    name: "unknown",
    url: ""
  },
  location: {
    name: "Earth (Replacement Dimension)",
    url: "https://rickandmortyapi.com/api/location/20"
  },
  image: "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
  episode: ["https://rickandmortyapi.com/api/episode/31"],
  url: "https://rickandmortyapi.com/api/character/13",
  created: "2017-11-04T20:33:30.779Z"
}, {
  id: 14,
  name: "Alien Morty",
  status: "unknown",
  species: "Alien",
  type: "",
  gender: "Male",
  origin: {
    name: "unknown",
    url: ""
  },
  location: {
    name: "Citadel of Ricks",
    url: "https://rickandmortyapi.com/api/location/3"
  },
  image: "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
  episode: ["https://rickandmortyapi.com/api/episode/10"],
  url: "https://rickandmortyapi.com/api/character/14",
  created: "2017-11-04T20:51:31.373Z"
}, {
  id: 15,
  name: "Alien Rick",
  status: "unknown",
  species: "Alien",
  type: "",
  gender: "Male",
  origin: {
    name: "unknown",
    url: ""
  },
  location: {
    name: "Citadel of Ricks",
    url: "https://rickandmortyapi.com/api/location/3"
  },
  image: "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
  episode: ["https://rickandmortyapi.com/api/episode/10"],
  url: "https://rickandmortyapi.com/api/character/15",
  created: "2017-11-04T20:56:13.215Z"
}, {
  id: 16,
  name: "Amish Cyborg",
  status: "Dead",
  species: "Alien",
  type: "Parasite",
  gender: "Male",
  origin: {
    name: "unknown",
    url: ""
  },
  location: {
    name: "Earth (Replacement Dimension)",
    url: "https://rickandmortyapi.com/api/location/20"
  },
  image: "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
  episode: ["https://rickandmortyapi.com/api/episode/15"],
  url: "https://rickandmortyapi.com/api/character/16",
  created: "2017-11-04T21:12:45.235Z"
}, {
  id: 17,
  name: "Annie",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Female",
  origin: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1"
  },
  location: {
    name: "Anatomy Park",
    url: "https://rickandmortyapi.com/api/location/5"
  },
  image: "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
  episode: ["https://rickandmortyapi.com/api/episode/3"],
  url: "https://rickandmortyapi.com/api/character/17",
  created: "2017-11-04T22:21:24.481Z"
}, {
  id: 18,
  name: "Antenna Morty",
  status: "Alive",
  species: "Human",
  type: "Human with antennae",
  gender: "Male",
  origin: {
    name: "unknown",
    url: ""
  },
  location: {
    name: "Citadel of Ricks",
    url: "https://rickandmortyapi.com/api/location/3"
  },
  image: "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
  episode: ["https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/28"],
  url: "https://rickandmortyapi.com/api/character/18",
  created: "2017-11-04T22:25:29.008Z"
}, {
  id: 19,
  name: "Antenna Rick",
  status: "unknown",
  species: "Human",
  type: "Human with antennae",
  gender: "Male",
  origin: {
    name: "unknown",
    url: ""
  },
  location: {
    name: "unknown",
    url: ""
  },
  image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
  episode: ["https://rickandmortyapi.com/api/episode/10"],
  url: "https://rickandmortyapi.com/api/character/19",
  created: "2017-11-04T22:28:13.756Z"
}, {
  id: 20,
  name: "Ants in my Eyes Johnson",
  status: "unknown",
  species: "Human",
  type: "Human with ants in his eyes",
  gender: "Male",
  origin: {
    name: "unknown",
    url: ""
  },
  location: {
    name: "Interdimensional Cable",
    url: "https://rickandmortyapi.com/api/location/6"
  },
  image: "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
  episode: ["https://rickandmortyapi.com/api/episode/8"],
  url: "https://rickandmortyapi.com/api/character/20",
  created: "2017-11-04T22:34:53.659Z"
}];
/* harmony default export */ var database_data = (data);
// CONCATENATED MODULE: ./database/db.js


class db_Database {
  constructor() {}

  getAll() {
    return new Promise(async (resolve, reject) => {
      try {
        const asArray = Object.values(database_data);
        console.log("allDATA:", asArray);
        await randomDelay();
        resolve(asArray);
      } catch (error) {
        reject(error);
      }
    });
  }

  getById(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const character = Object.values(database_data).find(character => character.id === id);
        await randomDelay();
        resolve(character);
      } catch (error) {
        reject(error);
      }
    });
  }

}

const randomDelay = () => new Promise(resolve => {
  const max = 350;
  const min = 100;
  const delay = Math.floor(Math.random() * (max - min + 1)) + min;
  setTimeout(resolve, delay);
});

/* harmony default export */ var db = __webpack_exports__["a"] = (db_Database);

/***/ }),

/***/ "Pmoa":
/***/ (function(module, exports) {

module.exports = require("next");

/***/ }),

/***/ "WhtB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Pmoa");
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4VAe");



const allCharacters = async (request = next__WEBPACK_IMPORTED_MODULE_0__["NextApiRequest"], response = next__WEBPACK_IMPORTED_MODULE_0__["NextApiResponse"]) => {
  const db = new _database_db__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]();
  const id = request.query.id;
  const character = await db.getById(id);
  response.status(200).json(character);
};

/* harmony default export */ __webpack_exports__["default"] = (allCharacters);

/***/ })

/******/ });