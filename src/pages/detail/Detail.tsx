import { meliApi } from 'api';

import { PageMeta,Empty } from 'components';
import { PAGE_NAMES } from 'constants/commonConstants';
import { FC, ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import { formatAmount } from 'utils/helpers';

const Detail: FC = (): ReactElement => {
  const { postSlug } = useParams();
  const { data, isSuccess, isLoading, isError } = meliApi.useSearchedProductDetailQuery(postSlug || '');

  return (
    <>

      <PageMeta title={PAGE_NAMES.ITEM} description='Mercado libre - Lista de Items' />

      {isSuccess
        && <div className='detail-item__wrapper'>

          <div className='detail-item__image-wrapper'>
            <img src={data.picture} alt='' />
          </div>
          <div className='detail-item__price-wrapper'>
            <div className='detail-item__price-condition'>
              <span>{data.condition}</span>
              <span>&nbsp;-&nbsp;{data.sold_quantity}&nbsp;vendidos</span>
            </div>
            <h3 className='detail-item__price-title'>{data.item.title}</h3>
            <p className='detail-item__price'>$ {formatAmount(data.price.amount)} </p>
            <button className='detail-item__price-button' type='button'>Comprar</button>
          </div>
          <div className='detail-item__description-wrapper'>
            <span className='detail-item__description-title'>Descripción del producto</span>
            <span className='detail-item__description-text'>{data.description}</span>
          </div>
        </div>
      }
      {isLoading
          && <h3>loading</h3>
      }

      {isError && <Empty />}

    </>
  );
};

export { Detail };
