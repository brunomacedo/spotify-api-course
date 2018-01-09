import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from "sinon-chai";
import sinonStubPromise from "sinon-stub-promise";

/**
 * @node-fetch
 * Use node get json
 */
chai.use(sinonChai);
sinonStubPromise(sinon);
global.fetch = require('node-fetch');

/**
 * Import my functions
 */
import SpotifyApiCourse from "../source/index";
import { API_URL } from '../source/config';

describe('Main: Spotify Api Course', () => {
  let spotify;
  let fetchedStub;
  let promise;

  beforeEach(() => {
    spotify = new SpotifyApiCourse({
      token: 'foo'
    });
    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.returnsPromise();
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  /**
   * Verify with the function exists
   */
  describe('Smoke tests', () => {
    it('Should exists the search method', () => {
      expect(spotify.search).to.exist;
    });

    it('Should exists the searchArtists method', () => {
      expect(spotify.search.searchArtists).to.exist;
    });

    it('Should exists the searchAlbums method', () => {
      expect(spotify.search.searchAlbums).to.exist;
    });

    it('Should exists the searchTracks method', () => {
      expect(spotify.search.searchTracks).to.exist;
    });

    it('Should exists the searchPlaylists method', () => {
      expect(spotify.search.searchPlaylists).to.exist;
    });
  });

  describe('Search Spotify', () => {
    describe('Search Default', () => {
      /**
       * Verify with the promise fetch has been called
       */
      it('Should call fetch function', () => {
        const artists = spotify.search.searchArtists();
        expect(fetchedStub).to.have.been.calledOnce;
      });

      it('Should return the json data from the promise', () => {
        promise.resolves({
          body: 'json'
        });

        const artists = spotify.search.searchArtists('Incubus', 'artist');

        expect(artists.resolveValue).to.be.eql({
          body: 'json'
        });
      });

      /**
       * Resolve promises from json-url
       */
      it('Should receive the correct URL one type', () => {
        const artists = spotify.search.searchArtists('Incubus', 'artist');
        expect(fetchedStub).to.have.been
          .calledWith(`${API_URL}/search?q=Incubus&type=artist`);

        const albums = spotify.search.searchArtists('Incubus', 'album');
        expect(fetchedStub).to.have.been
          .calledWith(`${API_URL}/search?q=Incubus&type=album`);
      });

      it('Should receive the correct URL more than one type', () => {
        const artists = spotify.search.searchArtists('Incubus', ['artist', 'album']);
        expect(fetchedStub).to.have.been
          .calledWith(`${API_URL}/search?q=Incubus&type=artist,album`);
      });
    });

    describe('Search Artists', () => {
      it('Should receive the correct URL', () => {
        const artists = spotify.search.searchArtists('Incubus');
        expect(fetchedStub).to.have.been
          .calledWith(`${API_URL}/search?q=Incubus&type=artist`);
      });
    });

  });
});
