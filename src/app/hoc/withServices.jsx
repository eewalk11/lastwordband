import React from 'react';
import * as services from 'app/domain/service';

/**
 * Higher order component to inject services as properties.
 */
export default function withServices(WrappedComponent) {
  return props => <WrappedComponent {...services} {...props} />;
}
