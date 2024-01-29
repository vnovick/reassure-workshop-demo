import * as React from 'react';
import {View} from 'react-native';
import {LoginForm} from '../components/LoginForm';
import DrawerNavigator from '../DrawerNavigator';
import {useAuth} from '../providers/AuthProvider';

export default function HomeScreen() {
  const {user} = useAuth();
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1}}>
      {user == null ? <LoginForm /> : <DrawerNavigator />}
    </View>
  );
}
