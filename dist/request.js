'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _ramda = require('ramda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buildOptions = function buildOptions(path, method, data) {
  return {
    method: method,
    uri: 'https://api.trello.com/' + path,
    qs: data,
    json: true
  };
};

var request = (0, _ramda.curry)(function (method, path) {
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return (0, _requestPromise2.default)(buildOptions(path, method, data));
});

exports.default = {
  get: request('GET')
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9yZXF1ZXN0LmpzIl0sIm5hbWVzIjpbImJ1aWxkT3B0aW9ucyIsInBhdGgiLCJtZXRob2QiLCJkYXRhIiwidXJpIiwicXMiLCJqc29uIiwicmVxdWVzdCIsImdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUlBLElBQU1BLGVBQWUsU0FBZkEsWUFBZSxDQUFDQyxJQUFELEVBQU9DLE1BQVAsRUFBZUMsSUFBZixFQUF3QjtBQUMzQyxTQUFPO0FBQ0xELGtCQURLO0FBRUxFLHFDQUErQkgsSUFGMUI7QUFHTEksUUFBSUYsSUFIQztBQUlMRyxVQUFNO0FBSkQsR0FBUDtBQU1ELENBUEQ7O0FBU0EsSUFBTUMsVUFBVSxrQkFBTSxVQUFDTCxNQUFELEVBQVNELElBQVQ7QUFBQSxNQUFlRSxJQUFmLHVFQUFzQixFQUF0QjtBQUFBLFNBQ3BCLDhCQUFlSCxhQUFhQyxJQUFiLEVBQW1CQyxNQUFuQixFQUEyQkMsSUFBM0IsQ0FBZixDQURvQjtBQUFBLENBQU4sQ0FBaEI7O2tCQUllO0FBQ2JLLE9BQUtELFFBQVEsS0FBUjtBQURRLEMiLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXF1ZXN0UHJvbWlzZSBmcm9tICdyZXF1ZXN0LXByb21pc2UnXG5pbXBvcnQgeyBcbiAgY3VycnksIFxufSBmcm9tICdyYW1kYSdcblxuY29uc3QgYnVpbGRPcHRpb25zID0gKHBhdGgsIG1ldGhvZCwgZGF0YSkgPT4ge1xuICByZXR1cm4ge1xuICAgIG1ldGhvZCxcbiAgICB1cmk6IGBodHRwczovL2FwaS50cmVsbG8uY29tLyR7cGF0aH1gLFxuICAgIHFzOiBkYXRhLFxuICAgIGpzb246IHRydWVcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0ID0gY3VycnkoKG1ldGhvZCwgcGF0aCwgZGF0YSA9IHt9KSA9PiBcbiAgcmVxdWVzdFByb21pc2UoYnVpbGRPcHRpb25zKHBhdGgsIG1ldGhvZCwgZGF0YSkpXG4pXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0OiByZXF1ZXN0KCdHRVQnKVxufVxuIl19