import { FC, ReactElement } from 'react';

const Empty:FC = ():ReactElement => (
  <div className='empty-wrapper'>
    <div className='empty' />
  </div>
);

export { Empty };
