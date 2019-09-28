import AlbumService from './AlbumService';
import HallsOfMadnessFactory from './HallsOfMadnessFactory';
import IdFactory from './IdFactory';
import TowardsObliterationFactory from './TowardsObliterationFactory';
import TrackFactory from './TrackFactory';
import { trackService } from '../TrackService';

const idFactory = new IdFactory();
const trackFactory = new TrackFactory({
  idFactory,
  trackService
});

const albumFactories = [
  new TowardsObliterationFactory({ idFactory, trackFactory }),
  new HallsOfMadnessFactory({ idFactory, trackFactory })
];

export const albumService = new AlbumService({ albumFactories });
