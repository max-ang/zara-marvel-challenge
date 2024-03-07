import { render } from '@testing-library/react'
import ComicCard from './index'

async function resolvedComponent(Component, props) {
  const ComponentResolved = await Component(props)
  return () => ComponentResolved
}
 
describe('ComicCard', () => {
  it('renders the principal className', async () => {
    const props = {comic: {
      dates: [{type: 'onsaleDate', date: new Date()}], title: 'Mock', thumbnail: { path: '/pepe', extension: 'jpg' }
    }};
    const ComicCardResolved = await resolvedComponent(ComicCard, props)

    const {container} = render(<ComicCardResolved />)
    const className = container.querySelector('.comic');
 
    expect(className).not.toBeNull();
  })
})
