import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ciyp link', () => {
  render(<App />);
  const linkElement = screen.getByText(/chocolate in your pocket/i);
  expect(linkElement).toBeInTheDocument();
});
