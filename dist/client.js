'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _resources = require('./resources');

var _resources2 = _interopRequireDefault(_resources);

var _ramda = require('ramda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isFunction = function isFunction(x) {
  return (0, _ramda.equals)((0, _ramda.type)(x), 'Function');
};

var bindCredentials = function bindCredentials(credentials) {
  var bind = function bind(func) {
    return func.bind(null, credentials);
  };

  var bindRecursive = (0, _ramda.ifElse)(isFunction, bind, function (resource) {
    return (0, _ramda.map)(bindRecursive, resource);
  });

  var boundClient = (0, _ramda.map)(bindRecursive, _resources2.default);
  return (0, _ramda.merge)(boundClient, { credentials: credentials });
};

var connect = function connect(credentials) {
  return new Promise(function (resolve, reject) {
    var client = bindCredentials(credentials);
    resolve(client);
  });
};

var client = (0, _ramda.merge)({ connect: connect }, _resources2.default);

exports.default = client;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9jbGllbnQuanMiXSwibmFtZXMiOlsiaXNGdW5jdGlvbiIsIngiLCJiaW5kQ3JlZGVudGlhbHMiLCJiaW5kIiwiZnVuYyIsImNyZWRlbnRpYWxzIiwiYmluZFJlY3Vyc2l2ZSIsInJlc291cmNlIiwiYm91bmRDbGllbnQiLCJjb25uZWN0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjbGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFRQSxJQUFNQSxhQUFhLFNBQWJBLFVBQWE7QUFBQSxTQUFLLG1CQUFPLGlCQUFLQyxDQUFMLENBQVAsRUFBZ0IsVUFBaEIsQ0FBTDtBQUFBLENBQW5COztBQUVBLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsY0FBZTtBQUNyQyxNQUFNQyxPQUFPLFNBQVBBLElBQU87QUFBQSxXQUFRQyxLQUFLRCxJQUFMLENBQVUsSUFBVixFQUFnQkUsV0FBaEIsQ0FBUjtBQUFBLEdBQWI7O0FBRUEsTUFBTUMsZ0JBQWdCLG1CQUNwQk4sVUFEb0IsRUFFcEJHLElBRm9CLEVBR3BCO0FBQUEsV0FBWSxnQkFBSUcsYUFBSixFQUFtQkMsUUFBbkIsQ0FBWjtBQUFBLEdBSG9CLENBQXRCOztBQU1BLE1BQU1DLGNBQWMsZ0JBQUlGLGFBQUosc0JBQXBCO0FBQ0EsU0FBTyxrQkFBTUUsV0FBTixFQUFtQixFQUFFSCx3QkFBRixFQUFuQixDQUFQO0FBQ0QsQ0FYRDs7QUFhQSxJQUFNSSxVQUFVLFNBQVZBLE9BQVUsY0FBZTtBQUM3QixTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsUUFBTUMsU0FBU1gsZ0JBQWdCRyxXQUFoQixDQUFmO0FBQ0FNLFlBQVFFLE1BQVI7QUFDRCxHQUhNLENBQVA7QUFJRCxDQUxEOztBQU9BLElBQU1BLFNBQVMsa0JBQU0sRUFBRUosZ0JBQUYsRUFBTixzQkFBZjs7a0JBRWVJLE0iLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlc291cmNlcyBmcm9tICcuL3Jlc291cmNlcydcbmltcG9ydCB7IFxuICBlcXVhbHMsIFxuICBtYXAsIFxuICBpZkVsc2UsIFxuICBtZXJnZSxcbiAgdHlwZVxufSBmcm9tICdyYW1kYSdcblxuY29uc3QgaXNGdW5jdGlvbiA9IHggPT4gZXF1YWxzKHR5cGUoeCksICdGdW5jdGlvbicpXG5cbmNvbnN0IGJpbmRDcmVkZW50aWFscyA9IGNyZWRlbnRpYWxzID0+IHtcbiAgY29uc3QgYmluZCA9IGZ1bmMgPT4gZnVuYy5iaW5kKG51bGwsIGNyZWRlbnRpYWxzKVxuXG4gIGNvbnN0IGJpbmRSZWN1cnNpdmUgPSBpZkVsc2UoXG4gICAgaXNGdW5jdGlvbixcbiAgICBiaW5kLFxuICAgIHJlc291cmNlID0+IG1hcChiaW5kUmVjdXJzaXZlLCByZXNvdXJjZSlcbiAgKVxuXG4gIGNvbnN0IGJvdW5kQ2xpZW50ID0gbWFwKGJpbmRSZWN1cnNpdmUsIHJlc291cmNlcylcbiAgcmV0dXJuIG1lcmdlKGJvdW5kQ2xpZW50LCB7IGNyZWRlbnRpYWxzIH0pXG59XG5cbmNvbnN0IGNvbm5lY3QgPSBjcmVkZW50aWFscyA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgY2xpZW50ID0gYmluZENyZWRlbnRpYWxzKGNyZWRlbnRpYWxzKVxuICAgIHJlc29sdmUoY2xpZW50KVxuICB9KVxufVxuXG5jb25zdCBjbGllbnQgPSBtZXJnZSh7IGNvbm5lY3QgfSwgcmVzb3VyY2VzKVxuXG5leHBvcnQgZGVmYXVsdCBjbGllbnRcbiJdfQ==