import { render, screen } from '@testing-library/react';
import Content from '../components/Content/Content';


test('renders content', () => {
  render(<Content />);
  const linkElement = screen.getByTestId("content");
  expect(linkElement).toBeInTheDocument();
});