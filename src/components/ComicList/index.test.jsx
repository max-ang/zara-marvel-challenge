import { render } from '@testing-library/react'
import ComicList from './index'

async function resolvedComponent(Component, props) {
  const ComponentResolved = await Component(props)
  return () => ComponentResolved
}

export function mockFetch(data) {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => data,
    }),
  );
}

describe('ComicList', () => {
  window.fetch = mockFetch({
    data: {
      results: []
    }
  });

  it('renders the principal className', async () => {
    const props = {
      character: {
        id: 1, name: 'Mock', thumbnail: { path: '/pepe', extension: 'jpg' }
      }
    };

    const ComicListResolved = await resolvedComponent(ComicList, props)

    const { container } = render(<ComicListResolved />)
    const className = container.querySelector('.comics-container');

    expect(className).not.toBeNull();
  })
})
