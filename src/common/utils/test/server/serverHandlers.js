import { rest } from 'msw'
import { API_BASE_PATH } from '../../constants/api'
import { fakePost } from '../fake'

const handlers = [
  rest.get(`${API_BASE_PATH}new.json`, (req, res, ctx) => {
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
