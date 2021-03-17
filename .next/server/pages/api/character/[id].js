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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/character/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./database/data.js":
/*!**************************!*\
  !*** ./database/data.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./database/db.js":
/*!************************!*\
  !*** ./database/db.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./database/data.js");


class Database {
  constructor() {}

  getAll() {
    return new Promise(async (resolve, reject) => {
      try {
        const asArray = Object.values(_data__WEBPACK_IMPORTED_MODULE_0__["default"]);
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
        const character = Object.values(_data__WEBPACK_IMPORTED_MODULE_0__["default"]).find(character => character.id === id);
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

/* harmony default export */ __webpack_exports__["default"] = (Database);

/***/ }),

/***/ "./pages/api/character/[id].js":
/*!*************************************!*\
  !*** ./pages/api/character/[id].js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _database_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../database/db */ "./database/db.js");


const allCharacters = async (request, response) => {
  const db = new _database_db__WEBPACK_IMPORTED_MODULE_0__["default"]();
  const id = request.query.id;
  const character = await db.getById(id);
  response.statusCode = 200;
  response.setHeader("Content-type", "application/json");
  response.end(JSON.stringify({
    data: character
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (allCharacters);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGF0YWJhc2UvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhYmFzZS9kYi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY2hhcmFjdGVyLy5qcyJdLCJuYW1lcyI6WyJkYXRhIiwiaWQiLCJuYW1lIiwic3RhdHVzIiwic3BlY2llcyIsInR5cGUiLCJnZW5kZXIiLCJvcmlnaW4iLCJ1cmwiLCJsb2NhdGlvbiIsImltYWdlIiwiZXBpc29kZSIsImNyZWF0ZWQiLCJEYXRhYmFzZSIsImNvbnN0cnVjdG9yIiwiZ2V0QWxsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhc0FycmF5IiwiT2JqZWN0IiwidmFsdWVzIiwiYWxsRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJyYW5kb21EZWxheSIsImVycm9yIiwiZ2V0QnlJZCIsImNoYXJhY3RlciIsImZpbmQiLCJtYXgiLCJtaW4iLCJkZWxheSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNldFRpbWVvdXQiLCJhbGxDaGFyYWN0ZXJzIiwicmVxdWVzdCIsInJlc3BvbnNlIiwiZGIiLCJEQiIsInF1ZXJ5Iiwic3RhdHVzQ29kZSIsInNldEhlYWRlciIsImVuZCIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FB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OztBQVNlbkIsdUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQUE7QUFBQTs7QUFFQSxNQUFNd0IsYUFBYSxHQUFHLE9BQU9DLE9BQVAsRUFBZ0JDLFFBQWhCLEtBQTZCO0FBQ2pELFFBQU1DLEVBQUUsR0FBRyxJQUFJQyxvREFBSixFQUFYO0FBRUEsUUFBTXhDLEVBQUUsR0FBR3FDLE9BQU8sQ0FBQ0ksS0FBUixDQUFjekMsRUFBekI7QUFFQSxRQUFNMkIsU0FBUyxHQUFHLE1BQU1ZLEVBQUUsQ0FBQ2IsT0FBSCxDQUFXMUIsRUFBWCxDQUF4QjtBQUVBc0MsVUFBUSxDQUFDSSxVQUFULEdBQXNCLEdBQXRCO0FBQ0FKLFVBQVEsQ0FBQ0ssU0FBVCxDQUFtQixjQUFuQixFQUFtQyxrQkFBbkM7QUFDQUwsVUFBUSxDQUFDTSxHQUFULENBQWFDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUUvQyxRQUFJLEVBQUU0QjtBQUFSLEdBQWYsQ0FBYjtBQUNELENBVkQ7O0FBWWVTLDRFQUFmLEUiLCJmaWxlIjoicGFnZXMvYXBpL2NoYXJhY3Rlci9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvY2hhcmFjdGVyL1tpZF0uanNcIik7XG4iLCJjb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmFtZTogXCJSaWNrIFNhbmNoZXpcIixcclxuICAgIHN0YXR1czogXCJBbGl2ZVwiLFxyXG4gICAgc3BlY2llczogXCJIdW1hblwiLFxyXG4gICAgdHlwZTogXCJcIixcclxuICAgIGdlbmRlcjogXCJNYWxlXCIsXHJcbiAgICBvcmlnaW46IHtcclxuICAgICAgbmFtZTogXCJFYXJ0aCAoQy0xMzcpXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2xvY2F0aW9uLzFcIixcclxuICAgIH0sXHJcbiAgICBsb2NhdGlvbjoge1xyXG4gICAgICBuYW1lOiBcIkVhcnRoIChSZXBsYWNlbWVudCBEaW1lbnNpb24pXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2xvY2F0aW9uLzIwXCIsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvYXZhdGFyLzEuanBlZ1wiLFxyXG4gICAgZXBpc29kZTogW1xyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzJcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvM1wiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS80XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzVcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvNlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS83XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzhcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvOVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xMFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xMVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xMlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xM1wiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xNFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xNVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xNlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xN1wiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xOFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xOVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yMFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yMVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yMlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yM1wiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yNFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yNVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yNlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yN1wiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yOFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yOVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zMFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zMVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zMlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zM1wiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zNFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zNVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zNlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zN1wiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zOFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zOVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS80MFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS80MVwiLFxyXG4gICAgXSxcclxuICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci8xXCIsXHJcbiAgICBjcmVhdGVkOiBcIjIwMTctMTEtMDRUMTg6NDg6NDYuMjUwWlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBuYW1lOiBcIk1vcnR5IFNtaXRoXCIsXHJcbiAgICBzdGF0dXM6IFwiQWxpdmVcIixcclxuICAgIHNwZWNpZXM6IFwiSHVtYW5cIixcclxuICAgIHR5cGU6IFwiXCIsXHJcbiAgICBnZW5kZXI6IFwiTWFsZVwiLFxyXG4gICAgb3JpZ2luOiB7XHJcbiAgICAgIG5hbWU6IFwiRWFydGggKEMtMTM3KVwiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9sb2NhdGlvbi8xXCIsXHJcbiAgICB9LFxyXG4gICAgbG9jYXRpb246IHtcclxuICAgICAgbmFtZTogXCJFYXJ0aCAoUmVwbGFjZW1lbnQgRGltZW5zaW9uKVwiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9sb2NhdGlvbi8yMFwiLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyL2F2YXRhci8yLmpwZWdcIixcclxuICAgIGVwaXNvZGU6IFtcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzNcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvNFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS81XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzZcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvN1wiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS84XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzlcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMTBcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMTFcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMTJcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMTNcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMTRcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMTVcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMTZcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMTdcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMThcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMTlcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMjBcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMjFcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMjJcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMjNcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMjRcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMjVcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMjZcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMjdcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMjhcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMjlcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMzBcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMzFcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMzJcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMzNcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMzRcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMzVcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMzZcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMzdcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMzhcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMzlcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvNDBcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvNDFcIixcclxuICAgIF0sXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvMlwiLFxyXG4gICAgY3JlYXRlZDogXCIyMDE3LTExLTA0VDE4OjUwOjIxLjY1MVpcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgbmFtZTogXCJTdW1tZXIgU21pdGhcIixcclxuICAgIHN0YXR1czogXCJBbGl2ZVwiLFxyXG4gICAgc3BlY2llczogXCJIdW1hblwiLFxyXG4gICAgdHlwZTogXCJcIixcclxuICAgIGdlbmRlcjogXCJGZW1hbGVcIixcclxuICAgIG9yaWdpbjoge1xyXG4gICAgICBuYW1lOiBcIkVhcnRoIChSZXBsYWNlbWVudCBEaW1lbnNpb24pXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2xvY2F0aW9uLzIwXCIsXHJcbiAgICB9LFxyXG4gICAgbG9jYXRpb246IHtcclxuICAgICAgbmFtZTogXCJFYXJ0aCAoUmVwbGFjZW1lbnQgRGltZW5zaW9uKVwiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9sb2NhdGlvbi8yMFwiLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyL2F2YXRhci8zLmpwZWdcIixcclxuICAgIGVwaXNvZGU6IFtcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvNlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS83XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzhcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvOVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xMFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xMVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xMlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xNFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xNVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xNlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xN1wiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xOFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xOVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yMFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yMVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yMlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yM1wiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yNFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yNVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yNlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yN1wiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yOVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zMFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zMVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zMlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zM1wiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zNFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zNVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zNlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zOFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zOVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS80MFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS80MVwiLFxyXG4gICAgXSxcclxuICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci8zXCIsXHJcbiAgICBjcmVhdGVkOiBcIjIwMTctMTEtMDRUMTk6MDk6NTYuNDI4WlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICBuYW1lOiBcIkJldGggU21pdGhcIixcclxuICAgIHN0YXR1czogXCJBbGl2ZVwiLFxyXG4gICAgc3BlY2llczogXCJIdW1hblwiLFxyXG4gICAgdHlwZTogXCJcIixcclxuICAgIGdlbmRlcjogXCJGZW1hbGVcIixcclxuICAgIG9yaWdpbjoge1xyXG4gICAgICBuYW1lOiBcIkVhcnRoIChSZXBsYWNlbWVudCBEaW1lbnNpb24pXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2xvY2F0aW9uLzIwXCIsXHJcbiAgICB9LFxyXG4gICAgbG9jYXRpb246IHtcclxuICAgICAgbmFtZTogXCJFYXJ0aCAoUmVwbGFjZW1lbnQgRGltZW5zaW9uKVwiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9sb2NhdGlvbi8yMFwiLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyL2F2YXRhci80LmpwZWdcIixcclxuICAgIGVwaXNvZGU6IFtcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvNlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS83XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzhcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvOVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xMFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xMVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xMlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xNFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xNVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xNlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xOFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xOVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yMFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yMVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yMlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yM1wiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yNFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yNVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yNlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yN1wiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yOFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yOVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zMFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zMVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zMlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zM1wiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zNFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zNVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zNlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zOFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zOVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS80MFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS80MVwiLFxyXG4gICAgXSxcclxuICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci80XCIsXHJcbiAgICBjcmVhdGVkOiBcIjIwMTctMTEtMDRUMTk6MjI6NDMuNjY1WlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUsXHJcbiAgICBuYW1lOiBcIkplcnJ5IFNtaXRoXCIsXHJcbiAgICBzdGF0dXM6IFwiQWxpdmVcIixcclxuICAgIHNwZWNpZXM6IFwiSHVtYW5cIixcclxuICAgIHR5cGU6IFwiXCIsXHJcbiAgICBnZW5kZXI6IFwiTWFsZVwiLFxyXG4gICAgb3JpZ2luOiB7XHJcbiAgICAgIG5hbWU6IFwiRWFydGggKFJlcGxhY2VtZW50IERpbWVuc2lvbilcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvbG9jYXRpb24vMjBcIixcclxuICAgIH0sXHJcbiAgICBsb2NhdGlvbjoge1xyXG4gICAgICBuYW1lOiBcIkVhcnRoIChSZXBsYWNlbWVudCBEaW1lbnNpb24pXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2xvY2F0aW9uLzIwXCIsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvYXZhdGFyLzUuanBlZ1wiLFxyXG4gICAgZXBpc29kZTogW1xyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS82XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzdcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvOFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS85XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzEwXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzExXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzEyXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzEzXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzE0XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzE1XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzE2XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzE4XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzE5XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzIwXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzIxXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzIyXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzIzXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzI2XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzI5XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzMwXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzMxXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzMyXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzMzXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzM1XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzM2XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzM4XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzM5XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzQwXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzQxXCIsXHJcbiAgICBdLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyLzVcIixcclxuICAgIGNyZWF0ZWQ6IFwiMjAxNy0xMS0wNFQxOToyNjo1Ni4zMDFaXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNixcclxuICAgIG5hbWU6IFwiQWJhZGFuZ28gQ2x1c3RlciBQcmluY2Vzc1wiLFxyXG4gICAgc3RhdHVzOiBcIkFsaXZlXCIsXHJcbiAgICBzcGVjaWVzOiBcIkFsaWVuXCIsXHJcbiAgICB0eXBlOiBcIlwiLFxyXG4gICAgZ2VuZGVyOiBcIkZlbWFsZVwiLFxyXG4gICAgb3JpZ2luOiB7XHJcbiAgICAgIG5hbWU6IFwiQWJhZGFuZ29cIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvbG9jYXRpb24vMlwiLFxyXG4gICAgfSxcclxuICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgIG5hbWU6IFwiQWJhZGFuZ29cIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvbG9jYXRpb24vMlwiLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyL2F2YXRhci82LmpwZWdcIixcclxuICAgIGVwaXNvZGU6IFtcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yN1wiXSxcclxuICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci82XCIsXHJcbiAgICBjcmVhdGVkOiBcIjIwMTctMTEtMDRUMTk6NTA6MjguMjUwWlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDcsXHJcbiAgICBuYW1lOiBcIkFicmFkb2xmIExpbmNsZXJcIixcclxuICAgIHN0YXR1czogXCJ1bmtub3duXCIsXHJcbiAgICBzcGVjaWVzOiBcIkh1bWFuXCIsXHJcbiAgICB0eXBlOiBcIkdlbmV0aWMgZXhwZXJpbWVudFwiLFxyXG4gICAgZ2VuZGVyOiBcIk1hbGVcIixcclxuICAgIG9yaWdpbjoge1xyXG4gICAgICBuYW1lOiBcIkVhcnRoIChSZXBsYWNlbWVudCBEaW1lbnNpb24pXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2xvY2F0aW9uLzIwXCIsXHJcbiAgICB9LFxyXG4gICAgbG9jYXRpb246IHtcclxuICAgICAgbmFtZTogXCJUZXN0aWNsZSBNb25zdGVyIERpbWVuc2lvblwiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9sb2NhdGlvbi8yMVwiLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyL2F2YXRhci83LmpwZWdcIixcclxuICAgIGVwaXNvZGU6IFtcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMTBcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMTFcIixcclxuICAgIF0sXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvN1wiLFxyXG4gICAgY3JlYXRlZDogXCIyMDE3LTExLTA0VDE5OjU5OjIwLjUyM1pcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA4LFxyXG4gICAgbmFtZTogXCJBZGp1ZGljYXRvciBSaWNrXCIsXHJcbiAgICBzdGF0dXM6IFwiRGVhZFwiLFxyXG4gICAgc3BlY2llczogXCJIdW1hblwiLFxyXG4gICAgdHlwZTogXCJcIixcclxuICAgIGdlbmRlcjogXCJNYWxlXCIsXHJcbiAgICBvcmlnaW46IHtcclxuICAgICAgbmFtZTogXCJ1bmtub3duXCIsXHJcbiAgICAgIHVybDogXCJcIixcclxuICAgIH0sXHJcbiAgICBsb2NhdGlvbjoge1xyXG4gICAgICBuYW1lOiBcIkNpdGFkZWwgb2YgUmlja3NcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvbG9jYXRpb24vM1wiLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyL2F2YXRhci84LmpwZWdcIixcclxuICAgIGVwaXNvZGU6IFtcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yOFwiXSxcclxuICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci84XCIsXHJcbiAgICBjcmVhdGVkOiBcIjIwMTctMTEtMDRUMjA6MDM6MzQuNzM3WlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDksXHJcbiAgICBuYW1lOiBcIkFnZW5jeSBEaXJlY3RvclwiLFxyXG4gICAgc3RhdHVzOiBcIkRlYWRcIixcclxuICAgIHNwZWNpZXM6IFwiSHVtYW5cIixcclxuICAgIHR5cGU6IFwiXCIsXHJcbiAgICBnZW5kZXI6IFwiTWFsZVwiLFxyXG4gICAgb3JpZ2luOiB7XHJcbiAgICAgIG5hbWU6IFwiRWFydGggKFJlcGxhY2VtZW50IERpbWVuc2lvbilcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvbG9jYXRpb24vMjBcIixcclxuICAgIH0sXHJcbiAgICBsb2NhdGlvbjoge1xyXG4gICAgICBuYW1lOiBcIkVhcnRoIChSZXBsYWNlbWVudCBEaW1lbnNpb24pXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2xvY2F0aW9uLzIwXCIsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvYXZhdGFyLzkuanBlZ1wiLFxyXG4gICAgZXBpc29kZTogW1wiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzI0XCJdLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyLzlcIixcclxuICAgIGNyZWF0ZWQ6IFwiMjAxNy0xMS0wNFQyMDowNjo1NC45NzZaXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTAsXHJcbiAgICBuYW1lOiBcIkFsYW4gUmFpbHNcIixcclxuICAgIHN0YXR1czogXCJEZWFkXCIsXHJcbiAgICBzcGVjaWVzOiBcIkh1bWFuXCIsXHJcbiAgICB0eXBlOiBcIlN1cGVyaHVtYW4gKEdob3N0IHRyYWlucyBzdW1tb25lcilcIixcclxuICAgIGdlbmRlcjogXCJNYWxlXCIsXHJcbiAgICBvcmlnaW46IHtcclxuICAgICAgbmFtZTogXCJ1bmtub3duXCIsXHJcbiAgICAgIHVybDogXCJcIixcclxuICAgIH0sXHJcbiAgICBsb2NhdGlvbjoge1xyXG4gICAgICBuYW1lOiBcIldvcmxkZW5kZXIncyBsYWlyXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2xvY2F0aW9uLzRcIixcclxuICAgIH0sXHJcbiAgICBpbWFnZTogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci9hdmF0YXIvMTAuanBlZ1wiLFxyXG4gICAgZXBpc29kZTogW1wiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzI1XCJdLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyLzEwXCIsXHJcbiAgICBjcmVhdGVkOiBcIjIwMTctMTEtMDRUMjA6MTk6MDkuMDE3WlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDExLFxyXG4gICAgbmFtZTogXCJBbGJlcnQgRWluc3RlaW5cIixcclxuICAgIHN0YXR1czogXCJEZWFkXCIsXHJcbiAgICBzcGVjaWVzOiBcIkh1bWFuXCIsXHJcbiAgICB0eXBlOiBcIlwiLFxyXG4gICAgZ2VuZGVyOiBcIk1hbGVcIixcclxuICAgIG9yaWdpbjoge1xyXG4gICAgICBuYW1lOiBcIkVhcnRoIChDLTEzNylcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvbG9jYXRpb24vMVwiLFxyXG4gICAgfSxcclxuICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgIG5hbWU6IFwiRWFydGggKFJlcGxhY2VtZW50IERpbWVuc2lvbilcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvbG9jYXRpb24vMjBcIixcclxuICAgIH0sXHJcbiAgICBpbWFnZTogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci9hdmF0YXIvMTEuanBlZ1wiLFxyXG4gICAgZXBpc29kZTogW1wiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzEyXCJdLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyLzExXCIsXHJcbiAgICBjcmVhdGVkOiBcIjIwMTctMTEtMDRUMjA6MjA6MjAuOTY1WlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEyLFxyXG4gICAgbmFtZTogXCJBbGV4YW5kZXJcIixcclxuICAgIHN0YXR1czogXCJEZWFkXCIsXHJcbiAgICBzcGVjaWVzOiBcIkh1bWFuXCIsXHJcbiAgICB0eXBlOiBcIlwiLFxyXG4gICAgZ2VuZGVyOiBcIk1hbGVcIixcclxuICAgIG9yaWdpbjoge1xyXG4gICAgICBuYW1lOiBcIkVhcnRoIChDLTEzNylcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvbG9jYXRpb24vMVwiLFxyXG4gICAgfSxcclxuICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgIG5hbWU6IFwiQW5hdG9teSBQYXJrXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2xvY2F0aW9uLzVcIixcclxuICAgIH0sXHJcbiAgICBpbWFnZTogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci9hdmF0YXIvMTIuanBlZ1wiLFxyXG4gICAgZXBpc29kZTogW1wiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzNcIl0sXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvMTJcIixcclxuICAgIGNyZWF0ZWQ6IFwiMjAxNy0xMS0wNFQyMDozMjozMy4xNDRaXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTMsXHJcbiAgICBuYW1lOiBcIkFsaWVuIEdvb2dhaFwiLFxyXG4gICAgc3RhdHVzOiBcInVua25vd25cIixcclxuICAgIHNwZWNpZXM6IFwiQWxpZW5cIixcclxuICAgIHR5cGU6IFwiXCIsXHJcbiAgICBnZW5kZXI6IFwidW5rbm93blwiLFxyXG4gICAgb3JpZ2luOiB7XHJcbiAgICAgIG5hbWU6IFwidW5rbm93blwiLFxyXG4gICAgICB1cmw6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgbG9jYXRpb246IHtcclxuICAgICAgbmFtZTogXCJFYXJ0aCAoUmVwbGFjZW1lbnQgRGltZW5zaW9uKVwiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9sb2NhdGlvbi8yMFwiLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyL2F2YXRhci8xMy5qcGVnXCIsXHJcbiAgICBlcGlzb2RlOiBbXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMzFcIl0sXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvMTNcIixcclxuICAgIGNyZWF0ZWQ6IFwiMjAxNy0xMS0wNFQyMDozMzozMC43NzlaXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTQsXHJcbiAgICBuYW1lOiBcIkFsaWVuIE1vcnR5XCIsXHJcbiAgICBzdGF0dXM6IFwidW5rbm93blwiLFxyXG4gICAgc3BlY2llczogXCJBbGllblwiLFxyXG4gICAgdHlwZTogXCJcIixcclxuICAgIGdlbmRlcjogXCJNYWxlXCIsXHJcbiAgICBvcmlnaW46IHtcclxuICAgICAgbmFtZTogXCJ1bmtub3duXCIsXHJcbiAgICAgIHVybDogXCJcIixcclxuICAgIH0sXHJcbiAgICBsb2NhdGlvbjoge1xyXG4gICAgICBuYW1lOiBcIkNpdGFkZWwgb2YgUmlja3NcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvbG9jYXRpb24vM1wiLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyL2F2YXRhci8xNC5qcGVnXCIsXHJcbiAgICBlcGlzb2RlOiBbXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMTBcIl0sXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvMTRcIixcclxuICAgIGNyZWF0ZWQ6IFwiMjAxNy0xMS0wNFQyMDo1MTozMS4zNzNaXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTUsXHJcbiAgICBuYW1lOiBcIkFsaWVuIFJpY2tcIixcclxuICAgIHN0YXR1czogXCJ1bmtub3duXCIsXHJcbiAgICBzcGVjaWVzOiBcIkFsaWVuXCIsXHJcbiAgICB0eXBlOiBcIlwiLFxyXG4gICAgZ2VuZGVyOiBcIk1hbGVcIixcclxuICAgIG9yaWdpbjoge1xyXG4gICAgICBuYW1lOiBcInVua25vd25cIixcclxuICAgICAgdXJsOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgIG5hbWU6IFwiQ2l0YWRlbCBvZiBSaWNrc1wiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9sb2NhdGlvbi8zXCIsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvYXZhdGFyLzE1LmpwZWdcIixcclxuICAgIGVwaXNvZGU6IFtcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xMFwiXSxcclxuICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci8xNVwiLFxyXG4gICAgY3JlYXRlZDogXCIyMDE3LTExLTA0VDIwOjU2OjEzLjIxNVpcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxNixcclxuICAgIG5hbWU6IFwiQW1pc2ggQ3lib3JnXCIsXHJcbiAgICBzdGF0dXM6IFwiRGVhZFwiLFxyXG4gICAgc3BlY2llczogXCJBbGllblwiLFxyXG4gICAgdHlwZTogXCJQYXJhc2l0ZVwiLFxyXG4gICAgZ2VuZGVyOiBcIk1hbGVcIixcclxuICAgIG9yaWdpbjoge1xyXG4gICAgICBuYW1lOiBcInVua25vd25cIixcclxuICAgICAgdXJsOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgIG5hbWU6IFwiRWFydGggKFJlcGxhY2VtZW50IERpbWVuc2lvbilcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvbG9jYXRpb24vMjBcIixcclxuICAgIH0sXHJcbiAgICBpbWFnZTogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci9hdmF0YXIvMTYuanBlZ1wiLFxyXG4gICAgZXBpc29kZTogW1wiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzE1XCJdLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyLzE2XCIsXHJcbiAgICBjcmVhdGVkOiBcIjIwMTctMTEtMDRUMjE6MTI6NDUuMjM1WlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDE3LFxyXG4gICAgbmFtZTogXCJBbm5pZVwiLFxyXG4gICAgc3RhdHVzOiBcIkFsaXZlXCIsXHJcbiAgICBzcGVjaWVzOiBcIkh1bWFuXCIsXHJcbiAgICB0eXBlOiBcIlwiLFxyXG4gICAgZ2VuZGVyOiBcIkZlbWFsZVwiLFxyXG4gICAgb3JpZ2luOiB7XHJcbiAgICAgIG5hbWU6IFwiRWFydGggKEMtMTM3KVwiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9sb2NhdGlvbi8xXCIsXHJcbiAgICB9LFxyXG4gICAgbG9jYXRpb246IHtcclxuICAgICAgbmFtZTogXCJBbmF0b215IFBhcmtcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvbG9jYXRpb24vNVwiLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyL2F2YXRhci8xNy5qcGVnXCIsXHJcbiAgICBlcGlzb2RlOiBbXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvM1wiXSxcclxuICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci8xN1wiLFxyXG4gICAgY3JlYXRlZDogXCIyMDE3LTExLTA0VDIyOjIxOjI0LjQ4MVpcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxOCxcclxuICAgIG5hbWU6IFwiQW50ZW5uYSBNb3J0eVwiLFxyXG4gICAgc3RhdHVzOiBcIkFsaXZlXCIsXHJcbiAgICBzcGVjaWVzOiBcIkh1bWFuXCIsXHJcbiAgICB0eXBlOiBcIkh1bWFuIHdpdGggYW50ZW5uYWVcIixcclxuICAgIGdlbmRlcjogXCJNYWxlXCIsXHJcbiAgICBvcmlnaW46IHtcclxuICAgICAgbmFtZTogXCJ1bmtub3duXCIsXHJcbiAgICAgIHVybDogXCJcIixcclxuICAgIH0sXHJcbiAgICBsb2NhdGlvbjoge1xyXG4gICAgICBuYW1lOiBcIkNpdGFkZWwgb2YgUmlja3NcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvbG9jYXRpb24vM1wiLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyL2F2YXRhci8xOC5qcGVnXCIsXHJcbiAgICBlcGlzb2RlOiBbXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzEwXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzI4XCIsXHJcbiAgICBdLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyLzE4XCIsXHJcbiAgICBjcmVhdGVkOiBcIjIwMTctMTEtMDRUMjI6MjU6MjkuMDA4WlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDE5LFxyXG4gICAgbmFtZTogXCJBbnRlbm5hIFJpY2tcIixcclxuICAgIHN0YXR1czogXCJ1bmtub3duXCIsXHJcbiAgICBzcGVjaWVzOiBcIkh1bWFuXCIsXHJcbiAgICB0eXBlOiBcIkh1bWFuIHdpdGggYW50ZW5uYWVcIixcclxuICAgIGdlbmRlcjogXCJNYWxlXCIsXHJcbiAgICBvcmlnaW46IHtcclxuICAgICAgbmFtZTogXCJ1bmtub3duXCIsXHJcbiAgICAgIHVybDogXCJcIixcclxuICAgIH0sXHJcbiAgICBsb2NhdGlvbjoge1xyXG4gICAgICBuYW1lOiBcInVua25vd25cIixcclxuICAgICAgdXJsOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyL2F2YXRhci8xOS5qcGVnXCIsXHJcbiAgICBlcGlzb2RlOiBbXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMTBcIl0sXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvMTlcIixcclxuICAgIGNyZWF0ZWQ6IFwiMjAxNy0xMS0wNFQyMjoyODoxMy43NTZaXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMjAsXHJcbiAgICBuYW1lOiBcIkFudHMgaW4gbXkgRXllcyBKb2huc29uXCIsXHJcbiAgICBzdGF0dXM6IFwidW5rbm93blwiLFxyXG4gICAgc3BlY2llczogXCJIdW1hblwiLFxyXG4gICAgdHlwZTogXCJIdW1hbiB3aXRoIGFudHMgaW4gaGlzIGV5ZXNcIixcclxuICAgIGdlbmRlcjogXCJNYWxlXCIsXHJcbiAgICBvcmlnaW46IHtcclxuICAgICAgbmFtZTogXCJ1bmtub3duXCIsXHJcbiAgICAgIHVybDogXCJcIixcclxuICAgIH0sXHJcbiAgICBsb2NhdGlvbjoge1xyXG4gICAgICBuYW1lOiBcIkludGVyZGltZW5zaW9uYWwgQ2FibGVcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvbG9jYXRpb24vNlwiLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyL2F2YXRhci8yMC5qcGVnXCIsXHJcbiAgICBlcGlzb2RlOiBbXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvOFwiXSxcclxuICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci8yMFwiLFxyXG4gICAgY3JlYXRlZDogXCIyMDE3LTExLTA0VDIyOjM0OjUzLjY1OVpcIixcclxuICB9LFxyXG5dO1xyXG5leHBvcnQgZGVmYXVsdCBkYXRhO1xyXG4iLCJpbXBvcnQgYWxsRGF0YSBmcm9tIFwiLi9kYXRhXCI7XHJcblxyXG5jbGFzcyBEYXRhYmFzZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBnZXRBbGwoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGFzQXJyYXkgPSBPYmplY3QudmFsdWVzKGFsbERhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWxsREFUQTpcIiwgYXNBcnJheSk7XHJcbiAgICAgICAgYXdhaXQgcmFuZG9tRGVsYXkoKTtcclxuICAgICAgICByZXNvbHZlKGFzQXJyYXkpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0QnlJZChpZCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjaGFyYWN0ZXIgPSBPYmplY3QudmFsdWVzKGFsbERhdGEpLmZpbmQoXHJcbiAgICAgICAgICAoY2hhcmFjdGVyKSA9PiBjaGFyYWN0ZXIuaWQgPT09IGlkXHJcbiAgICAgICAgKTtcclxuICAgICAgICBhd2FpdCByYW5kb21EZWxheSgpO1xyXG4gICAgICAgIHJlc29sdmUoY2hhcmFjdGVyKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHJhbmRvbURlbGF5ID0gKCkgPT5cclxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgY29uc3QgbWF4ID0gMzUwO1xyXG4gICAgY29uc3QgbWluID0gMTAwO1xyXG4gICAgY29uc3QgZGVsYXkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG5cclxuICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgZGVsYXkpO1xyXG4gIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YWJhc2U7XHJcbiIsImltcG9ydCBEQiBmcm9tIFwiLi4vLi4vLi4vZGF0YWJhc2UvZGJcIjtcclxuXHJcbmNvbnN0IGFsbENoYXJhY3RlcnMgPSBhc3luYyAocmVxdWVzdCwgcmVzcG9uc2UpID0+IHtcclxuICBjb25zdCBkYiA9IG5ldyBEQigpO1xyXG5cclxuICBjb25zdCBpZCA9IHJlcXVlc3QucXVlcnkuaWQ7XHJcblxyXG4gIGNvbnN0IGNoYXJhY3RlciA9IGF3YWl0IGRiLmdldEJ5SWQoaWQpO1xyXG5cclxuICByZXNwb25zZS5zdGF0dXNDb2RlID0gMjAwO1xyXG4gIHJlc3BvbnNlLnNldEhlYWRlcihcIkNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgcmVzcG9uc2UuZW5kKEpTT04uc3RyaW5naWZ5KHsgZGF0YTogY2hhcmFjdGVyIH0pKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFsbENoYXJhY3RlcnM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=