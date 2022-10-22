import React from 'react';
import { render, screen } from '@testing-library/react';
import { FavoritePokemons } from '../pages';

describe('Testes do componente FavoritePokemons.js', () => {
  it('Teste se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha pokémons favoritos', () => {
    render(<FavoritePokemons />);

    const favorite = screen.getByText('No favorite pokemon found');
    expect(favorite).toBeInTheDocument();
  });
});
