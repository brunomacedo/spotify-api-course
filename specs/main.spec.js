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
import { search, searchArtists, searchAlbums, searchTracks, searchPlaylists } from '../source/main';
import { API_URL } from '../source/config';

describe('Spotify API Course', () => {
  /**
   * Verify with the function exists
   */
  describe('Smoke tests', () => {
    it('Should exists the search method', () => {
      expect(search).to.exist;
    });

    it('Should exists the searchArtists method', () => {
      expect(searchArtists).to.exist;
    });

    it('Should exists the searchAlbums method', () => {
      expect(searchAlbums).to.exist;
    });

    it('Should exists the searchTracks method', () => {
      expect(searchTracks).to.exist;
    });

    it('Should exists the searchPlaylists method', () => {
      expect(searchPlaylists).to.exist;
    });
  });

  describe('Searchs', () => {
    let fetchedStub;
    let promise;

    beforeEach(() => {
      fetchedStub = sinon.stub(global, 'fetch');
      promise = fetchedStub.returnsPromise();
    });

    afterEach(() => {
      fetchedStub.restore();
    });

    describe('Generic search', () => {
      /**
       * Verify with the promise fetch has been called
       */
      context('Call fetch promise', () => {
        it('Should call fetch function', () => {
          const artists = search();
          expect(fetchedStub).to.have.been.calledOnce;
        });

        it('Should return the json data from the promise', () => {
          promise.resolves({
            body: 'json'
          });

          const artists = search('Incubus', 'artist');

          expect(artists.resolveValue).to.be.eql({
            body: 'json'
          });
        });
      });

      /**
       * Resolve promises from json-url
       */
      context('Should receive the correct URL', () => {
        it('Passing one type', () => {
          const artists = search('Incubus', 'artist');
          expect(fetchedStub).to.have.been
            .calledWith(`${API_URL}/search?q=Incubus&type=artist`);

          const albums = search('Incubus', 'album');
          expect(fetchedStub).to.have.been
            .calledWith(`${API_URL}/search?q=Incubus&type=album`);
        });

        it('Passing more than one type', () => {
          const artists = search('Incubus', ['artist', 'album']);
          expect(fetchedStub).to.have.been
            .calledWith(`${API_URL}/search?q=Incubus&type=artist,album`);
        });
      });
    });

    describe('searchArtists', () => {
      context('Should receive the correct URL', () => {
        it('Passing more than one type', () => {
          const artists = searchArtists('Incubus');
          expect(fetchedStub).to.have.been
            .calledWith(`${API_URL}/search?q=Incubus&type=artist`);
        });
      });
    });

  });
});
