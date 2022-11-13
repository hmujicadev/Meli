import { FC, ReactElement, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'store/store';
import RightChevron from 'images/chevron-right-solid.svg';
import { meliApi } from 'api';
import { useAppDispatch } from 'store/store';
import { setItems } from 'store/listItem/listItemSlice';
import { useLocalStorage } from 'hooks/useLocalStorage/useLocalStorage';

const Breadcrumbs:FC = (): ReactElement => {
  const [getProducts, { data, isSuccess }] = meliApi.useLazySearchProductsQuery();
  const categories = useAppSelector(state => state.listItems.value.categories);
  const [storage, setLocalstorage] = useLocalStorage('categories', null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const navigateTo = async (to:string) => {
    await getProducts(to);
    navigate(`/items?search=${to}`);
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(setItems(data));
    }
  }, [data]);

  useEffect(() => {
    if (categories?.length) {
      setLocalstorage(categories);
    }
  }, [categories]);

  return (

    <div className='breadcrumbs-wrapper'>
      {categories ? categories.map((categorie:any) => (
        <div className='breadcrumb' key={categorie.name}>
          <span onClick={() => navigateTo(categorie.name)} className='breadcrum-link'>{categorie.name}</span>
          <RightChevron style={{ height: '10px', fill: '#999999', margin: '0 10px' }} />
        </div>
      ))
        : storage?.map((categorie:any) => (
          <div className='breadcrumb' key={categorie.name}>
            <span onClick={() => navigateTo(categorie.name)} className='breadcrum-link'>{categorie.name}</span>
            <RightChevron style={{ height: '10px', fill: '#999999', margin: '0 5px' }} />
          </div>
        ))
      }
    </div>

  );
};

export { Breadcrumbs };
