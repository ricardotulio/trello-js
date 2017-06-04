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

var find = (0, _ramda.curry)(function (credentials) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _request2.default.get(_routes2.default.cards.find(data.id), (0, _ramda.merge)(credentials, data));
});

var actions = (0, _ramda.curry)(function (credentials) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _request2.default.get(_routes2.default.cards.actions(data.id), (0, _ramda.merge)(credentials, data));
});

exports.default = {
  find: find,
  actions: actions
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9yZXNvdXJjZXMvY2FyZHMuanMiXSwibmFtZXMiOlsiZmluZCIsImNyZWRlbnRpYWxzIiwiZGF0YSIsImdldCIsImNhcmRzIiwiaWQiLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFLQSxJQUFNQSxPQUFPLGtCQUFNLFVBQUNDLFdBQUQ7QUFBQSxNQUFjQyxJQUFkLHVFQUFxQixFQUFyQjtBQUFBLFNBQ2pCLGtCQUFRQyxHQUFSLENBQVksaUJBQU9DLEtBQVAsQ0FBYUosSUFBYixDQUFrQkUsS0FBS0csRUFBdkIsQ0FBWixFQUF3QyxrQkFBTUosV0FBTixFQUFtQkMsSUFBbkIsQ0FBeEMsQ0FEaUI7QUFBQSxDQUFOLENBQWI7O0FBSUEsSUFBTUksVUFBVSxrQkFBTSxVQUFDTCxXQUFEO0FBQUEsTUFBY0MsSUFBZCx1RUFBcUIsRUFBckI7QUFBQSxTQUNwQixrQkFBUUMsR0FBUixDQUFZLGlCQUFPQyxLQUFQLENBQWFFLE9BQWIsQ0FBcUJKLEtBQUtHLEVBQTFCLENBQVosRUFBMkMsa0JBQU1KLFdBQU4sRUFBbUJDLElBQW5CLENBQTNDLENBRG9CO0FBQUEsQ0FBTixDQUFoQjs7a0JBSWU7QUFDYkYsWUFEYTtBQUViTTtBQUZhLEMiLCJmaWxlIjoiY2FyZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVxdWVzdCBmcm9tICcuLi9yZXF1ZXN0J1xuaW1wb3J0IHJvdXRlcyBmcm9tICcuLi9yb3V0ZXMnXG5pbXBvcnQgeyBcbiAgY3VycnksIFxuICBtZXJnZSwgXG59IGZyb20gJ3JhbWRhJ1xuXG5jb25zdCBmaW5kID0gY3VycnkoKGNyZWRlbnRpYWxzLCBkYXRhID0ge30pID0+XG4gIHJlcXVlc3QuZ2V0KHJvdXRlcy5jYXJkcy5maW5kKGRhdGEuaWQpLCBtZXJnZShjcmVkZW50aWFscywgZGF0YSkpXG4pXG5cbmNvbnN0IGFjdGlvbnMgPSBjdXJyeSgoY3JlZGVudGlhbHMsIGRhdGEgPSB7fSkgPT5cbiAgcmVxdWVzdC5nZXQocm91dGVzLmNhcmRzLmFjdGlvbnMoZGF0YS5pZCksIG1lcmdlKGNyZWRlbnRpYWxzLCBkYXRhKSlcbilcblxuZXhwb3J0IGRlZmF1bHQge1xuICBmaW5kLFxuICBhY3Rpb25zLFxufVxuIl19