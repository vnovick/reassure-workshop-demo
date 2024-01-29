import {describe, test, jest, expect} from '@jest/globals';
type GamesApiType = typeof gamesApi;
import {useGetGames} from './'; // Adjust the path as needed
import {renderHook} from '@testing-library/react-hooks';
import {gamesApi} from '../api';
import {QueryClient, QueryClientProvider} from 'react-query';
import {PropsWithChildren} from 'react';

jest.mock('../api', () => ({
  gamesApi: {
    fetchAllGames: jest.fn(),
    fetchScreenShots: jest.fn(), // Mock other functions as needed
  },
}));

const queryClient = new QueryClient();
const wrapper = ({children}: PropsWithChildren) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('useGetGames', () => {
  test('fetches games and handles pagination', async () => {
    // Mock the API response
    const fetchAllGamesMock = gamesApi.fetchAllGames as jest.MockedFunction<
      GamesApiType['fetchAllGames']
    >;

    const mockedResponse = {
      data: {
        pages: [
          {
            game: {
              id: 1,
              name: 'Test game',
              background_image: 'url',
            },
          },
        ],
      },
      next: 'nextPageToken', // Mock the nextPageToken
    };

    fetchAllGamesMock.mockResolvedValueOnce(mockedResponse);

    const {result, waitFor} = renderHook(() => useGetGames(), {wrapper});

    // Wait for the first query to complete

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data.pages).toHaveLength(1); // Check the number of pages loaded
    expect(result.current.data.pages[0]).toEqual({
      data: mockedResponse.data,
      next: 'nextPageToken',
    });

    // Mock the response for the next page
    fetchAllGamesMock.mockResolvedValueOnce({
      data: mockedResponse.data,
      next: null, // Indicate there are no more pages
    });

    // Trigger fetching the next page
    result.current.fetchNextPage();
  });
});
