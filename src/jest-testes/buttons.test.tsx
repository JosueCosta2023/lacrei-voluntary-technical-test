import { render, screen } from '@testing-library/react';
import Buttons from '../_components/buttons';

describe('Buttons component', () => {
  it('Renderiza o botão com o href e a descrição correta', () => {
    // Passando as props necessárias para o componente Buttons
    render(<Buttons href="https://example.com" newTab={false} label="Nome do botão" />);

    const button = screen.getByText('Nome do botão');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', 'https://example.com');
    expect(button).toHaveAttribute('target', '_self');
    expect(button).not.toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('Renderiza o botão para abrir em uma nova aba com o atributo rel', () => {
    render(<Buttons href="https://example.com" newTab={true} label="Nome do botão" />);

    const button = screen.getByText('Nome do botão');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', 'https://example.com');
    expect(button).toHaveAttribute('target', '_blank');
    expect(button).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
