import { rest } from 'msw'
import { fakePost } from '../fake'

const handlers = [
  rest.get('https://api.reddit.com/r/pics/new.json', (req, res, ctx) => {
    const mockApiResponse = {
      data: {
        children: [
          {
            data: fakePost
          }
        ]
      }
    }
    return res(ctx.json(mockApiResponse))
  })
]

export { handlers }
