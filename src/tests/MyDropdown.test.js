import { fireEvent, render, screen, act } from '@testing-library/react';
import MyDropdown from '../utils/MyDropdown';

import {companyList} from '../mocks/Details';

test('dropdown1', () => {
    render(<MyDropdown list={companyList} title="Company List" />);
    const linkElement = screen.getByText(/Company List/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('dropdown2', () => {
    render(<MyDropdown list={companyList} title="Company List" />);
    const dropElement = screen.getByText("Company List");
    expect(dropElement).toBeInTheDocument();

    act(() => {
        fireEvent.click(dropElement)
    });

    const dropdownElement = screen.getByText(/Company1/i);
    expect(dropdownElement).toBeInTheDocument();
  });
