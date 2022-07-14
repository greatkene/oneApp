
import React from 'react';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import OnboardingScreen from './src/screens/OnboardingScreen';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const Stack = createStackNavigator();

const App = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null)
  React.useEffect(() => {
    userOpenApp();
  }, [])

  const userOpenApp = async () => {
    const appData = await AsyncStorage.getItem("isAppFirstLaunched")
    if (appData == null) {
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem('isAppFirstLaunched', 'false')
    } else {
      setIsAppFirstLaunched(false)
    }
  }

  return (
   isAppFirstLaunched != null && (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isAppFirstLaunched && <Stack.Screen name='OnboardingScreen' component={OnboardingScreen} />}
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
   )
  );
};



export default App;
