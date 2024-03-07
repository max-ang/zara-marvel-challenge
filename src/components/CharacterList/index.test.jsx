import { render } from '@testing-library/react'
import CharacterList from './index'

async function resolvedComponent(Component, props) {
  const ComponentResolved = await Component(props)
  return () => ComponentResolved
}
 
describe('CharacterList', () => {
  it('renders the principal className', async () => {
    const props = {character: {
      id: 1, name: 'Mock', thumbnail: { path: '/pepe', extension: 'jpg' }
    }};
    const CharacterListResolved = await resolvedComponent(CharacterList, props)

    const {container} = render(<CharacterListResolved />)
    const className = container.querySelector('.marvel-container_character-list');
    expect(className).not.toBeNull();
  })
})
