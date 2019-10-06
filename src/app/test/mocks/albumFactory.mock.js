import chance from '../chance';
import { Album } from 'app/domain';

export const mockAlbumFactory = (albumProps = {}) => ({
  newAlbum: () => new Album({
    title: chance.string(),
    ...albumProps
  })
});
