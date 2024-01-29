import {NavigationProp, Route} from '@react-navigation/native';
import * as React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';

export default function DetailsScreen({
  navigation,
  route,
}: {
  navigation: NavigationProp<any>;
  route: Route<any>;
}) {
  const item = route.params;
  return (
    <DetailsScreenContent item={item} onGoBack={() => navigation.goBack()} />
  );
}

export function DetailsScreenContent({
  item,
  onGoBack,
}: {
  item: any;
  onGoBack: () => void;
}) {
  return (
    <View>
      <Text accessibilityRole="header" style={styles.header}>
        Details for {item.title}
      </Text>
      <Text style={styles.body}>
        The number you have chosen is {item.value}.
      </Text>

      <BackButton onPress={onGoBack} />
    </View>
  );
}

function BackButton({onPress}: {onPress: () => void}) {
  return (
    <Pressable accessibilityRole="button" onPress={onPress}>
      <Text>Go Back</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 16,
  },
  body: {
    textAlign: 'center',
  },
});
