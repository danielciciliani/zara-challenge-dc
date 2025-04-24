import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import BackToGrid from './BackToGrid';

describe('BackToGrid', () => {
  it('it renders the back icon and the text of the button', () => {
    render(<BackToGrid />);

    const backIcon = screen.getByAltText('back icon');
    expect(backIcon).toBeDefined();

    expect(backIcon.getAttribute('src')).toBe('/back_icon.svg');

    const backText = screen.getByText('back');
    expect(backText).toBeDefined();
  });
});
