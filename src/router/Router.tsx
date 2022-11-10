import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTE_CONSTANTS } from 'constants/routeConstants';
import {
  SearchList,
  Home,
  Detail,
} from 'pages';

const Router: FC = () => (
  <Routes>
    <Route path={ROUTE_CONSTANTS.HOME} element={<Home />} />
    <Route path={ROUTE_CONSTANTS.ITEM} element={<SearchList />}>
      <Route path={ROUTE_CONSTANTS.ITEM_DETAIL} element={<Detail />} />
    </Route>
    <Route path='*' element={<Home />} />
  </Routes>
);

export default Router;
