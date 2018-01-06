import { API_URL, toJSON } from './config';

export const search = (query, type) =>
  fetch(`${API_URL}/search?q=${query}&type=${type}`)
    .then(toJSON);

export const searchArtists = query => search(query, 'artist');

export const searchAlbums = () => {};
export const searchTracks = () => {};
export const searchPlaylists = () => {};
