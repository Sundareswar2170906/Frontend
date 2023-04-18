import { render, screen } from '@testing-library/react';
import MyTable from '../utils/MyTable';

import details from '../mocks/Details';

test('table', () => {
    render(<MyTable headers={["Price", "Date", "Time"]} details={details}/>);
    const linkElement = screen.getByText(/Price/i);
    expect(linkElement).toBeInTheDocument();
  });
