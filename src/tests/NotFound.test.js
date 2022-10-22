import React from 'react';
import { render, screen } from '@testing-library/react';
import { NotFound } from '../pages';

describe('Testes do componente NotFound.js', () => {
  it('Teste se a página contém um heading h2 com o texto Page requested not found', () => {
    render(<NotFound />);

    const notFound = screen.getByRole(
      'heading',
      { name: 'Page requested not found' },
    );
    expect(notFound).toBeInTheDocument();
  });

  it('Teste se a página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    render(<NotFound />);

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
