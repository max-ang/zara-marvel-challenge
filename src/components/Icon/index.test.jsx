import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Icon from './index'
import { ICON_TYPES } from '@/constants'
 
describe('Icon', () => {
  it('renders the principal className', () => {
    const { container } = render(<Icon />);
 
    const className = container.querySelector('.icon');
 
    expect(className).not.toBeNull();
  })

  it('renders fav className', () => {
    const { container } = render(<Icon type={ICON_TYPES.FAV} />);
 
    const className = container.querySelector(`.icon-${ICON_TYPES.FAV}`);
 
    expect(className).not.toBeNull();
  })

  it('renders not fav className', () => {
    const { container } = render(<Icon type={ICON_TYPES.FAV_UNSELECTED} />);
 
    const className = container.querySelector(`.icon-${ICON_TYPES.FAV}`);
 
    expect(className).toBeNull();
  })

  it('renders fav-unselected className', () => {
    const { container } = render(<Icon type={ICON_TYPES.FAV_UNSELECTED} />);
 
    const className = container.querySelector(`.icon-${ICON_TYPES.FAV_UNSELECTED}`);
 
    expect(className).not.toBeNull();
  })

  it('renders not fav className', () => {
    const { container } = render(<Icon type={ICON_TYPES.FAV} />);
 
    const className = container.querySelector(`.icon-${ICON_TYPES.FAV_UNSELECTED}`);
 
    expect(className).toBeNull();
  })

  it('renders search className', () => {
    const { container } = render(<Icon type={ICON_TYPES.SEARCH} />);
 
    const className = container.querySelector(`.icon-${ICON_TYPES.SEARCH}`);
 
    expect(className).not.toBeNull();
  })

  it('renders with props className', () => {
    const { container } = render(<Icon type={'customType'} className={'customClassname'} />);
 
    const className = container.querySelector('.customClassname');
 
    expect(className).not.toBeNull();
  })
})
