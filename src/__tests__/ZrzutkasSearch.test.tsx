import { render, screen } from '@testing-library/react';
import ZrzutkasSearch from '../components/zrzutkasSearch/ZrzutkasSearch';

describe('ZrzutkasSearch', () => {
  it('renders without crashing', () => {
    render(<ZrzutkasSearch />);
  });

  it('checks if initial message is present', async () => {
    render(<ZrzutkasSearch />);
    const searchInput = screen.getByText('Use the force Luke! Input i meant');

    expect(searchInput).toBeInTheDocument();

    //to further extend
  });
});
