import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Header from './index'
 
describe('Header', () => {
  it('renders the principal className', () => {
    const { container } = render(<Header />);
 
    const className = container.querySelector('.header');
 
    expect(className).not.toBeNull();
  })
})
