import search from './main';
import { API_URL, toJSON } from './config';

export default class SpotifyApiCourse {
  constructor(options) {
    this.apiURL = options.apiURL || API_URL;
    this.token = options.token;
    this.search = search.bind(this)();
  }

  request(url) {
    const headers = {
      headers: { Authorization: `Bearer ${this.token}` },
    };
    return fetch(url, headers).then(toJSON);
  }
}
