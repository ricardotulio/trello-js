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

exports.default = {
  all: all,
  lists: lists
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9yZXNvdXJjZXMvYm9hcmRzLmpzIl0sIm5hbWVzIjpbImFsbCIsImNyZWRlbnRpYWxzIiwiZGF0YSIsImdldCIsImJvYXJkcyIsImJhc2UiLCJsaXN0cyIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFLQSxJQUFNQSxNQUFNLGtCQUFNLFVBQUNDLFdBQUQ7QUFBQSxNQUFjQyxJQUFkLHVFQUFxQixFQUFyQjtBQUFBLFNBQ2hCLGtCQUFRQyxHQUFSLENBQVksaUJBQU9DLE1BQVAsQ0FBY0MsSUFBMUIsRUFBZ0Msa0JBQU1KLFdBQU4sRUFBbUJDLElBQW5CLENBQWhDLENBRGdCO0FBQUEsQ0FBTixDQUFaOztBQUlBLElBQU1JLFFBQVEsa0JBQU0sVUFBQ0wsV0FBRDtBQUFBLE1BQWNDLElBQWQsdUVBQXFCLEVBQXJCO0FBQUEsU0FDbEIsa0JBQVFDLEdBQVIsQ0FBWSxpQkFBT0MsTUFBUCxDQUFjRSxLQUFkLENBQW9CSixLQUFLSyxFQUF6QixDQUFaLEVBQTBDLGtCQUFNTixXQUFOLEVBQW1CQyxJQUFuQixDQUExQyxDQURrQjtBQUFBLENBQU4sQ0FBZDs7a0JBSWU7QUFDYkYsVUFEYTtBQUViTTtBQUZhLEMiLCJmaWxlIjoiYm9hcmRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vcmVxdWVzdCdcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi4vcm91dGVzJ1xuaW1wb3J0IHsgXG4gIGN1cnJ5LCBcbiAgbWVyZ2UsIFxufSBmcm9tICdyYW1kYSdcblxuY29uc3QgYWxsID0gY3VycnkoKGNyZWRlbnRpYWxzLCBkYXRhID0ge30pID0+IFxuICByZXF1ZXN0LmdldChyb3V0ZXMuYm9hcmRzLmJhc2UsIG1lcmdlKGNyZWRlbnRpYWxzLCBkYXRhKSlcbilcblxuY29uc3QgbGlzdHMgPSBjdXJyeSgoY3JlZGVudGlhbHMsIGRhdGEgPSB7fSkgPT4gXG4gIHJlcXVlc3QuZ2V0KHJvdXRlcy5ib2FyZHMubGlzdHMoZGF0YS5pZCksIG1lcmdlKGNyZWRlbnRpYWxzLCBkYXRhKSlcbilcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhbGwsXG4gIGxpc3RzLFxufVxuIl19