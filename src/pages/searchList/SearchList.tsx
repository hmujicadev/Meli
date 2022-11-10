import { PageMeta,Breadcrumbs } from 'components';
import { PAGE_NAMES } from 'constants/commonConstants';
import { FC, ReactElement } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from 'store/store';
import freeShippingImg from 'images/ic_shipping2x.png';
import { formatAmount } from 'utils/helpers';
import { Empty } from 'components/empty/Empty';
import cn from 'classnames';

const SearchList: FC = (): ReactElement => {
  const listItems = useAppSelector(state => state.listItems.value);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const navigateToDetail = (id:string) => {
    navigate(`/items/${id}`);
  };

  return (
    <div className='container'>
      {pathname.includes('items') && <Breadcrumbs />}
      {!pathname.includes('items/')
      && <>
        <PageMeta title={PAGE_NAMES.SEARCH} description='Mercado Libre - Pagina de Busqueda' />
        <div className={cn(listItems.items?.length && 'search-List__wrapper')}>
          {listItems.items?.length ? listItems.items?.map((item:any) => (
            <div key={item.id} className='item-list__wrapper'>
              <div onClick={() => navigateToDetail(item.id)} className='item-image__wrapper'>
                <img src={item.picture} className='item-image' />
              </div>
              <div className='item-info__wrapper'>
                <div className='item-info__header'>
                  <div onClick={() => navigateToDetail(item.id)} className='item-info__price'>
                    <span>$ {formatAmount(item.price.amount)}</span>
                    {item.free_shipping && <img src={freeShippingImg}></img>}
                  </div>
                  <span className='item-info__address'>{item.address}</span>
                </div>
                <div className='item-info__title'>
                  <span onClick={() => navigateToDetail(item.id)}>{item.title}</span>
                </div>
                <div className='item-info__condition'>
                  <span onClick={() => navigateToDetail(item.id)}>{item.condition}</span>
                </div>
              </div>
            </div>
          ))
            : <Empty />
          }
        </div>
      </>
      }
      <Outlet />
    </div>
  );
};

export { SearchList };
