// remote/src/Remotedisplay.test.jsx
import { render, screen } from '@testing-library/react';
import Remotedisplay from '../../cra/remote/src/Remotedisplay';
import { expect, test } from 'vitest'


describe('Remotedisplay', () => {
  it('renders correctly', () => {
    render(<Remotedisplay />);
    expect(screen.getByText('bonjour et bienvenue')).toBeInTheDocument();
  });
});
