module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/character/index.js");
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
const data = {
  0: {
    id: "0",
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
  },
  1: {
    id: "1",
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
  },
  2: {
    id: "2",
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
  },
  3: {
    id: "3",
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
  },
  4: {
    id: "4",
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
  },
  5: {
    id: "5",
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
  },
  6: {
    id: "6",
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
  },
  7: {
    id: "7",
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
  },
  8: {
    id: "8",
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
  },
  9: {
    id: "9",
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
  },
  10: {
    id: "10",
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
  },
  11: {
    id: "11",
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
  },
  12: {
    id: "12",
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
  },
  13: {
    id: "13",
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
  },
  14: {
    id: "14",
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
  },
  15: {
    id: "15",
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
  },
  16: {
    id: "16",
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
  },
  17: {
    id: "17",
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
  },
  18: {
    id: "18",
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
  },
  19: {
    id: "19",
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
  }
};
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

/***/ "./pages/api/character/index.js":
/*!**************************************!*\
  !*** ./pages/api/character/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../database/db */ "./database/db.js");



const allCharacters = async (request = http__WEBPACK_IMPORTED_MODULE_0__["IncomingMessage"], response = http__WEBPACK_IMPORTED_MODULE_0__["ServerResponse"]) => {
  const db = new _database_db__WEBPACK_IMPORTED_MODULE_1__["default"]();
  const allEntries = await db.getAll();
  const length = allEntries.length;
  response.statusCode = 200;
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify({
    length,
    data: allEntries
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (allCharacters);

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGF0YWJhc2UvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhYmFzZS9kYi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY2hhcmFjdGVyL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiJdLCJuYW1lcyI6WyJkYXRhIiwiaWQiLCJuYW1lIiwic3RhdHVzIiwic3BlY2llcyIsInR5cGUiLCJnZW5kZXIiLCJvcmlnaW4iLCJ1cmwiLCJsb2NhdGlvbiIsImltYWdlIiwiZXBpc29kZSIsImNyZWF0ZWQiLCJEYXRhYmFzZSIsImNvbnN0cnVjdG9yIiwiZ2V0QWxsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhc0FycmF5IiwiT2JqZWN0IiwidmFsdWVzIiwiYWxsRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJyYW5kb21EZWxheSIsImVycm9yIiwiZ2V0QnlJZCIsImNoYXJhY3RlciIsImZpbmQiLCJtYXgiLCJtaW4iLCJkZWxheSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNldFRpbWVvdXQiLCJhbGxDaGFyYWN0ZXJzIiwicmVxdWVzdCIsIkluY29taW5nTWVzc2FnZSIsInJlc3BvbnNlIiwiU2VydmVyUmVzcG9uc2UiLCJkYiIsIkRCIiwiYWxsRW50cmllcyIsImxlbmd0aCIsInN0YXR1c0NvZGUiLCJzZXRIZWFkZXIiLCJlbmQiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMs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QUFNQyxHQUFHLEdBQUcsR0FBWjtBQUNBLFFBQU1DLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxNQUFpQkwsR0FBRyxHQUFHQyxHQUFOLEdBQVksQ0FBN0IsQ0FBWCxJQUE4Q0EsR0FBNUQ7QUFFQUssWUFBVSxDQUFDbkIsT0FBRCxFQUFVZSxLQUFWLENBQVY7QUFDRCxDQU5ELENBREY7O0FBU2VuQix1RUFBZixFOzs7Ozs7Ozs7Ozs7QUMxQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBLE1BQU13QixhQUFhLEdBQUcsT0FDcEJDLE9BQU8sR0FBR0Msb0RBRFUsRUFFcEJDLFFBQVEsR0FBR0MsbURBRlMsS0FHakI7QUFDSCxRQUFNQyxFQUFFLEdBQUcsSUFBSUMsb0RBQUosRUFBWDtBQUNBLFFBQU1DLFVBQVUsR0FBRyxNQUFNRixFQUFFLENBQUMzQixNQUFILEVBQXpCO0FBQ0EsUUFBTThCLE1BQU0sR0FBR0QsVUFBVSxDQUFDQyxNQUExQjtBQUVBTCxVQUFRLENBQUNNLFVBQVQsR0FBc0IsR0FBdEI7QUFDQU4sVUFBUSxDQUFDTyxTQUFULENBQW1CLGNBQW5CLEVBQW1DLGtCQUFuQztBQUNBUCxVQUFRLENBQUNRLEdBQVQsQ0FBYUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBRUwsVUFBRjtBQUFVN0MsUUFBSSxFQUFFNEM7QUFBaEIsR0FBZixDQUFiO0FBQ0QsQ0FYRDs7QUFhZVAsNEVBQWYsRTs7Ozs7Ozs7Ozs7QUNoQkEsaUMiLCJmaWxlIjoicGFnZXMvYXBpL2NoYXJhY3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL2NoYXJhY3Rlci9pbmRleC5qc1wiKTtcbiIsImNvbnN0IGRhdGEgPSB7XHJcbiAgMDoge1xyXG4gICAgaWQ6IFwiMFwiLFxyXG4gICAgbmFtZTogXCJSaWNrIFNhbmNoZXpcIixcclxuICAgIHN0YXR1czogXCJBbGl2ZVwiLFxyXG4gICAgc3BlY2llczogXCJIdW1hblwiLFxyXG4gICAgdHlwZTogXCJcIixcclxuICAgIGdlbmRlcjogXCJNYWxlXCIsXHJcbiAgICBvcmlnaW46IHtcclxuICAgICAgbmFtZTogXCJFYXJ0aCAoQy0xMzcpXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2xvY2F0aW9uLzFcIixcclxuICAgIH0sXHJcbiAgICBsb2NhdGlvbjoge1xyXG4gICAgICBuYW1lOiBcIkVhcnRoIChSZXBsYWNlbWVudCBEaW1lbnNpb24pXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2xvY2F0aW9uLzIwXCIsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvYXZhdGFyLzEuanBlZ1wiLFxyXG4gICAgZXBpc29kZTogW1xyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzJcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvM1wiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS80XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzVcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvNlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS83XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzhcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvOVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xMFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xMVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xMlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xM1wiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xNFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xNVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xNlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xN1wiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xOFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xOVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yMFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yMVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yMlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yM1wiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yNFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yNVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yNlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yN1wiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yOFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yOVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zMFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zMVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zMlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zM1wiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zNFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zNVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zNlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zN1wiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zOFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zOVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS80MFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS80MVwiLFxyXG4gICAgXSxcclxuICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci8xXCIsXHJcbiAgICBjcmVhdGVkOiBcIjIwMTctMTEtMDRUMTg6NDg6NDYuMjUwWlwiLFxyXG4gIH0sXHJcbiAgMToge1xyXG4gICAgaWQ6IFwiMVwiLFxyXG4gICAgbmFtZTogXCJNb3J0eSBTbWl0aFwiLFxyXG4gICAgc3RhdHVzOiBcIkFsaXZlXCIsXHJcbiAgICBzcGVjaWVzOiBcIkh1bWFuXCIsXHJcbiAgICB0eXBlOiBcIlwiLFxyXG4gICAgZ2VuZGVyOiBcIk1hbGVcIixcclxuICAgIG9yaWdpbjoge1xyXG4gICAgICBuYW1lOiBcIkVhcnRoIChDLTEzNylcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvbG9jYXRpb24vMVwiLFxyXG4gICAgfSxcclxuICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgIG5hbWU6IFwiRWFydGggKFJlcGxhY2VtZW50IERpbWVuc2lvbilcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvbG9jYXRpb24vMjBcIixcclxuICAgIH0sXHJcbiAgICBpbWFnZTogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci9hdmF0YXIvMi5qcGVnXCIsXHJcbiAgICBlcGlzb2RlOiBbXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzFcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzRcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvNVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS82XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzdcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvOFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS85XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzEwXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzExXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzEyXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzEzXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzE0XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzE1XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzE2XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzE3XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzE4XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzE5XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzIwXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzIxXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzIyXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzIzXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzI0XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzI1XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzI2XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzI3XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzI4XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzI5XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzMwXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzMxXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzMyXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzMzXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzM0XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzM1XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzM2XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzM3XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzM4XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzM5XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzQwXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzQxXCIsXHJcbiAgICBdLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyLzJcIixcclxuICAgIGNyZWF0ZWQ6IFwiMjAxNy0xMS0wNFQxODo1MDoyMS42NTFaXCIsXHJcbiAgfSxcclxuICAyOiB7XHJcbiAgICBpZDogXCIyXCIsXHJcbiAgICBuYW1lOiBcIlN1bW1lciBTbWl0aFwiLFxyXG4gICAgc3RhdHVzOiBcIkFsaXZlXCIsXHJcbiAgICBzcGVjaWVzOiBcIkh1bWFuXCIsXHJcbiAgICB0eXBlOiBcIlwiLFxyXG4gICAgZ2VuZGVyOiBcIkZlbWFsZVwiLFxyXG4gICAgb3JpZ2luOiB7XHJcbiAgICAgIG5hbWU6IFwiRWFydGggKFJlcGxhY2VtZW50IERpbWVuc2lvbilcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvbG9jYXRpb24vMjBcIixcclxuICAgIH0sXHJcbiAgICBsb2NhdGlvbjoge1xyXG4gICAgICBuYW1lOiBcIkVhcnRoIChSZXBsYWNlbWVudCBEaW1lbnNpb24pXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2xvY2F0aW9uLzIwXCIsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvYXZhdGFyLzMuanBlZ1wiLFxyXG4gICAgZXBpc29kZTogW1xyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS82XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzdcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvOFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS85XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzEwXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzExXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzEyXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzE0XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzE1XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzE2XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzE3XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzE4XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzE5XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzIwXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzIxXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzIyXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzIzXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzI0XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzI1XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzI2XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzI3XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzI5XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzMwXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzMxXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzMyXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzMzXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzM0XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzM1XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzM2XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzM4XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzM5XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzQwXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzQxXCIsXHJcbiAgICBdLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyLzNcIixcclxuICAgIGNyZWF0ZWQ6IFwiMjAxNy0xMS0wNFQxOTowOTo1Ni40MjhaXCIsXHJcbiAgfSxcclxuICAzOiB7XHJcbiAgICBpZDogXCIzXCIsXHJcbiAgICBuYW1lOiBcIkJldGggU21pdGhcIixcclxuICAgIHN0YXR1czogXCJBbGl2ZVwiLFxyXG4gICAgc3BlY2llczogXCJIdW1hblwiLFxyXG4gICAgdHlwZTogXCJcIixcclxuICAgIGdlbmRlcjogXCJGZW1hbGVcIixcclxuICAgIG9yaWdpbjoge1xyXG4gICAgICBuYW1lOiBcIkVhcnRoIChSZXBsYWNlbWVudCBEaW1lbnNpb24pXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2xvY2F0aW9uLzIwXCIsXHJcbiAgICB9LFxyXG4gICAgbG9jYXRpb246IHtcclxuICAgICAgbmFtZTogXCJFYXJ0aCAoUmVwbGFjZW1lbnQgRGltZW5zaW9uKVwiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9sb2NhdGlvbi8yMFwiLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyL2F2YXRhci80LmpwZWdcIixcclxuICAgIGVwaXNvZGU6IFtcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvNlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS83XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzhcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvOVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xMFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xMVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xMlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xNFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xNVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xNlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xOFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xOVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yMFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yMVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yMlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yM1wiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yNFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yNVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yNlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yN1wiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yOFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yOVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zMFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zMVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zMlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zM1wiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zNFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zNVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zNlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zOFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zOVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS80MFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS80MVwiLFxyXG4gICAgXSxcclxuICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci80XCIsXHJcbiAgICBjcmVhdGVkOiBcIjIwMTctMTEtMDRUMTk6MjI6NDMuNjY1WlwiLFxyXG4gIH0sXHJcbiAgNDoge1xyXG4gICAgaWQ6IFwiNFwiLFxyXG4gICAgbmFtZTogXCJKZXJyeSBTbWl0aFwiLFxyXG4gICAgc3RhdHVzOiBcIkFsaXZlXCIsXHJcbiAgICBzcGVjaWVzOiBcIkh1bWFuXCIsXHJcbiAgICB0eXBlOiBcIlwiLFxyXG4gICAgZ2VuZGVyOiBcIk1hbGVcIixcclxuICAgIG9yaWdpbjoge1xyXG4gICAgICBuYW1lOiBcIkVhcnRoIChSZXBsYWNlbWVudCBEaW1lbnNpb24pXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2xvY2F0aW9uLzIwXCIsXHJcbiAgICB9LFxyXG4gICAgbG9jYXRpb246IHtcclxuICAgICAgbmFtZTogXCJFYXJ0aCAoUmVwbGFjZW1lbnQgRGltZW5zaW9uKVwiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9sb2NhdGlvbi8yMFwiLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyL2F2YXRhci81LmpwZWdcIixcclxuICAgIGVwaXNvZGU6IFtcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvNlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS83XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzhcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvOVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xMFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xMVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xMlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xM1wiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xNFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xNVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xNlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xOFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xOVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yMFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yMVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yMlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yM1wiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yNlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yOVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zMFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zMVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zMlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zM1wiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zNVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zNlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zOFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zOVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS80MFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS80MVwiLFxyXG4gICAgXSxcclxuICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci81XCIsXHJcbiAgICBjcmVhdGVkOiBcIjIwMTctMTEtMDRUMTk6MjY6NTYuMzAxWlwiLFxyXG4gIH0sXHJcbiAgNToge1xyXG4gICAgaWQ6IFwiNVwiLFxyXG4gICAgbmFtZTogXCJBYmFkYW5nbyBDbHVzdGVyIFByaW5jZXNzXCIsXHJcbiAgICBzdGF0dXM6IFwiQWxpdmVcIixcclxuICAgIHNwZWNpZXM6IFwiQWxpZW5cIixcclxuICAgIHR5cGU6IFwiXCIsXHJcbiAgICBnZW5kZXI6IFwiRmVtYWxlXCIsXHJcbiAgICBvcmlnaW46IHtcclxuICAgICAgbmFtZTogXCJBYmFkYW5nb1wiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9sb2NhdGlvbi8yXCIsXHJcbiAgICB9LFxyXG4gICAgbG9jYXRpb246IHtcclxuICAgICAgbmFtZTogXCJBYmFkYW5nb1wiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9sb2NhdGlvbi8yXCIsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvYXZhdGFyLzYuanBlZ1wiLFxyXG4gICAgZXBpc29kZTogW1wiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzI3XCJdLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyLzZcIixcclxuICAgIGNyZWF0ZWQ6IFwiMjAxNy0xMS0wNFQxOTo1MDoyOC4yNTBaXCIsXHJcbiAgfSxcclxuICA2OiB7XHJcbiAgICBpZDogXCI2XCIsXHJcbiAgICBuYW1lOiBcIkFicmFkb2xmIExpbmNsZXJcIixcclxuICAgIHN0YXR1czogXCJ1bmtub3duXCIsXHJcbiAgICBzcGVjaWVzOiBcIkh1bWFuXCIsXHJcbiAgICB0eXBlOiBcIkdlbmV0aWMgZXhwZXJpbWVudFwiLFxyXG4gICAgZ2VuZGVyOiBcIk1hbGVcIixcclxuICAgIG9yaWdpbjoge1xyXG4gICAgICBuYW1lOiBcIkVhcnRoIChSZXBsYWNlbWVudCBEaW1lbnNpb24pXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2xvY2F0aW9uLzIwXCIsXHJcbiAgICB9LFxyXG4gICAgbG9jYXRpb246IHtcclxuICAgICAgbmFtZTogXCJUZXN0aWNsZSBNb25zdGVyIERpbWVuc2lvblwiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9sb2NhdGlvbi8yMVwiLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyL2F2YXRhci83LmpwZWdcIixcclxuICAgIGVwaXNvZGU6IFtcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMTBcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMTFcIixcclxuICAgIF0sXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvN1wiLFxyXG4gICAgY3JlYXRlZDogXCIyMDE3LTExLTA0VDE5OjU5OjIwLjUyM1pcIixcclxuICB9LFxyXG4gIDc6IHtcclxuICAgIGlkOiBcIjdcIixcclxuICAgIG5hbWU6IFwiQWRqdWRpY2F0b3IgUmlja1wiLFxyXG4gICAgc3RhdHVzOiBcIkRlYWRcIixcclxuICAgIHNwZWNpZXM6IFwiSHVtYW5cIixcclxuICAgIHR5cGU6IFwiXCIsXHJcbiAgICBnZW5kZXI6IFwiTWFsZVwiLFxyXG4gICAgb3JpZ2luOiB7XHJcbiAgICAgIG5hbWU6IFwidW5rbm93blwiLFxyXG4gICAgICB1cmw6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgbG9jYXRpb246IHtcclxuICAgICAgbmFtZTogXCJDaXRhZGVsIG9mIFJpY2tzXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2xvY2F0aW9uLzNcIixcclxuICAgIH0sXHJcbiAgICBpbWFnZTogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci9hdmF0YXIvOC5qcGVnXCIsXHJcbiAgICBlcGlzb2RlOiBbXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMjhcIl0sXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvOFwiLFxyXG4gICAgY3JlYXRlZDogXCIyMDE3LTExLTA0VDIwOjAzOjM0LjczN1pcIixcclxuICB9LFxyXG4gIDg6IHtcclxuICAgIGlkOiBcIjhcIixcclxuICAgIG5hbWU6IFwiQWdlbmN5IERpcmVjdG9yXCIsXHJcbiAgICBzdGF0dXM6IFwiRGVhZFwiLFxyXG4gICAgc3BlY2llczogXCJIdW1hblwiLFxyXG4gICAgdHlwZTogXCJcIixcclxuICAgIGdlbmRlcjogXCJNYWxlXCIsXHJcbiAgICBvcmlnaW46IHtcclxuICAgICAgbmFtZTogXCJFYXJ0aCAoUmVwbGFjZW1lbnQgRGltZW5zaW9uKVwiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9sb2NhdGlvbi8yMFwiLFxyXG4gICAgfSxcclxuICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgIG5hbWU6IFwiRWFydGggKFJlcGxhY2VtZW50IERpbWVuc2lvbilcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvbG9jYXRpb24vMjBcIixcclxuICAgIH0sXHJcbiAgICBpbWFnZTogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci9hdmF0YXIvOS5qcGVnXCIsXHJcbiAgICBlcGlzb2RlOiBbXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMjRcIl0sXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvOVwiLFxyXG4gICAgY3JlYXRlZDogXCIyMDE3LTExLTA0VDIwOjA2OjU0Ljk3NlpcIixcclxuICB9LFxyXG4gIDk6IHtcclxuICAgIGlkOiBcIjlcIixcclxuICAgIG5hbWU6IFwiQWxhbiBSYWlsc1wiLFxyXG4gICAgc3RhdHVzOiBcIkRlYWRcIixcclxuICAgIHNwZWNpZXM6IFwiSHVtYW5cIixcclxuICAgIHR5cGU6IFwiU3VwZXJodW1hbiAoR2hvc3QgdHJhaW5zIHN1bW1vbmVyKVwiLFxyXG4gICAgZ2VuZGVyOiBcIk1hbGVcIixcclxuICAgIG9yaWdpbjoge1xyXG4gICAgICBuYW1lOiBcInVua25vd25cIixcclxuICAgICAgdXJsOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgIG5hbWU6IFwiV29ybGRlbmRlcidzIGxhaXJcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvbG9jYXRpb24vNFwiLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyL2F2YXRhci8xMC5qcGVnXCIsXHJcbiAgICBlcGlzb2RlOiBbXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMjVcIl0sXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvMTBcIixcclxuICAgIGNyZWF0ZWQ6IFwiMjAxNy0xMS0wNFQyMDoxOTowOS4wMTdaXCIsXHJcbiAgfSxcclxuICAxMDoge1xyXG4gICAgaWQ6IFwiMTBcIixcclxuICAgIG5hbWU6IFwiQWxiZXJ0IEVpbnN0ZWluXCIsXHJcbiAgICBzdGF0dXM6IFwiRGVhZFwiLFxyXG4gICAgc3BlY2llczogXCJIdW1hblwiLFxyXG4gICAgdHlwZTogXCJcIixcclxuICAgIGdlbmRlcjogXCJNYWxlXCIsXHJcbiAgICBvcmlnaW46IHtcclxuICAgICAgbmFtZTogXCJFYXJ0aCAoQy0xMzcpXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2xvY2F0aW9uLzFcIixcclxuICAgIH0sXHJcbiAgICBsb2NhdGlvbjoge1xyXG4gICAgICBuYW1lOiBcIkVhcnRoIChSZXBsYWNlbWVudCBEaW1lbnNpb24pXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2xvY2F0aW9uLzIwXCIsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvYXZhdGFyLzExLmpwZWdcIixcclxuICAgIGVwaXNvZGU6IFtcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xMlwiXSxcclxuICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci8xMVwiLFxyXG4gICAgY3JlYXRlZDogXCIyMDE3LTExLTA0VDIwOjIwOjIwLjk2NVpcIixcclxuICB9LFxyXG4gIDExOiB7XHJcbiAgICBpZDogXCIxMVwiLFxyXG4gICAgbmFtZTogXCJBbGV4YW5kZXJcIixcclxuICAgIHN0YXR1czogXCJEZWFkXCIsXHJcbiAgICBzcGVjaWVzOiBcIkh1bWFuXCIsXHJcbiAgICB0eXBlOiBcIlwiLFxyXG4gICAgZ2VuZGVyOiBcIk1hbGVcIixcclxuICAgIG9yaWdpbjoge1xyXG4gICAgICBuYW1lOiBcIkVhcnRoIChDLTEzNylcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvbG9jYXRpb24vMVwiLFxyXG4gICAgfSxcclxuICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgIG5hbWU6IFwiQW5hdG9teSBQYXJrXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2xvY2F0aW9uLzVcIixcclxuICAgIH0sXHJcbiAgICBpbWFnZTogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci9hdmF0YXIvMTIuanBlZ1wiLFxyXG4gICAgZXBpc29kZTogW1wiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzNcIl0sXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvMTJcIixcclxuICAgIGNyZWF0ZWQ6IFwiMjAxNy0xMS0wNFQyMDozMjozMy4xNDRaXCIsXHJcbiAgfSxcclxuICAxMjoge1xyXG4gICAgaWQ6IFwiMTJcIixcclxuICAgIG5hbWU6IFwiQWxpZW4gR29vZ2FoXCIsXHJcbiAgICBzdGF0dXM6IFwidW5rbm93blwiLFxyXG4gICAgc3BlY2llczogXCJBbGllblwiLFxyXG4gICAgdHlwZTogXCJcIixcclxuICAgIGdlbmRlcjogXCJ1bmtub3duXCIsXHJcbiAgICBvcmlnaW46IHtcclxuICAgICAgbmFtZTogXCJ1bmtub3duXCIsXHJcbiAgICAgIHVybDogXCJcIixcclxuICAgIH0sXHJcbiAgICBsb2NhdGlvbjoge1xyXG4gICAgICBuYW1lOiBcIkVhcnRoIChSZXBsYWNlbWVudCBEaW1lbnNpb24pXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2xvY2F0aW9uLzIwXCIsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvYXZhdGFyLzEzLmpwZWdcIixcclxuICAgIGVwaXNvZGU6IFtcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zMVwiXSxcclxuICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci8xM1wiLFxyXG4gICAgY3JlYXRlZDogXCIyMDE3LTExLTA0VDIwOjMzOjMwLjc3OVpcIixcclxuICB9LFxyXG4gIDEzOiB7XHJcbiAgICBpZDogXCIxM1wiLFxyXG4gICAgbmFtZTogXCJBbGllbiBNb3J0eVwiLFxyXG4gICAgc3RhdHVzOiBcInVua25vd25cIixcclxuICAgIHNwZWNpZXM6IFwiQWxpZW5cIixcclxuICAgIHR5cGU6IFwiXCIsXHJcbiAgICBnZW5kZXI6IFwiTWFsZVwiLFxyXG4gICAgb3JpZ2luOiB7XHJcbiAgICAgIG5hbWU6IFwidW5rbm93blwiLFxyXG4gICAgICB1cmw6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgbG9jYXRpb246IHtcclxuICAgICAgbmFtZTogXCJDaXRhZGVsIG9mIFJpY2tzXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2xvY2F0aW9uLzNcIixcclxuICAgIH0sXHJcbiAgICBpbWFnZTogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci9hdmF0YXIvMTQuanBlZ1wiLFxyXG4gICAgZXBpc29kZTogW1wiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzEwXCJdLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyLzE0XCIsXHJcbiAgICBjcmVhdGVkOiBcIjIwMTctMTEtMDRUMjA6NTE6MzEuMzczWlwiLFxyXG4gIH0sXHJcbiAgMTQ6IHtcclxuICAgIGlkOiBcIjE0XCIsXHJcbiAgICBuYW1lOiBcIkFsaWVuIFJpY2tcIixcclxuICAgIHN0YXR1czogXCJ1bmtub3duXCIsXHJcbiAgICBzcGVjaWVzOiBcIkFsaWVuXCIsXHJcbiAgICB0eXBlOiBcIlwiLFxyXG4gICAgZ2VuZGVyOiBcIk1hbGVcIixcclxuICAgIG9yaWdpbjoge1xyXG4gICAgICBuYW1lOiBcInVua25vd25cIixcclxuICAgICAgdXJsOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgIG5hbWU6IFwiQ2l0YWRlbCBvZiBSaWNrc1wiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9sb2NhdGlvbi8zXCIsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvYXZhdGFyLzE1LmpwZWdcIixcclxuICAgIGVwaXNvZGU6IFtcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xMFwiXSxcclxuICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci8xNVwiLFxyXG4gICAgY3JlYXRlZDogXCIyMDE3LTExLTA0VDIwOjU2OjEzLjIxNVpcIixcclxuICB9LFxyXG4gIDE1OiB7XHJcbiAgICBpZDogXCIxNVwiLFxyXG4gICAgbmFtZTogXCJBbWlzaCBDeWJvcmdcIixcclxuICAgIHN0YXR1czogXCJEZWFkXCIsXHJcbiAgICBzcGVjaWVzOiBcIkFsaWVuXCIsXHJcbiAgICB0eXBlOiBcIlBhcmFzaXRlXCIsXHJcbiAgICBnZW5kZXI6IFwiTWFsZVwiLFxyXG4gICAgb3JpZ2luOiB7XHJcbiAgICAgIG5hbWU6IFwidW5rbm93blwiLFxyXG4gICAgICB1cmw6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgbG9jYXRpb246IHtcclxuICAgICAgbmFtZTogXCJFYXJ0aCAoUmVwbGFjZW1lbnQgRGltZW5zaW9uKVwiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9sb2NhdGlvbi8yMFwiLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyL2F2YXRhci8xNi5qcGVnXCIsXHJcbiAgICBlcGlzb2RlOiBbXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMTVcIl0sXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvMTZcIixcclxuICAgIGNyZWF0ZWQ6IFwiMjAxNy0xMS0wNFQyMToxMjo0NS4yMzVaXCIsXHJcbiAgfSxcclxuICAxNjoge1xyXG4gICAgaWQ6IFwiMTZcIixcclxuICAgIG5hbWU6IFwiQW5uaWVcIixcclxuICAgIHN0YXR1czogXCJBbGl2ZVwiLFxyXG4gICAgc3BlY2llczogXCJIdW1hblwiLFxyXG4gICAgdHlwZTogXCJcIixcclxuICAgIGdlbmRlcjogXCJGZW1hbGVcIixcclxuICAgIG9yaWdpbjoge1xyXG4gICAgICBuYW1lOiBcIkVhcnRoIChDLTEzNylcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvbG9jYXRpb24vMVwiLFxyXG4gICAgfSxcclxuICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgIG5hbWU6IFwiQW5hdG9teSBQYXJrXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2xvY2F0aW9uLzVcIixcclxuICAgIH0sXHJcbiAgICBpbWFnZTogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci9hdmF0YXIvMTcuanBlZ1wiLFxyXG4gICAgZXBpc29kZTogW1wiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzNcIl0sXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvMTdcIixcclxuICAgIGNyZWF0ZWQ6IFwiMjAxNy0xMS0wNFQyMjoyMToyNC40ODFaXCIsXHJcbiAgfSxcclxuICAxNzoge1xyXG4gICAgaWQ6IFwiMTdcIixcclxuICAgIG5hbWU6IFwiQW50ZW5uYSBNb3J0eVwiLFxyXG4gICAgc3RhdHVzOiBcIkFsaXZlXCIsXHJcbiAgICBzcGVjaWVzOiBcIkh1bWFuXCIsXHJcbiAgICB0eXBlOiBcIkh1bWFuIHdpdGggYW50ZW5uYWVcIixcclxuICAgIGdlbmRlcjogXCJNYWxlXCIsXHJcbiAgICBvcmlnaW46IHtcclxuICAgICAgbmFtZTogXCJ1bmtub3duXCIsXHJcbiAgICAgIHVybDogXCJcIixcclxuICAgIH0sXHJcbiAgICBsb2NhdGlvbjoge1xyXG4gICAgICBuYW1lOiBcIkNpdGFkZWwgb2YgUmlja3NcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvbG9jYXRpb24vM1wiLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyL2F2YXRhci8xOC5qcGVnXCIsXHJcbiAgICBlcGlzb2RlOiBbXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzEwXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzI4XCIsXHJcbiAgICBdLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyLzE4XCIsXHJcbiAgICBjcmVhdGVkOiBcIjIwMTctMTEtMDRUMjI6MjU6MjkuMDA4WlwiLFxyXG4gIH0sXHJcbiAgMTg6IHtcclxuICAgIGlkOiBcIjE4XCIsXHJcbiAgICBuYW1lOiBcIkFudGVubmEgUmlja1wiLFxyXG4gICAgc3RhdHVzOiBcInVua25vd25cIixcclxuICAgIHNwZWNpZXM6IFwiSHVtYW5cIixcclxuICAgIHR5cGU6IFwiSHVtYW4gd2l0aCBhbnRlbm5hZVwiLFxyXG4gICAgZ2VuZGVyOiBcIk1hbGVcIixcclxuICAgIG9yaWdpbjoge1xyXG4gICAgICBuYW1lOiBcInVua25vd25cIixcclxuICAgICAgdXJsOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgIG5hbWU6IFwidW5rbm93blwiLFxyXG4gICAgICB1cmw6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvYXZhdGFyLzE5LmpwZWdcIixcclxuICAgIGVwaXNvZGU6IFtcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xMFwiXSxcclxuICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci8xOVwiLFxyXG4gICAgY3JlYXRlZDogXCIyMDE3LTExLTA0VDIyOjI4OjEzLjc1NlpcIixcclxuICB9LFxyXG4gIDE5OiB7XHJcbiAgICBpZDogXCIxOVwiLFxyXG4gICAgbmFtZTogXCJBbnRzIGluIG15IEV5ZXMgSm9obnNvblwiLFxyXG4gICAgc3RhdHVzOiBcInVua25vd25cIixcclxuICAgIHNwZWNpZXM6IFwiSHVtYW5cIixcclxuICAgIHR5cGU6IFwiSHVtYW4gd2l0aCBhbnRzIGluIGhpcyBleWVzXCIsXHJcbiAgICBnZW5kZXI6IFwiTWFsZVwiLFxyXG4gICAgb3JpZ2luOiB7XHJcbiAgICAgIG5hbWU6IFwidW5rbm93blwiLFxyXG4gICAgICB1cmw6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgbG9jYXRpb246IHtcclxuICAgICAgbmFtZTogXCJJbnRlcmRpbWVuc2lvbmFsIENhYmxlXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2xvY2F0aW9uLzZcIixcclxuICAgIH0sXHJcbiAgICBpbWFnZTogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci9hdmF0YXIvMjAuanBlZ1wiLFxyXG4gICAgZXBpc29kZTogW1wiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzhcIl0sXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvMjBcIixcclxuICAgIGNyZWF0ZWQ6IFwiMjAxNy0xMS0wNFQyMjozNDo1My42NTlaXCIsXHJcbiAgfSxcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZGF0YTtcclxuIiwiaW1wb3J0IGFsbERhdGEgZnJvbSBcIi4vZGF0YVwiO1xyXG5cclxuY2xhc3MgRGF0YWJhc2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgZ2V0QWxsKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhc0FycmF5ID0gT2JqZWN0LnZhbHVlcyhhbGxEYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFsbERBVEE6XCIsIGFzQXJyYXkpO1xyXG4gICAgICAgIGF3YWl0IHJhbmRvbURlbGF5KCk7XHJcbiAgICAgICAgcmVzb2x2ZShhc0FycmF5KTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldEJ5SWQoaWQpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY2hhcmFjdGVyID0gT2JqZWN0LnZhbHVlcyhhbGxEYXRhKS5maW5kKFxyXG4gICAgICAgICAgKGNoYXJhY3RlcikgPT4gY2hhcmFjdGVyLmlkID09PSBpZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgYXdhaXQgcmFuZG9tRGVsYXkoKTtcclxuICAgICAgICByZXNvbHZlKGNoYXJhY3Rlcik7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCByYW5kb21EZWxheSA9ICgpID0+XHJcbiAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgIGNvbnN0IG1heCA9IDM1MDtcclxuICAgIGNvbnN0IG1pbiA9IDEwMDtcclxuICAgIGNvbnN0IGRlbGF5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxuXHJcbiAgICBzZXRUaW1lb3V0KHJlc29sdmUsIGRlbGF5KTtcclxuICB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFiYXNlO1xyXG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSBcImh0dHBcIjtcclxuaW1wb3J0IERCIGZyb20gXCIuLi8uLi8uLi9kYXRhYmFzZS9kYlwiO1xyXG5cclxuY29uc3QgYWxsQ2hhcmFjdGVycyA9IGFzeW5jIChcclxuICByZXF1ZXN0ID0gSW5jb21pbmdNZXNzYWdlLFxyXG4gIHJlc3BvbnNlID0gU2VydmVyUmVzcG9uc2VcclxuKSA9PiB7XHJcbiAgY29uc3QgZGIgPSBuZXcgREIoKTtcclxuICBjb25zdCBhbGxFbnRyaWVzID0gYXdhaXQgZGIuZ2V0QWxsKCk7XHJcbiAgY29uc3QgbGVuZ3RoID0gYWxsRW50cmllcy5sZW5ndGg7XHJcblxyXG4gIHJlc3BvbnNlLnN0YXR1c0NvZGUgPSAyMDA7XHJcbiAgcmVzcG9uc2Uuc2V0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICByZXNwb25zZS5lbmQoSlNPTi5zdHJpbmdpZnkoeyBsZW5ndGgsIGRhdGE6IGFsbEVudHJpZXMgfSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWxsQ2hhcmFjdGVycztcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiXSwic291cmNlUm9vdCI6IiJ9