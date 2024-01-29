import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerHomeScreen from './screens/DrawerHomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import {GamesScreen} from './screens/GamesScreen';

const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={DrawerHomeScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Game List" component={GamesScreen} />
    </Drawer.Navigator>
  );
}
