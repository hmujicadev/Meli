import { FC, ReactElement, useEffect } from 'react';
import cn from 'classnames';

import { ErrorBoundary } from 'components/error-boundary/ErrorBoundary';
import Router from 'router/Router';
import { Header } from 'components/header/Header';

// Import { useAppDispatch } from 'store/store';

const App: FC = (): ReactElement => {
  // Const dispatch = useAppDispatch();

  useEffect(() => {

  }, []);

  return (
    <ErrorBoundary>
      <div className={cn('app-wrapper')}>
        <Header />
        <Router />
      </div>
    </ErrorBoundary>
  );
};

export { App };
