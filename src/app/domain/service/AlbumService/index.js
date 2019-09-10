import AlbumService from './AlbumService';
import HallsOfMadnessFactory from './HallsOfMadnessFactory';
import IdFactory from './IdFactory';
import TowardsObliterationFactory from './TowardsObliterationFactory';
import TrackFactory from './TrackFactory';

const idFactory = new IdFactory();
const trackFactory = new TrackFactory({ idFactory });

const albumFactories = [
  new TowardsObliterationFactory({ idFactory, trackFactory }),
  new HallsOfMadnessFactory({ idFactory, trackFactory })
];

export const albumService = new AlbumService({ albumFactories });
