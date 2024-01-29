import React from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import {GameList} from '../components/GameList';

export const GamesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text accessibilityRole="header" style={styles.headerText}>
          Explore Games
        </Text>
      </View>
      <View style={styles.content}>
        <GameList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // dark.100 equivalent
  },
  header: {
    height: 64, // 16 * 4 for scaling
    justifyContent: 'center',
    paddingHorizontal: 8, // 2 * 4 for scaling
  },
  headerText: {
    fontSize: 28,
    fontWeight: '600',
    color: '#9c27b0', // purple.500 equivalent
  },
  content: {
    paddingHorizontal: 8, // 2 * 4 for scaling
  },
});
