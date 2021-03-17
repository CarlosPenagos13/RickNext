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
  const entry = await db.getById(id);
  response.statusCode = 200;
  response.setHeader("Content-type", "application/json");
  response.end(JSON.stringify(entry));
};

/* harmony default export */ __webpack_exports__["default"] = (allCharacters);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGF0YWJhc2UvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhYmFzZS9kYi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY2hhcmFjdGVyLy5qcyJdLCJuYW1lcyI6WyJkYXRhIiwiaWQiLCJuYW1lIiwic3RhdHVzIiwic3BlY2llcyIsInR5cGUiLCJnZW5kZXIiLCJvcmlnaW4iLCJ1cmwiLCJsb2NhdGlvbiIsImltYWdlIiwiZXBpc29kZSIsImNyZWF0ZWQiLCJEYXRhYmFzZSIsImNvbnN0cnVjdG9yIiwiZ2V0QWxsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhc0FycmF5IiwiT2JqZWN0IiwidmFsdWVzIiwiYWxsRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJyYW5kb21EZWxheSIsImVycm9yIiwiZ2V0QnlJZCIsImNoYXJhY3RlciIsImZpbmQiLCJtYXgiLCJtaW4iLCJkZWxheSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNldFRpbWVvdXQiLCJhbGxDaGFyYWN0ZXJzIiwicmVxdWVzdCIsInJlc3BvbnNlIiwiZGIiLCJEQiIsInF1ZXJ5IiwiZW50cnkiLCJzdGF0dXNDb2RlIiwic2V0SGVhZGVyIiwiZW5kIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztR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QUwsTUFBaUJMLEdBQUcsR0FBR0MsR0FBTixHQUFZLENBQTdCLENBQVgsSUFBOENBLEdBQTVEO0FBRUFLLFlBQVUsQ0FBQ25CLE9BQUQsRUFBVWUsS0FBVixDQUFWO0FBQ0QsQ0FORCxDQURGOztBQVNlbkIsdUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQUE7QUFBQTs7QUFFQSxNQUFNd0IsYUFBYSxHQUFHLE9BQU9DLE9BQVAsRUFBZ0JDLFFBQWhCLEtBQTZCO0FBQ2pELFFBQU1DLEVBQUUsR0FBRyxJQUFJQyxvREFBSixFQUFYO0FBRUEsUUFBTXhDLEVBQUUsR0FBR3FDLE9BQU8sQ0FBQ0ksS0FBUixDQUFjekMsRUFBekI7QUFFQSxRQUFNMEMsS0FBSyxHQUFHLE1BQU1ILEVBQUUsQ0FBQ2IsT0FBSCxDQUFXMUIsRUFBWCxDQUFwQjtBQUVBc0MsVUFBUSxDQUFDSyxVQUFULEdBQXNCLEdBQXRCO0FBQ0FMLFVBQVEsQ0FBQ00sU0FBVCxDQUFtQixjQUFuQixFQUFtQyxrQkFBbkM7QUFDQU4sVUFBUSxDQUFDTyxHQUFULENBQWFDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTCxLQUFmLENBQWI7QUFDRCxDQVZEOztBQVllTiw0RUFBZixFIiwiZmlsZSI6InBhZ2VzL2FwaS9jaGFyYWN0ZXIvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL2NoYXJhY3Rlci9baWRdLmpzXCIpO1xuIiwiY29uc3QgZGF0YSA9IHtcclxuICAwOiB7XHJcbiAgICBpZDogXCIwXCIsXHJcbiAgICBuYW1lOiBcIlJpY2sgU2FuY2hlelwiLFxyXG4gICAgc3RhdHVzOiBcIkFsaXZlXCIsXHJcbiAgICBzcGVjaWVzOiBcIkh1bWFuXCIsXHJcbiAgICB0eXBlOiBcIlwiLFxyXG4gICAgZ2VuZGVyOiBcIk1hbGVcIixcclxuICAgIG9yaWdpbjoge1xyXG4gICAgICBuYW1lOiBcIkVhcnRoIChDLTEzNylcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvbG9jYXRpb24vMVwiLFxyXG4gICAgfSxcclxuICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgIG5hbWU6IFwiRWFydGggKFJlcGxhY2VtZW50IERpbWVuc2lvbilcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvbG9jYXRpb24vMjBcIixcclxuICAgIH0sXHJcbiAgICBpbWFnZTogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci9hdmF0YXIvMS5qcGVnXCIsXHJcbiAgICBlcGlzb2RlOiBbXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzFcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMlwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8zXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzRcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvNVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS82XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzdcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvOFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS85XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzEwXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzExXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzEyXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzEzXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzE0XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzE1XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzE2XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzE3XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzE4XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzE5XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzIwXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzIxXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzIyXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzIzXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzI0XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzI1XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzI2XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzI3XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzI4XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzI5XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzMwXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzMxXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzMyXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzMzXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzM0XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzM1XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzM2XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzM3XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzM4XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzM5XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzQwXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzQxXCIsXHJcbiAgICBdLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyLzFcIixcclxuICAgIGNyZWF0ZWQ6IFwiMjAxNy0xMS0wNFQxODo0ODo0Ni4yNTBaXCIsXHJcbiAgfSxcclxuICAxOiB7XHJcbiAgICBpZDogXCIxXCIsXHJcbiAgICBuYW1lOiBcIk1vcnR5IFNtaXRoXCIsXHJcbiAgICBzdGF0dXM6IFwiQWxpdmVcIixcclxuICAgIHNwZWNpZXM6IFwiSHVtYW5cIixcclxuICAgIHR5cGU6IFwiXCIsXHJcbiAgICBnZW5kZXI6IFwiTWFsZVwiLFxyXG4gICAgb3JpZ2luOiB7XHJcbiAgICAgIG5hbWU6IFwiRWFydGggKEMtMTM3KVwiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9sb2NhdGlvbi8xXCIsXHJcbiAgICB9LFxyXG4gICAgbG9jYXRpb246IHtcclxuICAgICAgbmFtZTogXCJFYXJ0aCAoUmVwbGFjZW1lbnQgRGltZW5zaW9uKVwiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9sb2NhdGlvbi8yMFwiLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyL2F2YXRhci8yLmpwZWdcIixcclxuICAgIGVwaXNvZGU6IFtcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMVwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzNcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvNFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS81XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzZcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvN1wiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS84XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzlcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMTBcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMTFcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMTJcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMTNcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMTRcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMTVcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMTZcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMTdcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMThcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMTlcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMjBcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMjFcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMjJcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMjNcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMjRcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMjVcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMjZcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMjdcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMjhcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMjlcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMzBcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMzFcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMzJcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMzNcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMzRcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMzVcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMzZcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMzdcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMzhcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMzlcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvNDBcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvNDFcIixcclxuICAgIF0sXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvMlwiLFxyXG4gICAgY3JlYXRlZDogXCIyMDE3LTExLTA0VDE4OjUwOjIxLjY1MVpcIixcclxuICB9LFxyXG4gIDI6IHtcclxuICAgIGlkOiBcIjJcIixcclxuICAgIG5hbWU6IFwiU3VtbWVyIFNtaXRoXCIsXHJcbiAgICBzdGF0dXM6IFwiQWxpdmVcIixcclxuICAgIHNwZWNpZXM6IFwiSHVtYW5cIixcclxuICAgIHR5cGU6IFwiXCIsXHJcbiAgICBnZW5kZXI6IFwiRmVtYWxlXCIsXHJcbiAgICBvcmlnaW46IHtcclxuICAgICAgbmFtZTogXCJFYXJ0aCAoUmVwbGFjZW1lbnQgRGltZW5zaW9uKVwiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9sb2NhdGlvbi8yMFwiLFxyXG4gICAgfSxcclxuICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgIG5hbWU6IFwiRWFydGggKFJlcGxhY2VtZW50IERpbWVuc2lvbilcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvbG9jYXRpb24vMjBcIixcclxuICAgIH0sXHJcbiAgICBpbWFnZTogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci9hdmF0YXIvMy5qcGVnXCIsXHJcbiAgICBlcGlzb2RlOiBbXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzZcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvN1wiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS84XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzlcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMTBcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMTFcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMTJcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMTRcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMTVcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMTZcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMTdcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMThcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMTlcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMjBcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMjFcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMjJcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMjNcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMjRcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMjVcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMjZcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMjdcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMjlcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMzBcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMzFcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMzJcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMzNcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMzRcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMzVcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMzZcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMzhcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMzlcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvNDBcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvNDFcIixcclxuICAgIF0sXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvM1wiLFxyXG4gICAgY3JlYXRlZDogXCIyMDE3LTExLTA0VDE5OjA5OjU2LjQyOFpcIixcclxuICB9LFxyXG4gIDM6IHtcclxuICAgIGlkOiBcIjNcIixcclxuICAgIG5hbWU6IFwiQmV0aCBTbWl0aFwiLFxyXG4gICAgc3RhdHVzOiBcIkFsaXZlXCIsXHJcbiAgICBzcGVjaWVzOiBcIkh1bWFuXCIsXHJcbiAgICB0eXBlOiBcIlwiLFxyXG4gICAgZ2VuZGVyOiBcIkZlbWFsZVwiLFxyXG4gICAgb3JpZ2luOiB7XHJcbiAgICAgIG5hbWU6IFwiRWFydGggKFJlcGxhY2VtZW50IERpbWVuc2lvbilcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvbG9jYXRpb24vMjBcIixcclxuICAgIH0sXHJcbiAgICBsb2NhdGlvbjoge1xyXG4gICAgICBuYW1lOiBcIkVhcnRoIChSZXBsYWNlbWVudCBEaW1lbnNpb24pXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2xvY2F0aW9uLzIwXCIsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvYXZhdGFyLzQuanBlZ1wiLFxyXG4gICAgZXBpc29kZTogW1xyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS82XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzdcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvOFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS85XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzEwXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzExXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzEyXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzE0XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzE1XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzE2XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzE4XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzE5XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzIwXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzIxXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzIyXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzIzXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzI0XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzI1XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzI2XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzI3XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzI4XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzI5XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzMwXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzMxXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzMyXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzMzXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzM0XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzM1XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzM2XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzM4XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzM5XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzQwXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzQxXCIsXHJcbiAgICBdLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyLzRcIixcclxuICAgIGNyZWF0ZWQ6IFwiMjAxNy0xMS0wNFQxOToyMjo0My42NjVaXCIsXHJcbiAgfSxcclxuICA0OiB7XHJcbiAgICBpZDogXCI0XCIsXHJcbiAgICBuYW1lOiBcIkplcnJ5IFNtaXRoXCIsXHJcbiAgICBzdGF0dXM6IFwiQWxpdmVcIixcclxuICAgIHNwZWNpZXM6IFwiSHVtYW5cIixcclxuICAgIHR5cGU6IFwiXCIsXHJcbiAgICBnZW5kZXI6IFwiTWFsZVwiLFxyXG4gICAgb3JpZ2luOiB7XHJcbiAgICAgIG5hbWU6IFwiRWFydGggKFJlcGxhY2VtZW50IERpbWVuc2lvbilcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvbG9jYXRpb24vMjBcIixcclxuICAgIH0sXHJcbiAgICBsb2NhdGlvbjoge1xyXG4gICAgICBuYW1lOiBcIkVhcnRoIChSZXBsYWNlbWVudCBEaW1lbnNpb24pXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2xvY2F0aW9uLzIwXCIsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvYXZhdGFyLzUuanBlZ1wiLFxyXG4gICAgZXBpc29kZTogW1xyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS82XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzdcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvOFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS85XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzEwXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzExXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzEyXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzEzXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzE0XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzE1XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzE2XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzE4XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzE5XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzIwXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzIxXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzIyXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzIzXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzI2XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzI5XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzMwXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzMxXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzMyXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzMzXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzM1XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzM2XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzM4XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzM5XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzQwXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzQxXCIsXHJcbiAgICBdLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyLzVcIixcclxuICAgIGNyZWF0ZWQ6IFwiMjAxNy0xMS0wNFQxOToyNjo1Ni4zMDFaXCIsXHJcbiAgfSxcclxuICA1OiB7XHJcbiAgICBpZDogXCI1XCIsXHJcbiAgICBuYW1lOiBcIkFiYWRhbmdvIENsdXN0ZXIgUHJpbmNlc3NcIixcclxuICAgIHN0YXR1czogXCJBbGl2ZVwiLFxyXG4gICAgc3BlY2llczogXCJBbGllblwiLFxyXG4gICAgdHlwZTogXCJcIixcclxuICAgIGdlbmRlcjogXCJGZW1hbGVcIixcclxuICAgIG9yaWdpbjoge1xyXG4gICAgICBuYW1lOiBcIkFiYWRhbmdvXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2xvY2F0aW9uLzJcIixcclxuICAgIH0sXHJcbiAgICBsb2NhdGlvbjoge1xyXG4gICAgICBuYW1lOiBcIkFiYWRhbmdvXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2xvY2F0aW9uLzJcIixcclxuICAgIH0sXHJcbiAgICBpbWFnZTogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci9hdmF0YXIvNi5qcGVnXCIsXHJcbiAgICBlcGlzb2RlOiBbXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMjdcIl0sXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvNlwiLFxyXG4gICAgY3JlYXRlZDogXCIyMDE3LTExLTA0VDE5OjUwOjI4LjI1MFpcIixcclxuICB9LFxyXG4gIDY6IHtcclxuICAgIGlkOiBcIjZcIixcclxuICAgIG5hbWU6IFwiQWJyYWRvbGYgTGluY2xlclwiLFxyXG4gICAgc3RhdHVzOiBcInVua25vd25cIixcclxuICAgIHNwZWNpZXM6IFwiSHVtYW5cIixcclxuICAgIHR5cGU6IFwiR2VuZXRpYyBleHBlcmltZW50XCIsXHJcbiAgICBnZW5kZXI6IFwiTWFsZVwiLFxyXG4gICAgb3JpZ2luOiB7XHJcbiAgICAgIG5hbWU6IFwiRWFydGggKFJlcGxhY2VtZW50IERpbWVuc2lvbilcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvbG9jYXRpb24vMjBcIixcclxuICAgIH0sXHJcbiAgICBsb2NhdGlvbjoge1xyXG4gICAgICBuYW1lOiBcIlRlc3RpY2xlIE1vbnN0ZXIgRGltZW5zaW9uXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2xvY2F0aW9uLzIxXCIsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvYXZhdGFyLzcuanBlZ1wiLFxyXG4gICAgZXBpc29kZTogW1xyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xMFwiLFxyXG4gICAgICBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xMVwiLFxyXG4gICAgXSxcclxuICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci83XCIsXHJcbiAgICBjcmVhdGVkOiBcIjIwMTctMTEtMDRUMTk6NTk6MjAuNTIzWlwiLFxyXG4gIH0sXHJcbiAgNzoge1xyXG4gICAgaWQ6IFwiN1wiLFxyXG4gICAgbmFtZTogXCJBZGp1ZGljYXRvciBSaWNrXCIsXHJcbiAgICBzdGF0dXM6IFwiRGVhZFwiLFxyXG4gICAgc3BlY2llczogXCJIdW1hblwiLFxyXG4gICAgdHlwZTogXCJcIixcclxuICAgIGdlbmRlcjogXCJNYWxlXCIsXHJcbiAgICBvcmlnaW46IHtcclxuICAgICAgbmFtZTogXCJ1bmtub3duXCIsXHJcbiAgICAgIHVybDogXCJcIixcclxuICAgIH0sXHJcbiAgICBsb2NhdGlvbjoge1xyXG4gICAgICBuYW1lOiBcIkNpdGFkZWwgb2YgUmlja3NcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvbG9jYXRpb24vM1wiLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyL2F2YXRhci84LmpwZWdcIixcclxuICAgIGVwaXNvZGU6IFtcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yOFwiXSxcclxuICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci84XCIsXHJcbiAgICBjcmVhdGVkOiBcIjIwMTctMTEtMDRUMjA6MDM6MzQuNzM3WlwiLFxyXG4gIH0sXHJcbiAgODoge1xyXG4gICAgaWQ6IFwiOFwiLFxyXG4gICAgbmFtZTogXCJBZ2VuY3kgRGlyZWN0b3JcIixcclxuICAgIHN0YXR1czogXCJEZWFkXCIsXHJcbiAgICBzcGVjaWVzOiBcIkh1bWFuXCIsXHJcbiAgICB0eXBlOiBcIlwiLFxyXG4gICAgZ2VuZGVyOiBcIk1hbGVcIixcclxuICAgIG9yaWdpbjoge1xyXG4gICAgICBuYW1lOiBcIkVhcnRoIChSZXBsYWNlbWVudCBEaW1lbnNpb24pXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2xvY2F0aW9uLzIwXCIsXHJcbiAgICB9LFxyXG4gICAgbG9jYXRpb246IHtcclxuICAgICAgbmFtZTogXCJFYXJ0aCAoUmVwbGFjZW1lbnQgRGltZW5zaW9uKVwiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9sb2NhdGlvbi8yMFwiLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyL2F2YXRhci85LmpwZWdcIixcclxuICAgIGVwaXNvZGU6IFtcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yNFwiXSxcclxuICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci85XCIsXHJcbiAgICBjcmVhdGVkOiBcIjIwMTctMTEtMDRUMjA6MDY6NTQuOTc2WlwiLFxyXG4gIH0sXHJcbiAgOToge1xyXG4gICAgaWQ6IFwiOVwiLFxyXG4gICAgbmFtZTogXCJBbGFuIFJhaWxzXCIsXHJcbiAgICBzdGF0dXM6IFwiRGVhZFwiLFxyXG4gICAgc3BlY2llczogXCJIdW1hblwiLFxyXG4gICAgdHlwZTogXCJTdXBlcmh1bWFuIChHaG9zdCB0cmFpbnMgc3VtbW9uZXIpXCIsXHJcbiAgICBnZW5kZXI6IFwiTWFsZVwiLFxyXG4gICAgb3JpZ2luOiB7XHJcbiAgICAgIG5hbWU6IFwidW5rbm93blwiLFxyXG4gICAgICB1cmw6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgbG9jYXRpb246IHtcclxuICAgICAgbmFtZTogXCJXb3JsZGVuZGVyJ3MgbGFpclwiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9sb2NhdGlvbi80XCIsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvYXZhdGFyLzEwLmpwZWdcIixcclxuICAgIGVwaXNvZGU6IFtcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8yNVwiXSxcclxuICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci8xMFwiLFxyXG4gICAgY3JlYXRlZDogXCIyMDE3LTExLTA0VDIwOjE5OjA5LjAxN1pcIixcclxuICB9LFxyXG4gIDEwOiB7XHJcbiAgICBpZDogXCIxMFwiLFxyXG4gICAgbmFtZTogXCJBbGJlcnQgRWluc3RlaW5cIixcclxuICAgIHN0YXR1czogXCJEZWFkXCIsXHJcbiAgICBzcGVjaWVzOiBcIkh1bWFuXCIsXHJcbiAgICB0eXBlOiBcIlwiLFxyXG4gICAgZ2VuZGVyOiBcIk1hbGVcIixcclxuICAgIG9yaWdpbjoge1xyXG4gICAgICBuYW1lOiBcIkVhcnRoIChDLTEzNylcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvbG9jYXRpb24vMVwiLFxyXG4gICAgfSxcclxuICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgIG5hbWU6IFwiRWFydGggKFJlcGxhY2VtZW50IERpbWVuc2lvbilcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvbG9jYXRpb24vMjBcIixcclxuICAgIH0sXHJcbiAgICBpbWFnZTogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci9hdmF0YXIvMTEuanBlZ1wiLFxyXG4gICAgZXBpc29kZTogW1wiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzEyXCJdLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyLzExXCIsXHJcbiAgICBjcmVhdGVkOiBcIjIwMTctMTEtMDRUMjA6MjA6MjAuOTY1WlwiLFxyXG4gIH0sXHJcbiAgMTE6IHtcclxuICAgIGlkOiBcIjExXCIsXHJcbiAgICBuYW1lOiBcIkFsZXhhbmRlclwiLFxyXG4gICAgc3RhdHVzOiBcIkRlYWRcIixcclxuICAgIHNwZWNpZXM6IFwiSHVtYW5cIixcclxuICAgIHR5cGU6IFwiXCIsXHJcbiAgICBnZW5kZXI6IFwiTWFsZVwiLFxyXG4gICAgb3JpZ2luOiB7XHJcbiAgICAgIG5hbWU6IFwiRWFydGggKEMtMTM3KVwiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9sb2NhdGlvbi8xXCIsXHJcbiAgICB9LFxyXG4gICAgbG9jYXRpb246IHtcclxuICAgICAgbmFtZTogXCJBbmF0b215IFBhcmtcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvbG9jYXRpb24vNVwiLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyL2F2YXRhci8xMi5qcGVnXCIsXHJcbiAgICBlcGlzb2RlOiBbXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvM1wiXSxcclxuICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci8xMlwiLFxyXG4gICAgY3JlYXRlZDogXCIyMDE3LTExLTA0VDIwOjMyOjMzLjE0NFpcIixcclxuICB9LFxyXG4gIDEyOiB7XHJcbiAgICBpZDogXCIxMlwiLFxyXG4gICAgbmFtZTogXCJBbGllbiBHb29nYWhcIixcclxuICAgIHN0YXR1czogXCJ1bmtub3duXCIsXHJcbiAgICBzcGVjaWVzOiBcIkFsaWVuXCIsXHJcbiAgICB0eXBlOiBcIlwiLFxyXG4gICAgZ2VuZGVyOiBcInVua25vd25cIixcclxuICAgIG9yaWdpbjoge1xyXG4gICAgICBuYW1lOiBcInVua25vd25cIixcclxuICAgICAgdXJsOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgIG5hbWU6IFwiRWFydGggKFJlcGxhY2VtZW50IERpbWVuc2lvbilcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvbG9jYXRpb24vMjBcIixcclxuICAgIH0sXHJcbiAgICBpbWFnZTogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci9hdmF0YXIvMTMuanBlZ1wiLFxyXG4gICAgZXBpc29kZTogW1wiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzMxXCJdLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyLzEzXCIsXHJcbiAgICBjcmVhdGVkOiBcIjIwMTctMTEtMDRUMjA6MzM6MzAuNzc5WlwiLFxyXG4gIH0sXHJcbiAgMTM6IHtcclxuICAgIGlkOiBcIjEzXCIsXHJcbiAgICBuYW1lOiBcIkFsaWVuIE1vcnR5XCIsXHJcbiAgICBzdGF0dXM6IFwidW5rbm93blwiLFxyXG4gICAgc3BlY2llczogXCJBbGllblwiLFxyXG4gICAgdHlwZTogXCJcIixcclxuICAgIGdlbmRlcjogXCJNYWxlXCIsXHJcbiAgICBvcmlnaW46IHtcclxuICAgICAgbmFtZTogXCJ1bmtub3duXCIsXHJcbiAgICAgIHVybDogXCJcIixcclxuICAgIH0sXHJcbiAgICBsb2NhdGlvbjoge1xyXG4gICAgICBuYW1lOiBcIkNpdGFkZWwgb2YgUmlja3NcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvbG9jYXRpb24vM1wiLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyL2F2YXRhci8xNC5qcGVnXCIsXHJcbiAgICBlcGlzb2RlOiBbXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMTBcIl0sXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvMTRcIixcclxuICAgIGNyZWF0ZWQ6IFwiMjAxNy0xMS0wNFQyMDo1MTozMS4zNzNaXCIsXHJcbiAgfSxcclxuICAxNDoge1xyXG4gICAgaWQ6IFwiMTRcIixcclxuICAgIG5hbWU6IFwiQWxpZW4gUmlja1wiLFxyXG4gICAgc3RhdHVzOiBcInVua25vd25cIixcclxuICAgIHNwZWNpZXM6IFwiQWxpZW5cIixcclxuICAgIHR5cGU6IFwiXCIsXHJcbiAgICBnZW5kZXI6IFwiTWFsZVwiLFxyXG4gICAgb3JpZ2luOiB7XHJcbiAgICAgIG5hbWU6IFwidW5rbm93blwiLFxyXG4gICAgICB1cmw6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgbG9jYXRpb246IHtcclxuICAgICAgbmFtZTogXCJDaXRhZGVsIG9mIFJpY2tzXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2xvY2F0aW9uLzNcIixcclxuICAgIH0sXHJcbiAgICBpbWFnZTogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci9hdmF0YXIvMTUuanBlZ1wiLFxyXG4gICAgZXBpc29kZTogW1wiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzEwXCJdLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyLzE1XCIsXHJcbiAgICBjcmVhdGVkOiBcIjIwMTctMTEtMDRUMjA6NTY6MTMuMjE1WlwiLFxyXG4gIH0sXHJcbiAgMTU6IHtcclxuICAgIGlkOiBcIjE1XCIsXHJcbiAgICBuYW1lOiBcIkFtaXNoIEN5Ym9yZ1wiLFxyXG4gICAgc3RhdHVzOiBcIkRlYWRcIixcclxuICAgIHNwZWNpZXM6IFwiQWxpZW5cIixcclxuICAgIHR5cGU6IFwiUGFyYXNpdGVcIixcclxuICAgIGdlbmRlcjogXCJNYWxlXCIsXHJcbiAgICBvcmlnaW46IHtcclxuICAgICAgbmFtZTogXCJ1bmtub3duXCIsXHJcbiAgICAgIHVybDogXCJcIixcclxuICAgIH0sXHJcbiAgICBsb2NhdGlvbjoge1xyXG4gICAgICBuYW1lOiBcIkVhcnRoIChSZXBsYWNlbWVudCBEaW1lbnNpb24pXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2xvY2F0aW9uLzIwXCIsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvYXZhdGFyLzE2LmpwZWdcIixcclxuICAgIGVwaXNvZGU6IFtcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xNVwiXSxcclxuICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci8xNlwiLFxyXG4gICAgY3JlYXRlZDogXCIyMDE3LTExLTA0VDIxOjEyOjQ1LjIzNVpcIixcclxuICB9LFxyXG4gIDE2OiB7XHJcbiAgICBpZDogXCIxNlwiLFxyXG4gICAgbmFtZTogXCJBbm5pZVwiLFxyXG4gICAgc3RhdHVzOiBcIkFsaXZlXCIsXHJcbiAgICBzcGVjaWVzOiBcIkh1bWFuXCIsXHJcbiAgICB0eXBlOiBcIlwiLFxyXG4gICAgZ2VuZGVyOiBcIkZlbWFsZVwiLFxyXG4gICAgb3JpZ2luOiB7XHJcbiAgICAgIG5hbWU6IFwiRWFydGggKEMtMTM3KVwiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9sb2NhdGlvbi8xXCIsXHJcbiAgICB9LFxyXG4gICAgbG9jYXRpb246IHtcclxuICAgICAgbmFtZTogXCJBbmF0b215IFBhcmtcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvbG9jYXRpb24vNVwiLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyL2F2YXRhci8xNy5qcGVnXCIsXHJcbiAgICBlcGlzb2RlOiBbXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvM1wiXSxcclxuICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci8xN1wiLFxyXG4gICAgY3JlYXRlZDogXCIyMDE3LTExLTA0VDIyOjIxOjI0LjQ4MVpcIixcclxuICB9LFxyXG4gIDE3OiB7XHJcbiAgICBpZDogXCIxN1wiLFxyXG4gICAgbmFtZTogXCJBbnRlbm5hIE1vcnR5XCIsXHJcbiAgICBzdGF0dXM6IFwiQWxpdmVcIixcclxuICAgIHNwZWNpZXM6IFwiSHVtYW5cIixcclxuICAgIHR5cGU6IFwiSHVtYW4gd2l0aCBhbnRlbm5hZVwiLFxyXG4gICAgZ2VuZGVyOiBcIk1hbGVcIixcclxuICAgIG9yaWdpbjoge1xyXG4gICAgICBuYW1lOiBcInVua25vd25cIixcclxuICAgICAgdXJsOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgIG5hbWU6IFwiQ2l0YWRlbCBvZiBSaWNrc1wiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9sb2NhdGlvbi8zXCIsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvYXZhdGFyLzE4LmpwZWdcIixcclxuICAgIGVwaXNvZGU6IFtcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMTBcIixcclxuICAgICAgXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvMjhcIixcclxuICAgIF0sXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvMThcIixcclxuICAgIGNyZWF0ZWQ6IFwiMjAxNy0xMS0wNFQyMjoyNToyOS4wMDhaXCIsXHJcbiAgfSxcclxuICAxODoge1xyXG4gICAgaWQ6IFwiMThcIixcclxuICAgIG5hbWU6IFwiQW50ZW5uYSBSaWNrXCIsXHJcbiAgICBzdGF0dXM6IFwidW5rbm93blwiLFxyXG4gICAgc3BlY2llczogXCJIdW1hblwiLFxyXG4gICAgdHlwZTogXCJIdW1hbiB3aXRoIGFudGVubmFlXCIsXHJcbiAgICBnZW5kZXI6IFwiTWFsZVwiLFxyXG4gICAgb3JpZ2luOiB7XHJcbiAgICAgIG5hbWU6IFwidW5rbm93blwiLFxyXG4gICAgICB1cmw6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgbG9jYXRpb246IHtcclxuICAgICAgbmFtZTogXCJ1bmtub3duXCIsXHJcbiAgICAgIHVybDogXCJcIixcclxuICAgIH0sXHJcbiAgICBpbWFnZTogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci9hdmF0YXIvMTkuanBlZ1wiLFxyXG4gICAgZXBpc29kZTogW1wiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzEwXCJdLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyLzE5XCIsXHJcbiAgICBjcmVhdGVkOiBcIjIwMTctMTEtMDRUMjI6Mjg6MTMuNzU2WlwiLFxyXG4gIH0sXHJcbiAgMTk6IHtcclxuICAgIGlkOiBcIjE5XCIsXHJcbiAgICBuYW1lOiBcIkFudHMgaW4gbXkgRXllcyBKb2huc29uXCIsXHJcbiAgICBzdGF0dXM6IFwidW5rbm93blwiLFxyXG4gICAgc3BlY2llczogXCJIdW1hblwiLFxyXG4gICAgdHlwZTogXCJIdW1hbiB3aXRoIGFudHMgaW4gaGlzIGV5ZXNcIixcclxuICAgIGdlbmRlcjogXCJNYWxlXCIsXHJcbiAgICBvcmlnaW46IHtcclxuICAgICAgbmFtZTogXCJ1bmtub3duXCIsXHJcbiAgICAgIHVybDogXCJcIixcclxuICAgIH0sXHJcbiAgICBsb2NhdGlvbjoge1xyXG4gICAgICBuYW1lOiBcIkludGVyZGltZW5zaW9uYWwgQ2FibGVcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvbG9jYXRpb24vNlwiLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiBcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyL2F2YXRhci8yMC5qcGVnXCIsXHJcbiAgICBlcGlzb2RlOiBbXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2VwaXNvZGUvOFwiXSxcclxuICAgIHVybDogXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci8yMFwiLFxyXG4gICAgY3JlYXRlZDogXCIyMDE3LTExLTA0VDIyOjM0OjUzLjY1OVpcIixcclxuICB9LFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBkYXRhO1xyXG4iLCJpbXBvcnQgYWxsRGF0YSBmcm9tIFwiLi9kYXRhXCI7XHJcblxyXG5jbGFzcyBEYXRhYmFzZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBnZXRBbGwoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGFzQXJyYXkgPSBPYmplY3QudmFsdWVzKGFsbERhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWxsREFUQTpcIiwgYXNBcnJheSk7XHJcbiAgICAgICAgYXdhaXQgcmFuZG9tRGVsYXkoKTtcclxuICAgICAgICByZXNvbHZlKGFzQXJyYXkpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0QnlJZChpZCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjaGFyYWN0ZXIgPSBPYmplY3QudmFsdWVzKGFsbERhdGEpLmZpbmQoXHJcbiAgICAgICAgICAoY2hhcmFjdGVyKSA9PiBjaGFyYWN0ZXIuaWQgPT09IGlkXHJcbiAgICAgICAgKTtcclxuICAgICAgICBhd2FpdCByYW5kb21EZWxheSgpO1xyXG4gICAgICAgIHJlc29sdmUoY2hhcmFjdGVyKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHJhbmRvbURlbGF5ID0gKCkgPT5cclxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgY29uc3QgbWF4ID0gMzUwO1xyXG4gICAgY29uc3QgbWluID0gMTAwO1xyXG4gICAgY29uc3QgZGVsYXkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG5cclxuICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgZGVsYXkpO1xyXG4gIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YWJhc2U7XHJcbiIsImltcG9ydCBEQiBmcm9tIFwiLi4vLi4vLi4vZGF0YWJhc2UvZGJcIjtcclxuXHJcbmNvbnN0IGFsbENoYXJhY3RlcnMgPSBhc3luYyAocmVxdWVzdCwgcmVzcG9uc2UpID0+IHtcclxuICBjb25zdCBkYiA9IG5ldyBEQigpO1xyXG5cclxuICBjb25zdCBpZCA9IHJlcXVlc3QucXVlcnkuaWQ7XHJcblxyXG4gIGNvbnN0IGVudHJ5ID0gYXdhaXQgZGIuZ2V0QnlJZChpZCk7XHJcblxyXG4gIHJlc3BvbnNlLnN0YXR1c0NvZGUgPSAyMDA7XHJcbiAgcmVzcG9uc2Uuc2V0SGVhZGVyKFwiQ29udGVudC10eXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICByZXNwb25zZS5lbmQoSlNPTi5zdHJpbmdpZnkoZW50cnkpKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFsbENoYXJhY3RlcnM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=