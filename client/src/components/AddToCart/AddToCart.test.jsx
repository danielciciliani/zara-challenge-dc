import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AddToCart from './AddToCart';

describe('AddToCart', () => {
  it('renders text in button "Añadir"', () => {
    render(<AddToCart isActive={true} addToCart={() => {}} addedProducts={[]} />);
    const button = screen.getByText('Añadir');
    expect(button).toBeDefined();
  });

  it('applies the active class the isActive is true', () => {
    render(<AddToCart isActive={true} addToCart={() => {}} addedProducts={[]} />);
    const button = screen.getByText('Añadir');
    expect(button.className).toContain('active');
  });

  it('applies the inactive class the isActive is false', () => {
    render(<AddToCart isActive={false} addToCart={() => {}} addedProducts={[]} />);
    const button = screen.getByText('Añadir');
    expect(button.className).toContain('inactive');
  });

  it('calls addToCart when clicked', () => {
    const mockAddToCart = vi.fn(); // vi.fn() de Vitest para mocks
    render(<AddToCart isActive={true} addToCart={mockAddToCart} addedProducts={[]} />);
    const button = screen.getByText('Añadir');
    fireEvent.click(button);
    expect(mockAddToCart).toHaveBeenCalledTimes(1);
  });
});
