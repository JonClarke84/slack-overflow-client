import { render, screen } from '@testing-library/react';
import App from './components/App';

test('renders slack-overflow Login page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});