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
        var _this = this;
        this.model = model;
        this.view = view;
        this.is_drawn = false;
        if (!this.is_drawn) {
            this.view.draw(this.model.configuration.connect, this.model.configuration.tooltip, this.model.configuration.orientation, this.model.current_position, this.model.current_value);
            this.is_drawn = true;
        }
        ;
        if (this.is_drawn) {
            this.view.move();
            setInterval(function () {
                if (Array.isArray(_this.model.new_position)
                    && Array.isArray(_this.view.slider.thumbler.element)) {
                    for (var i = 0; i < _this.model.new_position.length; i++) {
                        _this.model.new_position[i] = Number(_this.view.slider.thumbler.element[i].dataset['position']);
                    }
                }
                else if (!Array.isArray(_this.view.slider.thumbler.element)
                    && _this.view.slider.thumbler.element) {
                    _this.model.new_position = Number(_this.view.slider.thumbler.element.dataset['position']);
                }
                _this.model.is_move_thumbler();
            }, 1500);
        }
    }
    return Controller;
}());
exports.Controller = Controller;


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
            this.new_value = this.current_value;
            this.current_position = this.value_to_position(this.current_value);
            this.new_position = this.current_position;
        }
        else {
            this.current_value = this.configuration.start;
            this.new_value = this.current_value;
            this.current_position = this.value_to_position(this.current_value);
            this.new_position = this.current_position;
        }
    }
    Model.prototype.value_to_position = function (value) {
        var range = this.configuration.range;
        var result = Array.isArray(value)
            ? [(value[0] - range[0]) / (range[1] - range[0]),
                (value[1] - range[0]) / (range[1] - range[0])]
            : (value - range[0]) / (range[1] - range[0]);
        return result;
    };
    Model.prototype.position_to_value = function (position) {
        var range = this.configuration.range;
        var result = Array.isArray(position)
            ? [(position[0] * (range[1] - range[0])) + range[0],
                (position[1] * (range[1] - range[0])) + range[0]]
            : position * (range[1] - range[0]) + range[0];
        return result;
    };
    Model.prototype.is_move_thumbler = function () {
        this.new_value = this.position_to_value(this.new_position);
        var boundary;
        if (Array.isArray(this.new_value)
            && Array.isArray(this.current_value)) {
            var index_of_changed_value = 0;
            for (var i = 0; i < this.new_value.length; i++) {
                if (this.new_value[i] !== this.current_value[i]) {
                    index_of_changed_value = i;
                }
            }
            boundary = this.set_boundary(index_of_changed_value);
            if (this.new_value[index_of_changed_value] <= boundary[0]) {
                this.current_value[index_of_changed_value] = boundary[0];
                this.current_position = this.value_to_position(this.current_value);
            }
        }
        else {
            boundary = this.set_boundary();
        }
    };
    Model.prototype.set_boundary = function (index_of_changed_value) {
        var result = this.configuration.range;
        var step = this.configuration.step;
        var range = this.configuration.range;
        if (index_of_changed_value === undefined) {
            if (!Array.isArray(this.current_value)) {
                result[0] = this.current_value - step >= range[0]
                    ? this.current_value - step
                    : range[0];
                result[1] = this.current_value + step <= range[1]
                    ? this.current_value + step
                    : range[1];
                return result;
            }
            else {
                return result;
            }
        }
        else {
            if (Array.isArray(this.current_value)) {
                if (index_of_changed_value === 0) {
                    result[0] = this.current_value[0] - step >= range[0]
                        ? this.current_value[0] - step
                        : range[0];
                    result[1] = this.current_value[0] + step <= this.current_value[1]
                        ? this.current_value[0] + step
                        : this.current_value[0];
                    return result;
                }
                else {
                    result[0] = this.current_value[0] - step >= this.current_value[0]
                        ? this.current_value[0] - step
                        : this.current_value[0];
                    result[1] = this.current_value[0] + step <= range[1]
                        ? this.current_value[0] + step
                        : range[1];
                    return result;
                }
            }
            else {
                return result;
            }
        }
    };
    return Model;
}());
exports.Model = Model;


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
                    item.dataset['position'] = String(current_position[index]);
                    item.dataset['thumbler'] = index === 0
                        ? 'min'
                        : 'max';
                });
            }
            else if (!Array.isArray(this.element) && !Array.isArray(current_position)) {
                var style = orientation === 'horizontal'
                    ? 'transform: translateX(' + (current_position * 1000) + '%)'
                    : 'transform: translateY(' + (current_position * 1000) + '%)';
                this.element.setAttribute('style', style);
                this.element.dataset['position'] = String(current_position);
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
        this.slider.thumbler.move_thumbler(this.container);
    };
    return View;
}());
exports.View = View;


/***/ })

/******/ })["default"];
});