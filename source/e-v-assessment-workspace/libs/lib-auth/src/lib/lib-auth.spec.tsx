import { render } from '@testing-library/react';

import LibAuth from './lib-auth';

describe('LibAuth', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibAuth />);
    expect(baseElement).toBeTruthy();
  });
});
