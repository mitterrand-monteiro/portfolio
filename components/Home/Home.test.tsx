import { render, screen } from '@testing-library/react';
import { Home } from './Home';

describe('Home component', () => {
  it('has correct heading name', () => {
    render(<Home scrollAbout={Function} />);
    screen.getByRole('heading', { name: /Mitterrand/i });
  });
});
