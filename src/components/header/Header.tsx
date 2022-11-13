import React, { FC, useEffect, useState, useLayoutEffect, ReactElement } from 'react';
import logoImg from 'images/Logo_ML2x.png';
import searchImg from 'images/ic_Search2x.png';
import { meliApi } from 'api';

import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAppDispatch } from 'store/store';
import { setItems } from 'store/listItem/listItemSlice';

const Header:FC = ():ReactElement => {
  const [searchParams] = useSearchParams();
  const [getProducts, { data, isSuccess }, lastPromiseInfo] = meliApi.useLazySearchProductsQuery();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>('');

  const submitSearchForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!search.trim().length) {
      return;
    }

    if (lastPromiseInfo.lastArg !== search || !searchParams.toString().includes(search)) {
      getProducts(search);
    }

    // Navigate(`/items?search=${search}`);
  };

  const handleSearch = (value:string) => {
    setSearch(value);
  };

  const navigateToHome = () => {
    setSearch('');
    navigate('/');
  };

  useEffect(() => {
    (async () => {
      if (isSuccess) {
        dispatch(await setItems(data));
        navigate(`/items?search=${search}`);
      }
    })();
  }, [data]);

  useLayoutEffect(() => {
    let param;
    if (searchParams.get('search')?.length && search === '') {
      param = searchParams.get('search');
      getProducts(param || '');
      setSearch(param || '');
    }
  }, []);

  return (
    <header className='header'>
      <div className='header-items-wrapper'>
        <img src={logoImg} alt='Mercado Libre' onClick={navigateToHome} className='search-logo__image' />
        <form name='searchForm' className='search-wrapper' onSubmit={event => submitSearchForm(event)}>
          <input
            value={search}
            name='search'
            type='text'
            onChange={e => handleSearch(e.target.value)}
            className='search-input'
            placeholder='Nunca dejes de buscar' />

          <button type='submit' className='search-input__button'>
            <img src={searchImg} alt='search-icon' className='search-input__image' />
          </button>
        </form>
      </div>
    </header>
  );
};

export { Header };
