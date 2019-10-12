import LastWordError from './LastWordError';

/**
 * Base class for errors that should never occur and should cause the
 * application to terminate.
 */
export default class FatalError extends LastWordError {}
