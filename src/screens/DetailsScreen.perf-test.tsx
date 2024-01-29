import * as React from 'react';
import {DetailsScreenContent} from './DetailsScreen';
import {test, jest} from '@jest/globals';
import {measurePerformance} from 'reassure';

test('Details screen render', async () => {
  const item = {
    id: 100,
    title: 'Item 100',
    value: 100,
  };

  const onGoBack = jest.fn();

  // Passing both navigation and route to the screen as props
  await measurePerformance(
    <DetailsScreenContent item={item} onGoBack={onGoBack} />,
  );
});
