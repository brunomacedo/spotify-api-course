import { API_URL } from './config';

export default function search() {
  return {
    searchUrl: (query, type) => this.request(`${API_URL}/search?q=${query}&type=${type}`),
    searchArtists(query, type = 'artist') {
      return this.searchUrl(query, type);
    },
    searchAlbums: '',
    searchTracks: '',
    searchPlaylists: '',
  };
}
