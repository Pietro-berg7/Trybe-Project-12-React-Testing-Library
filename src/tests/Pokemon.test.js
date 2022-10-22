import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import pokemons from '../data';

const pokemonName = 'pokemon-name';

describe('Testes do componente Pokemon.js', () => {
  it('A imagem do pokemon possui o src correto', () => {
    renderWithRouter(<App />);

    const name = screen.getByTestId(pokemonName).textContent;
    const pokemon = pokemons.find((poke) => poke.name === name);
    const image = screen.getByRole('img', { name: `${name} sprite` });
    expect(image).toHaveAttribute('src', `${pokemon.image}`);
  });

  it('A imagem do pokemon possui o alt <name> sprite', () => {
    renderWithRouter(<App />);

    const name = screen.getByTestId(pokemonName);
    const image = screen.getByRole('img', { name: `${name.textContent} sprite` });
    expect(image).toBeInTheDocument();
  });

  it('A imagem de favorito possui o src /star-icon.svg e possui o alt <name> is marked as favorite', () => {
    renderWithRouter(<App />);

    const link = screen.getByRole('link', { name: 'More details' });
    userEvent.click(link);
    const favorite = screen.getByRole('checkbox');
    userEvent.click(favorite);

    const name = screen.getByTestId(pokemonName).textContent;
    const image = screen.getByRole('img', { name: `${name} is marked as favorite` });
    expect(image).toHaveAttribute('src', '/star-icon.svg');
  });

  it('É exibido na tela um texto com o tipo do pokemon', () => {
    renderWithRouter(<App />);

    const name = screen.getByTestId(pokemonName).textContent;
    const pokemon = pokemons.find((poke) => poke.name === name);
    const type = screen.getByTestId('pokemon-type').textContent;
    const typeText = pokemon.type;
    expect(type).toBe(typeText);
  });

  it('É exibido na tela um link com o href /pokemons/<id>', () => {
    renderWithRouter(<App />);

    const name = screen.getByTestId(pokemonName).textContent;
    const pokemon = pokemons.find((poke) => poke.name === name);
    const { id } = pokemon;
    const link = screen.getByRole('link', { name: 'More details' });
    expect(link).toHaveAttribute('href', `/pokemons/${id}`);
  });
});
