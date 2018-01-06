'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchAlbums = exports.searchArtists = exports.search = undefined;

var _config = require('./config');

var search = exports.search = function search(query, type) {
  return fetch(_config.API_URL + '/search?q=' + query + '&type=' + type).then(_config.toJSON);
};

var searchArtists = exports.searchArtists = function searchArtists(query) {
  return search(query, 'artist');
};

var searchAlbums = exports.searchAlbums = function searchAlbums() {};
var searchTracks = exports.searchTracks = function searchTracks() {};
var searchPlaylists = exports.searchPlaylists = function searchPlaylists() {};