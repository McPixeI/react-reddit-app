import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_BASE_PATH }),
  endpoints: builder => ({
    getPostsByCategory: builder.query({
      query: (category) => `${category}.json`,
      transformResponse: responseData => responseData.data.children
    })
  })
})

export const { useGetPostsByCategoryQuery } = postsApi
