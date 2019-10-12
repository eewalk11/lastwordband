import { chance } from 'app/util';
import { Album } from 'app/domain/index';

export const mockAlbumFactory = (albumProps = {}) => ({
  newAlbum: () =>
    new Album({
      title: chance.string(),
      ...albumProps
    })
});
