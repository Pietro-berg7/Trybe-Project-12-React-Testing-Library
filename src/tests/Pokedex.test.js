import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testes do componente Pokedex.js', () => {
  it('Os botões de filtragem por tipo possuem o data-testid=pokemon-type-button exceto o botão All', () => {
    renderWithRouter(<App />);

    const buttons = screen.getAllByTestId('pokemon-type-button');
    expect(buttons).toHaveLength(7);
  });

  it('Os botões de filtragem por tipo possuem o nome correto', () => {
    renderWithRouter(<App />);

    const button = screen.getAllByTestId('pokemon-type-button');
    expect(button[0]).toHaveTextContent('Electric');
    expect(button[1]).toHaveTextContent('Fire');
    expect(button[2]).toHaveTextContent('Bug');
    expect(button[3]).toHaveTextContent('Poison');
    expect(button[4]).toHaveTextContent('Psychic');
    expect(button[5]).toHaveTextContent('Normal');
    expect(button[6]).toHaveTextContent('Dragon');
  });

  it('É possível clicar no botão de filtragem All', () => {
    renderWithRouter(<App />);

    const buttonAll = screen.getByRole('button', { name: 'All' });
    expect(buttonAll).toHaveTextContent('All');
    expect(buttonAll).toBeInTheDocument();
    userEvent.click(buttonAll);
  });
});
