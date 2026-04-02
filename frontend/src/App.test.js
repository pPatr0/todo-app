import { render, screen } from '@testing-library/react';
import App from './App';

test('renders To-Do App heading', () => {
  render(<App />);
  const heading = screen.getByText(/to-do app/i);
  expect(heading).toBeInTheDocument();
});