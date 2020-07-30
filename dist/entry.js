"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("react-clock/dist/Clock.css");

var _TimePicker = _interopRequireDefault(require("./TimePicker"));

require("./TimePicker.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// File is created during build phase and placed in dist directory
// eslint-disable-next-line import/no-unresolved
var _default = _TimePicker["default"];
exports["default"] = _default;