// Need for proper typing
import '@testing-library/jest-dom/extend-expect';
// Need for fetching polyfill during testing
import 'whatwg-fetch';

import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

// Using an utilty for rendering with Redux Provider
import { renderWithProviders } from 'utils';

import { Home } from './Home';
// import { BUTTON_TEXT, COUNTER_DESCRIPTION } from 'constants/commonConstants';

/*
  We do not need a router and a helmet during testing this component,
  so mocking them with empty components.
*/
jest.mock('components', () => ({
  ...jest.requireActual('components'),
  PageMeta() {
    return <></>;
  },
}));

describe('Home page', () => {
  test('Check image element exist', () => {
    // Render component with Redux Provider without some preloaded state
    renderWithProviders(<Home />)
    expect(screen.getByAltText<HTMLImageElement>(/imagen para el home/).alt).toEqual('imagen para el home');
  });
});
