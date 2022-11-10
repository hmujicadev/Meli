export const sortObjectSearch = (data:any) => {
  if (data.results.length == 0) {
    return [];
  }

  const sortData = data.available_filters[0].values.sort((o1:any, o2:any) => {
    if (o1.results > o2.results) {
      return -1;
    }

    if (o1.results < o2.results) {
      return 1;
    }

    return 0;
  });
  return sortData.slice(0, 5);
};

export const filterObjectSearch = (data:any) => {
  let filterData = data.results.slice(0, 4);
  filterData = filterData.map((item:any) => ({
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: splitAmounts(item.price, 'integer'),
      decimals: splitAmounts(item.price, 'decimal'),
    },
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
    address: item.address.city_name,
  }));
  return filterData;
};

export const splitAmounts = (data:any, type:string) => {
  const splitNumber = String(data).split('.', 2);
  return type === 'integer' ? splitNumber[0] : splitNumber[1];
};

