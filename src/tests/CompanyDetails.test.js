import { render, screen } from '@testing-library/react';
import CompanyDetails from '../components/Content/CompanyDetails/CompanyDetails';

import {companyList} from '../mocks/Details';

test('table', () => {
    render(<CompanyDetails code={companyList[0].code} name={companyList[1].name}/>);
    const linkElement = screen.getByText(/1/i);
    expect(linkElement).toBeInTheDocument();
  });
