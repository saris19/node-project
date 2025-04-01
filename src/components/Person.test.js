import { render, screen } from '@testing-library/react';
import Person from './Person';

describe('Person Component', () => {
  it('debe mostrar la información de la persona', () => {
    const personMock = {
      name: {
        title: 'Mr.',
        first: 'Carlos'
      },
      picture: {
        medium: 'https://randomuser.me/api/portraits/med/men/75.jpg'
      },
      location: {
        city: 'Bogotá',
        state: 'Cundinamarca'
      }
    };

    render(<Person person={personMock} />);

    const image = screen.getByAltText(/Carlos/i);
    const name = screen.getByText(/Mr. Carlos/i);
    const locationCity = screen.getByText(/Bogotá/i);
    const locationState = screen.getByText(/Cundinamarca/i);

    expect(image).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(locationCity).toBeInTheDocument();
    expect(locationState).toBeInTheDocument();
  });
});
