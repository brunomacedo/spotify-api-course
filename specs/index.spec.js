import { expect } from "chai";
import { API_URL } from "../source/config";
import SpotifyApiCourse from "../source/index";

describe('Index: Spotify Api Course', () => {
  it('Should create an instace of SpotifyApiCourse', () => {
    const spotify = new SpotifyApiCourse({});
    expect(spotify).to.be.an.instanceOf(SpotifyApiCourse);
  });

  it('Should receive apiURL as an option', () => {
    const spotify = new SpotifyApiCourse({
      apiURL: 'url'
    });
    expect(spotify.apiURL).to.be.equal('url');
  });

  it('Should use default apiURL if it does not defined', () => {
    const spotify = new SpotifyApiCourse({});
    expect(spotify.apiURL).to.be.equal(API_URL);
  });

  it('Should receive token as an option', () => {
    const spotify = new SpotifyApiCourse({
      token: 'salt'
    });
    expect(spotify.token).to.be.equal('salt');
  });

  it('Should have request method', () => {
    const spotify = new SpotifyApiCourse({});
    expect(spotify.request).to.exist;
  });
});
