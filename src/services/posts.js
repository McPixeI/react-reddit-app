import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.reddit.com/r/pics/' }),
  endpoints: builder => ({
    getPostsByCategory: builder.query({
      query: (category) => `${category}.json`,
      transformResponse: responseData => responseData.data.children
    })
  })
})

export const { useGetPostsByCategoryQuery } = postsApi
