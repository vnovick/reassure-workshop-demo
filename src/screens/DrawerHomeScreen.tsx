import * as React from 'react';
import {View, Text, Pressable, FlatList} from 'react-native';
import {WelcomeMessage} from '../components/WelcomeMessage';
const mockData = new Array(20).fill(null).map((_, index) => ({
  id: index + 1,
  title: `Item ${index + 1}`,
  value: index + 1,
}));

export default function DrawerHomeScreen({navigation}: any) {
  const handleItemPress = (item: any) => navigation.navigate('Details', item);

  const renderItem = ({item}: {item: {title: string}}) => {
    return (
      <Pressable onPress={() => handleItemPress(item)}>
        <Text>{item.title}</Text>
      </Pressable>
    );
  };

  return (
    <View>
      <>
        <WelcomeMessage />
        <FlatList data={mockData} renderItem={renderItem} />
      </>
    </View>
  );
}
