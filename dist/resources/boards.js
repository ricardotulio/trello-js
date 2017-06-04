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
  return _request2.default.get(_routes2.default.boards.base, (0, _ramda.merge)(credentials, data));
});

var lists = (0, _ramda.curry)(function (credentials) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _request2.default.get(_routes2.default.boards.lists(data.id), (0, _ramda.merge)(credentials, data));
});

var cards = (0, _ramda.curry)(function (credentials) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _request2.default.get(_routes2.default.boards.cards(data.id), (0, _ramda.merge)(credentials, data));
});

exports.default = {
  all: all,
  lists: lists,
  cards: cards
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9yZXNvdXJjZXMvYm9hcmRzLmpzIl0sIm5hbWVzIjpbImFsbCIsImNyZWRlbnRpYWxzIiwiZGF0YSIsImdldCIsImJvYXJkcyIsImJhc2UiLCJsaXN0cyIsImlkIiwiY2FyZHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUtBLElBQU1BLE1BQU0sa0JBQU0sVUFBQ0MsV0FBRDtBQUFBLE1BQWNDLElBQWQsdUVBQXFCLEVBQXJCO0FBQUEsU0FDaEIsa0JBQVFDLEdBQVIsQ0FBWSxpQkFBT0MsTUFBUCxDQUFjQyxJQUExQixFQUFnQyxrQkFBTUosV0FBTixFQUFtQkMsSUFBbkIsQ0FBaEMsQ0FEZ0I7QUFBQSxDQUFOLENBQVo7O0FBSUEsSUFBTUksUUFBUSxrQkFBTSxVQUFDTCxXQUFEO0FBQUEsTUFBY0MsSUFBZCx1RUFBcUIsRUFBckI7QUFBQSxTQUNsQixrQkFBUUMsR0FBUixDQUFZLGlCQUFPQyxNQUFQLENBQWNFLEtBQWQsQ0FBb0JKLEtBQUtLLEVBQXpCLENBQVosRUFBMEMsa0JBQU1OLFdBQU4sRUFBbUJDLElBQW5CLENBQTFDLENBRGtCO0FBQUEsQ0FBTixDQUFkOztBQUlBLElBQU1NLFFBQVEsa0JBQU0sVUFBQ1AsV0FBRDtBQUFBLE1BQWNDLElBQWQsdUVBQXFCLEVBQXJCO0FBQUEsU0FDbEIsa0JBQVFDLEdBQVIsQ0FBWSxpQkFBT0MsTUFBUCxDQUFjSSxLQUFkLENBQW9CTixLQUFLSyxFQUF6QixDQUFaLEVBQTBDLGtCQUFNTixXQUFOLEVBQW1CQyxJQUFuQixDQUExQyxDQURrQjtBQUFBLENBQU4sQ0FBZDs7a0JBSWU7QUFDYkYsVUFEYTtBQUViTSxjQUZhO0FBR2JFO0FBSGEsQyIsImZpbGUiOiJib2FyZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVxdWVzdCBmcm9tICcuLi9yZXF1ZXN0J1xuaW1wb3J0IHJvdXRlcyBmcm9tICcuLi9yb3V0ZXMnXG5pbXBvcnQgeyBcbiAgY3VycnksIFxuICBtZXJnZSwgXG59IGZyb20gJ3JhbWRhJ1xuXG5jb25zdCBhbGwgPSBjdXJyeSgoY3JlZGVudGlhbHMsIGRhdGEgPSB7fSkgPT4gXG4gIHJlcXVlc3QuZ2V0KHJvdXRlcy5ib2FyZHMuYmFzZSwgbWVyZ2UoY3JlZGVudGlhbHMsIGRhdGEpKVxuKVxuXG5jb25zdCBsaXN0cyA9IGN1cnJ5KChjcmVkZW50aWFscywgZGF0YSA9IHt9KSA9PiBcbiAgcmVxdWVzdC5nZXQocm91dGVzLmJvYXJkcy5saXN0cyhkYXRhLmlkKSwgbWVyZ2UoY3JlZGVudGlhbHMsIGRhdGEpKVxuKVxuXG5jb25zdCBjYXJkcyA9IGN1cnJ5KChjcmVkZW50aWFscywgZGF0YSA9IHt9KSA9PlxuICByZXF1ZXN0LmdldChyb3V0ZXMuYm9hcmRzLmNhcmRzKGRhdGEuaWQpLCBtZXJnZShjcmVkZW50aWFscywgZGF0YSkpXG4pXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWxsLFxuICBsaXN0cyxcbiAgY2FyZHMsXG59XG4iXX0=