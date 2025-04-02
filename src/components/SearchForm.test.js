import { render, screen, fireEvent } from '@testing-library/react';
import SearchForm from './SearchForm';

describe('SearchForm Component', () => {
  it('debe renderizar el select y el input', () => {
    render(<SearchForm handleGender={() => {}} handleCountry={() => {}} country="" />);

    const select = screen.getByRole('combobox');
    const input = screen.getByPlaceholderText(/Select country code/i);

    expect(select).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it('debe llamar a handleGender cuando cambia el select', () => {
    const handleGenderMock = jest.fn();
    render(<SearchForm handleGender={handleGenderMock} handleCountry={() => {}} country="" />);

    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'male' } });

    expect(handleGenderMock).toHaveBeenCalled();
  });

  it('debe llamar a handleCountry cuando cambia el input', () => {
    const handleCountryMock = jest.fn();
    render(<SearchForm handleGender={() => {}} handleCountry={handleCountryMock} country="" />);

    const input = screen.getByPlaceholderText(/Select country code/i);
    fireEvent.change(input, { target: { value: 'us' } });

    expect(handleCountryMock).toHaveBeenCalled();
  });
});
