'use strict';

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = {
  uri: 'http://www.google.com'
};

(0, _requestPromise2.default)(options).then(function (response) {
  return console.log(response);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9hcHAuanMiXSwibmFtZXMiOlsib3B0aW9ucyIsInVyaSIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7OztBQUVBLElBQU1BLFVBQVU7QUFDZEMsT0FBSztBQURTLENBQWhCOztBQUlBLDhCQUFRRCxPQUFSLEVBQ0dFLElBREgsQ0FDUTtBQUFBLFNBQVlDLFFBQVFDLEdBQVIsQ0FBWUMsUUFBWixDQUFaO0FBQUEsQ0FEUiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVxdWVzdCBmcm9tICdyZXF1ZXN0LXByb21pc2UnXG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIHVyaTogJ2h0dHA6Ly93d3cuZ29vZ2xlLmNvbSdcbn1cblxucmVxdWVzdChvcHRpb25zKVxuICAudGhlbihyZXNwb25zZSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSkpXG4iXX0=