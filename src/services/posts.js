import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_PATH, REDDIT_HOSTNAME } from '../common/utils/constants/api'

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery(),
  endpoints: builder => ({
    getPostsByCategory: builder.query({
      query: (category) => `${API_BASE_PATH}${category}.json`,
      transformResponse: responseData => responseData.data.children
    }),
    getPostById: builder.query({
      query: (id) => `${REDDIT_HOSTNAME}comments/${id}.json`,
      transformResponse: responseData => responseData[0].data.children[0].data
    })
  })
})

export const { useGetPostsByCategoryQuery, useGetPostByIdQuery } = postsApi
