import { render, waitFor } from '@testing-library/react'
import CharacterCard from './index'

async function resolvedComponent(Component, props) {
  const ComponentResolved = await Component(props)
  return () => ComponentResolved
}
 
describe('CharacterCard', () => {
  it('renders the principal className', async () => {
    const props = {character: {
      id: 1, name: 'Mock', thumbnail: { path: '/pepe', extension: 'jpg' }
    }};
    const CharacterCardResolved = await resolvedComponent(CharacterCard, props)

    const {container} = render(<CharacterCardResolved />)
    const className = container.querySelector('.character-card');
 
    expect(className).not.toBeNull();
  })
})
