import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi} from 'vitest';
import TopBar from './TopBar';
import { MemoryRouter } from 'react-router';
import { useCartContext } from '../../context/CartContext';

vi.mock('../../context/CartContext', () => ({
  useCartContext: () => ({
    addedProducts: 2,
  }),
}));


describe('TopBar', () => {

  it('render logo in topbar', () => {
    render(
      <MemoryRouter>
        <TopBar />
      </MemoryRouter>
    );
    const logoIcon = screen.getByAltText('logo MBST');
    expect(logoIcon).toBeDefined();
    expect(logoIcon.getAttribute('src')).toBe('/logo_MBST.svg');
  });

  it('render bag icon filled with products added', () => {

    render(
      <MemoryRouter>
        <TopBar />
      </MemoryRouter>
    );
    const bagIcon = screen.getByAltText('bag icon');
    expect(bagIcon).toBeDefined();
    expect(bagIcon.getAttribute('src')).toBe('/bag_icon_filled.svg');
  });

});