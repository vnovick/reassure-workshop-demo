import React, {memo, useState} from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native';
import {TGame} from '../api';

// Create type for GameItem props
type GameItemProps = {
  game: TGame;
};

//TODO: Add Memo to improve performance
export const GameItem = memo(({game}: GameItemProps) => {
  const [likes, setLikes] = useState(0);
  const likeFn = () => setLikes(likes + 1);

  return (
    <TouchableOpacity onPress={likeFn} testID="game-item">
      <View style={styles.box}>
        <View style={styles.innerBox}>
          <Image source={{uri: game.background_image}} style={styles.image} />
          <Text style={styles.text}>{game.name}</Text>
        </View>
        {likes ? (
          <Text style={styles.likes} testID="likeText">
            Likes: {likes}
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  box: {
    padding: 8, // px from Native Base converted to numeric value
    margin: 8,
    borderRadius: 8,
  },
  innerBox: {
    flexDirection: 'row',
    alignItems: 'center', // To align Image and Text
  },
  image: {
    height: 80, // 20 * 4 for scaling
    width: 80, // 20 * 4 for scaling
    marginRight: 16,
  },
  text: {
    fontSize: 20,
    color: '#FFFFFF', // light.100 equivalent
  },
  likes: {
    color: '#FFFFFF', // Assuming white color for likes text
  },
});
