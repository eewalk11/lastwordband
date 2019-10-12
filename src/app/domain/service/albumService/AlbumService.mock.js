export const mockAlbumService = overrides => ({
  albums: [],
  findByTitle: jest.fn(),
  getSalesLinks: jest.fn(),
  sortByDate: jest.fn(),
  ...overrides
});
