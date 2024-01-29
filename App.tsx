import 'react-native-gesture-handler';
import * as React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import AppNavigator from './src/NativeStackNavigator';
import {Provider} from 'react-redux';
import {store} from './src/store';

const queryClient = new QueryClient();

import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/providers/AuthProvider';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <AuthProvider>
              <AppNavigator />
            </AuthProvider>
          </Provider>
        </QueryClientProvider>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
