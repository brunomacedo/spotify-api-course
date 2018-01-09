'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = search;

var _config = require('./config');

function search() {
  var _this = this;

  return {
    searchUrl: function searchUrl(query, type) {
      return _this.request(_config.API_URL + '/search?q=' + query + '&type=' + type);
    },
    searchArtists: function searchArtists(query) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'artist';

      return this.searchUrl(query, type);
    },

    searchAlbums: '',
    searchTracks: '',
    searchPlaylists: ''
  };
}