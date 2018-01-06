'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var API_URL = exports.API_URL = 'https://api.spotify.com/v1';
var toJSON = exports.toJSON = function toJSON(data) {
  return data.json();
};