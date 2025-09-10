import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('renders heading and description', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: /tradeLine 24\/7/i })).toBeInTheDocument();
    expect(screen.getByText(/Deployment check page/i)).toBeInTheDocument();
  });
});
