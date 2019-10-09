import TrackService from './TrackService';
import LyricsNotFoundError from './LyricsNotFoundError';
import { Album, Track } from '../../model';
import { TOWARDS_OBLITERATION } from 'app/const';

const setup = () => {
  return new TrackService();
};

describe('TrackService unit tests', () => {
  describe('getLyrics()', () => {
    let subject;
    let album;

    beforeEach(() => {
      subject = setup();
      album = new Album({ title: TOWARDS_OBLITERATION });
    });

    it('Returns lyrics for a valid track', () => {
      const subject = setup();
      const track = new Track({ title: 'Waking Dream' });
      const result = subject.getLyrics({ album, track });
      expect(result).toBeDefined();
    });

    it('Throws a LyricsNotFoundError if there are no lyrics configured for the track', () => {
      const subject = setup();
      const track = new Track({ title: 'invalid' });
      const test = () => subject.getLyrics({ album, track });
      expect(test).toThrow(LyricsNotFoundError);
    });
  });
});
