/* eslint-disable camelcase */
import { createApi, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { FIRMA } from '../../constants/apiConstants';
import { sortObjectSearch, filterObjectSearch, splitAmounts } from '../apiUtils';

type Search = {
  author:{
    name:string,
    lastname:string,
  },
  categories:any,
  items:any
}

// Definir un servicio utilizando una URL base y endpoints
export const meliApi = createApi({
  reducerPath: 'meliApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.mercadolibre.com' }),
  endpoints: builder => ({
    searchProducts: builder.query<Search, string>({
      query: (data:string) => `/sites/MLA/search?q=:${data}`,
      transformResponse(response: any) {
        const data = { author: {
          name: FIRMA.name,
          lastname: FIRMA.lastname,
        },
        categories: sortObjectSearch(response),
        items: filterObjectSearch(response),
        };
        return data;
      },
    }),
    searchedProductDetail: builder.query<any, string>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
      // Get a random user
        const itemDetail = await fetchWithBQ(`/items/${_arg}`);
        if (itemDetail.error) {
          return { error: itemDetail.error as FetchBaseQueryError };
        }

        const detail = itemDetail.data as any;
        const descriptionResult = await fetchWithBQ(`/items/${_arg}/description`);
        const description = descriptionResult.data as any;
        return description
          ? { data: {
            author: {
              name: FIRMA.name,
              lastname: FIRMA.lastname,
            },
            item: {
              id: detail.id,
              title: detail.title,
            },
            price: {
              currency: detail.currency_id,
              amount: splitAmounts(detail.price, 'integer'),
              decimals: splitAmounts(detail.price, 'decimals'),
            },
            picture: detail.pictures[0].url,
            condition: detail.condition,
            free_shipping: detail.shipping.free_shipping,
            sold_quantity: detail.sold_quantity,
            description: description.plain_text,
          } }
          : { error: description.error as FetchBaseQueryError };
      },
    }),
  }),
});

// Exportación de hooks para su uso en componentes funcionales, autogenerados en base a los endpoints definidos
export const { useLazySearchProductsQuery, useSearchedProductDetailQuery } = meliApi;
