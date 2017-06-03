'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _request = require('../request');

var _request2 = _interopRequireDefault(_request);

var _routes = require('../routes');

var _routes2 = _interopRequireDefault(_routes);

var _ramda = require('ramda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var all = (0, _ramda.curry)(function (credentials) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _request2.default.get(_routes2.default.cards.base, (0, _ramda.merge)(credentials, data));
});

exports.default = {
  all: all
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9yZXNvdXJjZXMvY2FyZHMuanMiXSwibmFtZXMiOlsiYWxsIiwiY3JlZGVudGlhbHMiLCJkYXRhIiwiZ2V0IiwiY2FyZHMiLCJiYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFLQSxJQUFNQSxNQUFNLGtCQUFNLFVBQUNDLFdBQUQ7QUFBQSxNQUFjQyxJQUFkLHVFQUFxQixFQUFyQjtBQUFBLFNBQ2hCLGtCQUFRQyxHQUFSLENBQVksaUJBQU9DLEtBQVAsQ0FBYUMsSUFBekIsRUFBK0Isa0JBQU1KLFdBQU4sRUFBbUJDLElBQW5CLENBQS9CLENBRGdCO0FBQUEsQ0FBTixDQUFaOztrQkFJZTtBQUNiRjtBQURhLEMiLCJmaWxlIjoiY2FyZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVxdWVzdCBmcm9tICcuLi9yZXF1ZXN0J1xuaW1wb3J0IHJvdXRlcyBmcm9tICcuLi9yb3V0ZXMnXG5pbXBvcnQgeyBcbiAgY3VycnksIFxuICBtZXJnZSwgXG59IGZyb20gJ3JhbWRhJ1xuXG5jb25zdCBhbGwgPSBjdXJyeSgoY3JlZGVudGlhbHMsIGRhdGEgPSB7fSkgPT4gXG4gIHJlcXVlc3QuZ2V0KHJvdXRlcy5jYXJkcy5iYXNlLCBtZXJnZShjcmVkZW50aWFscywgZGF0YSkpXG4pXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWxsXG59XG4iXX0=