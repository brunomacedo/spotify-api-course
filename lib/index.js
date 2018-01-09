'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _main = require('./main');

var _main2 = _interopRequireDefault(_main);

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpotifyApiCourse = function () {
  function SpotifyApiCourse(options) {
    _classCallCheck(this, SpotifyApiCourse);

    this.apiURL = options.apiURL || _config.API_URL;
    this.token = options.token;
    this.search = _main2.default.bind(this)();
  }

  _createClass(SpotifyApiCourse, [{
    key: 'request',
    value: function request(url) {
      var headers = {
        headers: { Authorization: 'Bearer ' + this.token }
      };
      return fetch(url, headers).then(_config.toJSON);
    }
  }]);

  return SpotifyApiCourse;
}();

exports.default = SpotifyApiCourse;