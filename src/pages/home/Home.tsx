import { PageMeta } from 'components';
import { PAGE_NAMES } from 'constants/commonConstants';
import { FC, ReactElement, useEffect } from 'react';
import homeImage from 'images/home.png';


const Home: FC = (): ReactElement => {

  useEffect(() => {
    /* Descomenta la siguiente linea para probar Error Boundary */
    // throw new Error('💥 KABOOM 💥');
  }, []);

  return (
    <div className='container home'>
      <PageMeta title={PAGE_NAMES.HOME} description='Mercado libre - Pagina Principal' />
      <img className='home-image' src={homeImage} alt='imagen para el home' />
    </div>
  );
};

export { Home };
