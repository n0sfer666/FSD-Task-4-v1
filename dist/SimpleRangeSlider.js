(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SimpleRangeSlider"] = factory();
	else
		root["SimpleRangeSlider"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Plugin/Plugin.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Plugin/Controller/Controller.ts":
/*!*********************************************!*\
  !*** ./src/Plugin/Controller/Controller.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Controller = (function () {
    function Controller(model, view) {
        this.model = model;
        this.view = view;
        this.is_drawn = false;
        this.current_position = this.model.current_position;
        this.current_value = this.model.current_value;
        if (!this.is_drawn) {
            this.view.draw(this.model.configuration.connect, this.model.configuration.tooltip, this.model.configuration.orientation, this.current_position, this.current_value);
            this.is_drawn = true;
        }
        ;
        if (this.is_drawn) {
            this.view.move();
            setInterval(this.management, 50);
        }
    }
    Controller.prototype.management = function () {
    };
    return Controller;
}());
exports.Controller = Controller;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQTtJQU1JLG9CQUFvQixLQUFZLEVBQVUsSUFBVTtRQUFoQyxVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUo1QyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBTTlCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDO1FBQ3BELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7UUFFOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUc7WUFFakIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFDcEMsSUFBSSxDQUFDLGdCQUFnQixFQUNyQixJQUFJLENBQUMsYUFBYSxDQUFFLENBQUM7WUFFckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDeEI7UUFBQSxDQUFDO1FBRUYsSUFBRyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBRWQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNqQixXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUNwQztJQUNMLENBQUM7SUFFRCwrQkFBVSxHQUFWO0lBRUEsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQyxBQWhDRCxJQWdDQztBQWhDWSxnQ0FBVSJ9

/***/ }),

/***/ "./src/Plugin/Model/Model.ts":
/*!***********************************!*\
  !*** ./src/Plugin/Model/Model.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Model = (function () {
    function Model(configuration) {
        this.configuration = configuration;
        if (!Array.isArray(this.configuration.start)) {
            this.current_value = this.configuration.start;
            this.current_position = 0;
            this.value_to_position(this.current_value);
        }
        else {
            this.current_value = this.configuration.start;
            this.current_position = [0, 0];
            this.value_to_position(this.current_value);
        }
    }
    Model.prototype.value_to_position = function (value) {
        var range = this.configuration.range;
        var result = Array.isArray(value)
            ? [(value[0] - range[0]) / (range[1] - range[0]),
                (value[1] - range[0]) / (range[1] - range[0])]
            : (value - range[0]) / (range[1] - range[0]);
        this.current_position = result;
    };
    Model.prototype.position_to_value = function (position) {
        var range = this.configuration.range;
        var result = Array.isArray(position)
            ? [position[0] * (range[1] - range[0]) + range[0],
                position[1] * (range[1] - range[0]) + range[0]]
            : position * (range[1] - range[0]) + range[0];
        this.current_value = result;
    };
    return Model;
}());
exports.Model = Model;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBS0ksZUFBNEIsYUFBOEI7UUFBOUIsa0JBQWEsR0FBYixhQUFhLENBQWlCO1FBRXRELElBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFFekMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUM5QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FFOUM7YUFBTTtZQUVILElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFDOUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FFOUM7SUFHTCxDQUFDO0lBR0QsaUNBQWlCLEdBQWpCLFVBQWtCLEtBQXFCO1FBRW5DLElBQUksS0FBSyxHQUFxQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUN2RCxJQUFJLE1BQU0sR0FBbUIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDN0MsQ0FBQyxDQUFDLENBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRTtZQUNqRCxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFL0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQztJQUNuQyxDQUFDO0lBRUQsaUNBQWlCLEdBQWpCLFVBQWtCLFFBQXdCO1FBRXRDLElBQUksS0FBSyxHQUFxQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUN2RCxJQUFJLE1BQU0sR0FBbUIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDaEQsQ0FBQyxDQUFDLENBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUU7WUFDcEQsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7SUFDaEMsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQUFDLEFBOUNELElBOENDO0FBOUNZLHNCQUFLIn0=

/***/ }),

/***/ "./src/Plugin/Plugin.ts":
/*!******************************!*\
  !*** ./src/Plugin/Plugin.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = __webpack_require__(/*! ./Model/Model */ "./src/Plugin/Model/Model.ts");
var View_1 = __webpack_require__(/*! ./View/View */ "./src/Plugin/View/View.ts");
var Controller_1 = __webpack_require__(/*! ./Controller/Controller */ "./src/Plugin/Controller/Controller.ts");
var SimpleRangeSlider = (function () {
    function SimpleRangeSlider(container, user_configuration) {
        this.container = container;
        this.user_configuration = user_configuration;
        var slider = this.container.get(0);
        var default_Configuration = {
            orientation: 'horizontal',
            start: 10,
            range: [0, 100],
            step: 1,
            connect: true,
            tooltip: false
        };
        var configuration = {
            orientation: this.user_configuration.orientation === undefined ? default_Configuration.orientation : this.user_configuration.orientation,
            start: this.user_configuration.start === undefined ? default_Configuration.start : this.user_configuration.start,
            range: this.user_configuration.range === undefined ? default_Configuration.range : this.user_configuration.range,
            step: this.user_configuration.step === undefined ? default_Configuration.step : this.user_configuration.step,
            connect: this.user_configuration.connect === undefined ? default_Configuration.connect : this.user_configuration.connect,
            tooltip: this.user_configuration.tooltip === undefined ? default_Configuration.tooltip : this.user_configuration.tooltip
        };
        this.model = new Model_1.Model(configuration);
        this.view = new View_1.View(slider);
        this.controller = new Controller_1.Controller(this.model, this.view);
        console.log(this.controller);
        console.log('');
    }
    return SimpleRangeSlider;
}());
exports.SimpleRangeSlider = SimpleRangeSlider;
;
(function ($) {
    $.fn.extend({
        SimpleRangeSlider: function (user_configuration) {
            return new SimpleRangeSlider(this, user_configuration);
        }
    });
}(jQuery));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGx1Z2luLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUGx1Z2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQXNDO0FBQ3RDLG9DQUFtQztBQUNuQyxzREFBcUQ7QUFFckQ7SUFNSSwyQkFBb0IsU0FBaUIsRUFBVSxrQkFBbUM7UUFBOUQsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUFVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBaUI7UUFFOUUsSUFBSSxNQUFNLEdBQWdCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWhELElBQUkscUJBQXFCLEdBQW9CO1lBQ3pDLFdBQVcsRUFBRSxZQUFZO1lBQ3pCLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNmLElBQUksRUFBRSxDQUFDO1lBQ1AsT0FBTyxFQUFFLElBQUk7WUFDYixPQUFPLEVBQUUsS0FBSztTQUNqQixDQUFBO1FBRUQsSUFBSSxhQUFhLEdBQW9CO1lBQ2pDLFdBQVcsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVztZQUN4SSxLQUFLLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUs7WUFDaEgsS0FBSyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLO1lBQ2hILElBQUksRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSTtZQUM1RyxPQUFPLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU87WUFDeEgsT0FBTyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPO1NBQzNILENBQUE7UUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksYUFBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLHVCQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFHeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUwsd0JBQUM7QUFBRCxDQUFDLEFBckNELElBcUNDO0FBckNZLDhDQUFpQjtBQXVDOUIsQ0FBQztBQUFBLENBQUMsVUFBUyxDQUFlO0lBQ3RCLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ1IsaUJBQWlCLEVBQUUsVUFBUyxrQkFBbUM7WUFDM0QsT0FBTyxJQUFJLGlCQUFpQixDQUFTLElBQUksRUFBbUIsa0JBQWtCLENBQUMsQ0FBQztRQUNwRixDQUFDO0tBQ0osQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUEifQ==

/***/ }),

/***/ "./src/Plugin/View/Slider/Connect/Connect.ts":
/*!***************************************************!*\
  !*** ./src/Plugin/View/Slider/Connect/Connect.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Shortcut_1 = __webpack_require__(/*! ../_shortcut/Shortcut */ "./src/Plugin/View/Slider/_shortcut/Shortcut.ts");
var Connect = (function (_super) {
    __extends(Connect, _super);
    function Connect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.is_drawn = false;
        return _this;
    }
    Connect.prototype.draw_connect = function (is_draw, orientation, current_position) {
        if (!is_draw || this.is_drawn || orientation === undefined || current_position === undefined) {
            return undefined;
        }
        this.element = this.create_element_with_class('connect', orientation);
        var style = Array.isArray(current_position)
            ? orientation === 'horizontal'
                ? 'left: ' + (current_position[0] * 100) + '%; width: ' + ((current_position[1] - current_position[0]) * 100) + '%;'
                : 'top: ' + (current_position[0] * 100) + '%; height: ' + ((current_position[1] - current_position[0]) * 100) + '%;'
            : orientation === 'horizontal'
                ? 'width: ' + current_position * 100 + '%;'
                : 'height: ' + current_position * 100 + '%;';
        this.element.setAttribute('style', style);
    };
    return Connect;
}(Shortcut_1.Shortcut));
exports.Connect = Connect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29ubmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvbm5lY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQWlEO0FBRWpEO0lBQTZCLDJCQUFRO0lBQXJDO1FBQUEscUVBeUJDO1FBdEJXLGNBQVEsR0FBWSxLQUFLLENBQUM7O0lBc0J0QyxDQUFDO0lBcEJHLDhCQUFZLEdBQVosVUFBYSxPQUFnQixFQUFFLFdBQWtDLEVBQUUsZ0JBQWlDO1FBRWhHLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxXQUFXLEtBQUssU0FBUyxJQUFJLGdCQUFnQixLQUFLLFNBQVMsRUFBRTtZQUMxRixPQUFPLFNBQVMsQ0FBQztTQUNwQjtRQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUV0RSxJQUFJLEtBQUssR0FBVyxLQUFLLENBQUMsT0FBTyxDQUFFLGdCQUFnQixDQUFFO1lBQ2pELENBQUMsQ0FBQyxXQUFXLEtBQUssWUFBWTtnQkFDMUIsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLFlBQVksR0FBRyxDQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJO2dCQUNySCxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsYUFBYSxHQUFHLENBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUk7WUFDekgsQ0FBQyxDQUFDLFdBQVcsS0FBSyxZQUFZO2dCQUMxQixDQUFDLENBQUMsU0FBUyxHQUFHLGdCQUFnQixHQUFHLEdBQUcsR0FBRyxJQUFJO2dCQUMzQyxDQUFDLENBQUMsVUFBVSxHQUFHLGdCQUFnQixHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFFckQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRTlDLENBQUM7SUFFTCxjQUFDO0FBQUQsQ0FBQyxBQXpCRCxDQUE2QixtQkFBUSxHQXlCcEM7QUF6QlksMEJBQU8ifQ==

/***/ }),

/***/ "./src/Plugin/View/Slider/Slider.ts":
/*!******************************************!*\
  !*** ./src/Plugin/View/Slider/Slider.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Shortcut_1 = __webpack_require__(/*! ./_shortcut/Shortcut */ "./src/Plugin/View/Slider/_shortcut/Shortcut.ts");
var Tooltip_1 = __webpack_require__(/*! ./Tooltip/Tooltip */ "./src/Plugin/View/Slider/Tooltip/Tooltip.ts");
var Thumbler_1 = __webpack_require__(/*! ./Thumbler/Thumbler */ "./src/Plugin/View/Slider/Thumbler/Thumbler.ts");
var Connect_1 = __webpack_require__(/*! ./Connect/Connect */ "./src/Plugin/View/Slider/Connect/Connect.ts");
var Slider = (function (_super) {
    __extends(Slider, _super);
    function Slider() {
        var _this = _super.call(this) || this;
        _this.is_drawn = false;
        _this.tooltip = new Tooltip_1.Tooltip;
        _this.thumbler = new Thumbler_1.Thumbler;
        _this.connect = new Connect_1.Connect;
        return _this;
    }
    Slider.prototype.draw_slider = function (is_connect, is_tooltip, orientation, current_position, current_value) {
        var _this = this;
        if (this.is_drawn) {
            return undefined;
        }
        this.element = this.create_element_with_class('slider', orientation);
        this.thumbler.draw_thumbler(orientation, current_position);
        if (Array.isArray(this.thumbler.element)) {
            this.element.append(this.thumbler.element[0], this.thumbler.element[1]);
        }
        else if (this.thumbler.element) {
            this.element.append(this.thumbler.element);
        }
        if (is_connect) {
            this.connect.draw_connect(is_connect, orientation, current_position);
            if (this.element && this.connect.element) {
                this.element.append(this.connect.element);
            }
        }
        if (is_tooltip) {
            this.tooltip.draw_tooltip(is_tooltip, orientation, current_value);
            if (Array.isArray(this.thumbler.element)) {
                this.thumbler.element.forEach(function (item, index) {
                    if (Array.isArray(_this.tooltip.element)) {
                        item.append(_this.tooltip.element[index]);
                    }
                });
            }
            else if (!Array.isArray(this.tooltip.element)) {
                if (this.thumbler.element && this.tooltip.element) {
                    this.thumbler.element.append(this.tooltip.element);
                }
            }
        }
        this.is_drawn = true;
    };
    return Slider;
}(Shortcut_1.Shortcut));
exports.Slider = Slider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2xpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU2xpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUFnRDtBQUVoRCw2Q0FBNEM7QUFDNUMsZ0RBQStDO0FBQy9DLDZDQUE0QztBQUU1QztJQUE0QiwwQkFBUTtJQVNoQztRQUFBLFlBQ0ksaUJBQU8sU0FJVjtRQVBPLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFJOUIsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUM7UUFDM0IsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLG1CQUFRLENBQUM7UUFDN0IsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUM7O0lBQy9CLENBQUM7SUFFRCw0QkFBVyxHQUFYLFVBQVksVUFBbUIsRUFBRSxVQUFtQixFQUFFLFdBQWlDLEVBQUUsZ0JBQWdDLEVBQUUsYUFBOEI7UUFBekosaUJBOENDO1FBN0NHLElBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNkLE9BQU8sU0FBUyxDQUFBO1NBQ25CO1FBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRXJFLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzNELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBRSxFQUFHO1lBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDMUU7YUFBTSxJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFO1lBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUE7U0FDN0M7UUFFRCxJQUFHLFVBQVUsRUFBRTtZQUNYLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztZQUNyRSxJQUFHLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDN0M7U0FDSjtRQUdELElBQUcsVUFBVSxFQUFFO1lBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQztZQUVsRSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUUsRUFBRztnQkFFekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFFLFVBQUUsSUFBSSxFQUFFLEtBQUs7b0JBQ3hDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBRSxLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBRSxFQUFHO3dCQUV4QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7cUJBRTVDO2dCQUNMLENBQUMsQ0FBQyxDQUFBO2FBRUw7aUJBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUUsRUFBRztnQkFFaEQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRztvQkFFaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBRXREO2FBQ0o7U0FDSjtRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQyxBQS9ERCxDQUE0QixtQkFBUSxHQStEbkM7QUEvRFksd0JBQU0ifQ==

/***/ }),

/***/ "./src/Plugin/View/Slider/Thumbler/Thumbler.ts":
/*!*****************************************************!*\
  !*** ./src/Plugin/View/Slider/Thumbler/Thumbler.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Shortcut_1 = __webpack_require__(/*! ../_shortcut/Shortcut */ "./src/Plugin/View/Slider/_shortcut/Shortcut.ts");
var Thumbler = (function (_super) {
    __extends(Thumbler, _super);
    function Thumbler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.is_drawn = false;
        return _this;
    }
    Thumbler.prototype.draw_thumbler = function (orientation, current_position) {
        this.orientation = orientation;
        if (!this.is_drawn) {
            this.element = Array.isArray(current_position)
                ? this.create_tooltip_or_thumbler(true, false, orientation)
                : this.create_tooltip_or_thumbler(true, true, orientation);
            if (Array.isArray(this.element) && Array.isArray(current_position)) {
                var style_1 = orientation === 'horizontal'
                    ? ['transform: translateX(' + (current_position[0] * 1000) + '%)',
                        'transform: translateX(' + (current_position[1] * 1000) + '%)']
                    : ['transform: translateY(' + (current_position[0] * 1000) + '%)',
                        'transform: translateY(' + (current_position[1] * 1000) + '%)'];
                this.element.forEach(function (item, index) {
                    item.setAttribute('style', style_1[index]);
                });
            }
            else if (!Array.isArray(this.element) && !Array.isArray(current_position)) {
                var style = orientation === 'horizontal'
                    ? 'transform: translateX(' + (current_position * 1000) + '%)'
                    : 'transform: translateY(' + (current_position * 1000) + '%)';
                this.element.setAttribute('style', style);
            }
            this.is_drawn = true;
        }
    };
    Thumbler.prototype.move_thumbler = function (container) {
        var _this = this;
        if (this.element) {
            if (Array.isArray(this.element)) {
                this.element.forEach(function (item, index) {
                    _this.on_mouse_down(container, item);
                });
            }
            else {
                var item = this.element && !Array.isArray(this.element)
                    ? this.element
                    : document.createElement('div');
                this.on_mouse_down(container, item);
            }
        }
    };
    Thumbler.prototype.get_shift = function (element, event) {
        var result = this.orientation === 'horizontal'
            ? event.clientX - element.getBoundingClientRect().left
            : event.clientY - element.getBoundingClientRect().top;
        return result;
    };
    Thumbler.prototype.on_mouse_down = function (container, element) {
        var _this = this;
        var orientation = this.orientation
            ? this.orientation
            : 'horizontal';
        element.onmousedown = function (event) {
            event.preventDefault();
            var shift = _this.get_shift(element, event);
            document.addEventListener('mousemove', on_mouse_move);
            document.addEventListener('mouseup', on_mouse_up);
            function on_mouse_move(event) {
                var new_position;
                var new_position_in_percent;
                if (orientation === 'horizontal') {
                    new_position = event.clientX - shift - container.getBoundingClientRect().left;
                    new_position_in_percent = new_position / container.offsetWidth;
                }
                else {
                    new_position = event.clientY - shift - container.getBoundingClientRect().top;
                    new_position_in_percent = new_position / container.offsetHeight;
                }
                if (new_position_in_percent > 1) {
                    new_position_in_percent = 1;
                }
                else if (new_position_in_percent < 0) {
                    new_position_in_percent = 0;
                }
                element.dataset['position'] = String(new_position_in_percent);
            }
            function on_mouse_up() {
                document.removeEventListener('mousemove', on_mouse_move);
                document.removeEventListener('mouseup', on_mouse_up);
            }
        };
    };
    return Thumbler;
}(Shortcut_1.Shortcut));
exports.Thumbler = Thumbler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGh1bWJsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUaHVtYmxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrREFBaUQ7QUFFakQ7SUFBOEIsNEJBQVE7SUFBdEM7UUFBQSxxRUFnSEM7UUE1R1csY0FBUSxHQUFZLEtBQUssQ0FBQzs7SUE0R3RDLENBQUM7SUExR0csZ0NBQWEsR0FBYixVQUFjLFdBQWlDLEVBQUUsZ0JBQWdDO1FBRTdFLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBRS9CLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFHO1lBRWpCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDMUMsQ0FBQyxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQztnQkFDM0QsQ0FBQyxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBRS9ELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsT0FBTyxDQUFFLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBRSxnQkFBZ0IsQ0FBRSxFQUFHO2dCQUVyRSxJQUFJLE9BQUssR0FBYSxXQUFXLEtBQUssWUFBWTtvQkFDOUMsQ0FBQyxDQUFDLENBQUUsd0JBQXdCLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJO3dCQUM5RCx3QkFBd0IsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBRTtvQkFDcEUsQ0FBQyxDQUFDLENBQUUsd0JBQXdCLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJO3dCQUM5RCx3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

/***/ }),

/***/ "./src/Plugin/View/Slider/Tooltip/Tooltip.ts":
/*!***************************************************!*\
  !*** ./src/Plugin/View/Slider/Tooltip/Tooltip.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Shortcut_1 = __webpack_require__(/*! ../_shortcut/Shortcut */ "./src/Plugin/View/Slider/_shortcut/Shortcut.ts");
var Tooltip = (function (_super) {
    __extends(Tooltip, _super);
    function Tooltip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.is_drawn = false;
        return _this;
    }
    Tooltip.prototype.draw_tooltip = function (is_draw, orientation, current_value) {
        if (!is_draw || orientation === undefined || current_value === undefined || this.is_drawn) {
            return undefined;
        }
        this.element = Array.isArray(current_value)
            ? this.create_tooltip_or_thumbler(false, false, orientation)
            : this.create_tooltip_or_thumbler(false, true, orientation);
        this.set_innerText_tooltip(current_value);
        this.is_drawn = true;
    };
    Tooltip.prototype.set_innerText_tooltip = function (current_value) {
        if (Array.isArray(this.element) && Array.isArray(current_value)) {
            this.element.forEach(function (item, index) {
                item.innerText = String(current_value[index]);
            });
        }
        if (!Array.isArray(this.element) && !Array.isArray(current_value) && this.element) {
            this.element.innerHTML = String(current_value);
        }
    };
    return Tooltip;
}(Shortcut_1.Shortcut));
exports.Tooltip = Tooltip;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9vbHRpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRvb2x0aXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQWlEO0FBRWpEO0lBQTZCLDJCQUFRO0lBQXJDO1FBQUEscUVBbUNDO1FBaENXLGNBQVEsR0FBWSxLQUFLLENBQUM7O0lBZ0N0QyxDQUFDO0lBOUJHLDhCQUFZLEdBQVosVUFBYSxPQUFnQixFQUFFLFdBQWtDLEVBQUUsYUFBOEI7UUFFN0YsSUFBRyxDQUFDLE9BQU8sSUFBSSxXQUFXLEtBQUssU0FBUyxJQUFJLGFBQWEsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUN0RixPQUFPLFNBQVMsQ0FBQztTQUNwQjtRQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBRSxhQUFhLENBQUU7WUFDekMsQ0FBQyxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQztZQUM1RCxDQUFDLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFFaEUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRTFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFFRCx1Q0FBcUIsR0FBckIsVUFBc0IsYUFBNkI7UUFDL0MsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUUsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFFLGFBQWEsQ0FBRSxFQUFHO1lBRWxFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFFLEtBQUs7Z0JBRTdCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFFLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBRSxDQUFDO1lBRXBELENBQUMsQ0FBQyxDQUFBO1NBQ0w7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFFLGFBQWEsQ0FBRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUc7WUFFcEYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFFLGFBQWEsQ0FBRSxDQUFDO1NBRXBEO0lBQ0wsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDLEFBbkNELENBQTZCLG1CQUFRLEdBbUNwQztBQW5DWSwwQkFBTyJ9

/***/ }),

/***/ "./src/Plugin/View/Slider/_shortcut/Shortcut.ts":
/*!******************************************************!*\
  !*** ./src/Plugin/View/Slider/_shortcut/Shortcut.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Shortcut = (function () {
    function Shortcut() {
    }
    Shortcut.prototype.create_element_with_class = function (css_class, orientation) {
        var str_class = 'SRS__' + css_class;
        var css_class_without_orientation = str_class + ' ' + str_class + '_';
        var element = document.createElement('div');
        element.setAttribute('class', (css_class_without_orientation + orientation));
        return element;
    };
    Shortcut.prototype.create_tooltip_or_thumbler = function (is_thumbler, is_single, orientation) {
        var element;
        element = is_thumbler
            ? is_single
                ? this.create_element_with_class('thumbler', orientation)
                : [this.create_element_with_class('thumbler', orientation), this.create_element_with_class('thumbler', orientation)]
            : is_single
                ? this.create_element_with_class('tooltip', orientation)
                : [this.create_element_with_class('tooltip', orientation), this.create_element_with_class('tooltip', orientation)];
        return element;
    };
    return Shortcut;
}());
exports.Shortcut = Shortcut;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hvcnRjdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTaG9ydGN1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBQUE7SUF5QkEsQ0FBQztJQXZCRyw0Q0FBeUIsR0FBekIsVUFBMkIsU0FBeUIsRUFBRSxXQUFpQztRQUNuRixJQUFJLFNBQVMsR0FBVyxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQzVDLElBQUksNkJBQTZCLEdBQVcsU0FBUyxHQUFHLEdBQUcsR0FBRyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBRTlFLElBQUksT0FBTyxHQUFnQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pELE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsNkJBQTZCLEdBQUcsV0FBVyxDQUFDLENBQUUsQ0FBQztRQUU5RSxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRUQsNkNBQTBCLEdBQTFCLFVBQTRCLFdBQW9CLEVBQUUsU0FBa0IsRUFBRSxXQUFpQztRQUNuRyxJQUFJLE9BQW1DLENBQUM7UUFDeEMsT0FBTyxHQUFHLFdBQVc7WUFDakIsQ0FBQyxDQUFDLFNBQVM7Z0JBQ1AsQ0FBQyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDO2dCQUN6RCxDQUFDLENBQUMsQ0FBRSxJQUFJLENBQUMseUJBQXlCLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUU7WUFDMUgsQ0FBQyxDQUFDLFNBQVM7Z0JBQ1AsQ0FBQyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDO2dCQUN4RCxDQUFDLENBQUMsQ0FBRSxJQUFJLENBQUMseUJBQXlCLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUUsQ0FBQTtRQUU1SCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRUwsZUFBQztBQUFELENBQUMsQUF6QkQsSUF5QkM7QUF6QlksNEJBQVEifQ==

/***/ }),

/***/ "./src/Plugin/View/View.ts":
/*!*********************************!*\
  !*** ./src/Plugin/View/View.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Slider_1 = __webpack_require__(/*! ./Slider/Slider */ "./src/Plugin/View/Slider/Slider.ts");
var View = (function () {
    function View(container) {
        this.container = container;
        this.is_drawn = false;
        this.slider = new Slider_1.Slider;
    }
    View.prototype.draw = function (is_connect, is_tooltip, orientation, current_position, current_value) {
        var _a, _b, _c;
        if (this.is_drawn) {
            return undefined;
        }
        (_a = this.slider) === null || _a === void 0 ? void 0 : _a.draw_slider(is_connect, is_tooltip, orientation, current_position, current_value);
        if (((_b = this.slider) === null || _b === void 0 ? void 0 : _b.element) !== undefined) {
            this.container.append((_c = this.slider) === null || _c === void 0 ? void 0 : _c.element);
            this.is_drawn = true;
        }
    };
    View.prototype.move = function () {
        if (this.slider) {
            this.slider.thumbler.move_thumbler(this.container);
        }
    };
    return View;
}());
exports.View = View;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBeUM7QUFFekM7SUFLSSxjQUFvQixTQUFzQjtRQUF0QixjQUFTLEdBQVQsU0FBUyxDQUFhO1FBRjFDLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFJdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGVBQU0sQ0FBQztJQUM3QixDQUFDO0lBRUQsbUJBQUksR0FBSixVQUFLLFVBQW1CLEVBQUUsVUFBbUIsRUFBRSxXQUFpQyxFQUFFLGdCQUFnQyxFQUFFLGFBQThCOztRQUM5SSxJQUFHLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZCxPQUFPLFNBQVMsQ0FBQztTQUNwQjtRQUNELE1BQUEsSUFBSSxDQUFDLE1BQU0sMENBQUUsV0FBVyxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRTtRQUMvRixJQUFHLE9BQUEsSUFBSSxDQUFDLE1BQU0sMENBQUUsT0FBTyxNQUFLLFNBQVMsRUFBRTtZQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sT0FBQyxJQUFJLENBQUMsTUFBTSwwQ0FBRSxPQUFPLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUN4QjtJQUNMLENBQUM7SUFFRCxtQkFBSSxHQUFKO1FBQ0ksSUFBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN0RDtJQUNMLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQyxBQTFCRCxJQTBCQztBQTFCWSxvQkFBSSJ9

/***/ })

/******/ })["default"];
});