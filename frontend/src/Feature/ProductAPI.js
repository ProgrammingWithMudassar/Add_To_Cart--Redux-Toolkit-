import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsAPI = createApi({
    reducerPath: 'productsAPI',
    baseQuery : fetchBaseQuery({ baseUrl: 'http://localhost:4030/product' }),
    endpoints : (builder)=>({
        getAllProducts : builder.query({
            query : ()=>'Products'
        })
    })
})

export const { useGetAllProductsQuery } = productsAPI;
    