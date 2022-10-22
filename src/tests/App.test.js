import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testes do componente App.js', () => {
  it('É exibido na tela um link com o texto Home', () => {
    const { history } = renderWithRouter(<App />);

    const links = screen.getByRole('link', { name: 'Home' });
    expect(links).toBeInTheDocument();
    userEvent.click(links);

    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  it('É exibido na tela um link com o texto About', () => {
    const { history } = renderWithRouter(<App />);

    const links = screen.getByRole('link', { name: 'About' });
    expect(links).toBeInTheDocument();
    userEvent.click(links);

    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });

  it('É exibido na tela um link com o texto Favorite Pokémons', () => {
    const { history } = renderWithRouter(<App />);

    const links = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(links).toBeInTheDocument();
    userEvent.click(links);

    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });

  it('Redireciona para a página Not Found ao entrar em uma URL desconhecida', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/page/not-found/');
    });

    const notFound = screen.getByRole(
      'heading',
      { name: 'Page requested not found' },
    );
    expect(notFound).toBeInTheDocument();
  });
});
