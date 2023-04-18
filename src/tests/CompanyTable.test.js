import { render, screen } from '@testing-library/react';
import CompanyTable from '../components/Content/CompanyTable/CompanyTable';

import details from '../mocks/Details';

test('renders table', () => {
  render(<CompanyTable details={details}/>);
  const linkElement = screen.getByText(/time/i);
  expect(linkElement).toBeInTheDocument();
});
