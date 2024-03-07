import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import FavoriteButton from './index'
 
describe('FavoriteButton', () => {
  it('renders the principal className', () => {
    const { container } = render(<FavoriteButton />);
 
    const className = container.querySelector('.favorite-button');
 
    expect(className).not.toBeNull();
  })
})
