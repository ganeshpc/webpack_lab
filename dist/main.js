/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (() => {

eval("// import command from 'js/clickCommand.js';\n\nfunction component() {\n  const element = document.createElement('div');\n\n  // Lodash, now imported by this script\n  element.innerHTML = 'js/clickCommand.js';\n\n  return element;\n}\n\nfunction createAButton() {\n  console.log(command);\n  const button = document.createElement('button');\n  button.title = 'clickMe';\n  button.appendChild(document.createTextNode('clickMe'));\n  button.onclick = async () => {\n    try {\n      const file = 'clickCommand.js';\n      const command = command; //await import(file);\n    } catch (err) {\n      console.error(`err loading command module: ${err}`);\n      console.dir(err);\n    }\n\n    console.log('you really clicked!!!');\n  };\n  return button;\n}\n\nfunction container() {\n  const container = document.createElement('div');\n  container.appendChild(component());\n  container.appendChild(createAButton());\n  return container;\n}\ndocument.body.appendChild(container());\n\n\n//# sourceURL=webpack://getting-started-using-a-configuration/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/index.js"]();
/******/ 	
/******/ })()
;