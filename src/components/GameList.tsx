import React from 'react';

import {GameItem} from './GameItem';
import {ActivityIndicator, StyleSheet, FlatList, View} from 'react-native';
import {useGetGames} from '../hooks';
//TODO: Disable to improve performance
import {ScrollView} from 'react-native-gesture-handler';

export const GameList = () => {
  const {
    isLoading,
    data,
    //  hasNextPage, fetchNextPage, isFetchingNextPage
  } = useGetGames();

  //   const loadMore = () => {
  //     if (hasNextPage) {
  //       fetchNextPage();
  //     }
  //   };

  //   const renderSpinner = () => {
  //     return <ActivityIndicator size="large" color="#32B768" />; // emerald.500 equivalent
  //   };

  //   const gameItemExtractorKey = (item: {id: any}, index: any) => {
  //     return `${item.id}-${index}`;
  //   };

  //   const renderData = ({item}: any) => {
  //     return <GameItem game={item} />;
  //   };

  return isLoading ? (
    <View style={styles.spinnerContainer}>
      <ActivityIndicator size="large" color="#9c27b0" testID="spinner" />
    </View>
  ) : (
    <ScrollView style={styles.listContainer} testID="list">
      {data?.pages
        ?.map((page: {results: any}) => page.results)
        .flat()
        .map((game: any) => (
          <GameItem key={game.id} game={game} />
        ))}
    </ScrollView>

    // <View style={styles.listContainer} testID="list">
    //   <FlatList
    //     data={data?.pages?.map(page => page.results).flat()}
    //     renderItem={renderData}
    //     onEndReached={loadMore}
    //     keyExtractor={gameItemExtractorKey}
    //     onEndReachedThreshold={0.3}
    //     ListFooterComponent={isFetchingNextPage ? renderSpinner : null}
    //   />
    // </View>
  );
};

const styles = StyleSheet.create({
  spinnerContainer: {
    flex: 1,
    backgroundColor: '#000000', // black equivalent
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {},
});
