import { render, screen, fireEvent } from '@testing-library/react';
import Person from './Person';

describe('Person Component', () => {
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
    },
    email: 'carlos@example.com',
    dob: {
      age: 30
    }
  };

  it('debe mostrar la información básica de la persona', () => {
    render(<Person person={personMock} />);

    expect(screen.getByAltText(/Carlos/i)).toBeInTheDocument();
    expect(screen.getByText(/Mr. Carlos/i)).toBeInTheDocument();
    expect(screen.getByText(/Bogotá/i)).toBeInTheDocument();
    expect(screen.getByText(/Cundinamarca/i)).toBeInTheDocument();
  });

  it('debe mostrar y ocultar los detalles al hacer clic en el botón', () => {
    render(<Person person={personMock} />);

    const boton = screen.getByRole('button', { name: /mostrar detalles/i });
    expect(boton).toBeInTheDocument();

    // Antes de hacer clic, los detalles no deben mostrarse
    expect(screen.queryByText(/Email:/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Edad:/i)).not.toBeInTheDocument();

    // Hacer clic para mostrar detalles
    fireEvent.click(boton);

    expect(screen.getByText(/Email: carlos@example.com/i)).toBeInTheDocument();
    expect(screen.getByText(/Edad: 30/i)).toBeInTheDocument();

    // Hacer clic nuevamente para ocultar detalles
    fireEvent.click(screen.getByRole('button', { name: /ocultar detalles/i }));

    expect(screen.queryByText(/Email:/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Edad:/i)).not.toBeInTheDocument();
  });
});

