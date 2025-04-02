import { render, screen } from '@testing-library/react';
import VisualizarTiempos from './VisualizarTiempos';

describe('VisualizarTiempos Component', () => {
  it('debe mostrar los tiempos de Axios y Fetch', () => {
    render(<VisualizarTiempos timeAxios={123} timeFetch={456} />);

    const titleElement = screen.getByText(/Results in localStorage/i);
    const axiosTime = screen.getByText(/Time Axios:/i);
    const fetchTime = screen.getByText(/Time Fetch:/i);
    const axiosValue = screen.getByText(/123 ms/i);
    const fetchValue = screen.getByText(/456 ms/i);

    expect(titleElement).toBeInTheDocument();
    expect(axiosTime).toBeInTheDocument();
    expect(fetchTime).toBeInTheDocument();
    expect(axiosValue).toBeInTheDocument();
    expect(fetchValue).toBeInTheDocument();
  });
});
