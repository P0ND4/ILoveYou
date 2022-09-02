import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import PlayScreen from './screens/PlayScreen';
import Gallery from './screens/Gallery';
import CreditsScreen from './screens/CreditsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: { backgroundColor: '#393E46', borderTopColor: 'transparent' },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-heart'
                : 'ios-heart-outline';
            } else if (route.name === 'Game') {
              iconName = focused
                ? 'ios-game-controller'
                : 'ios-game-controller-outline';
            } else if (route.name === 'Gallery') {
              iconName = focused
                ? 'image'
                : 'image-outline';
            } else if (route.name === 'Credits') {
              iconName = focused
                ? 'ios-book'
                : 'ios-book-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#00ADB5',
          tabBarInactiveTintColor: '#EEEEEE',
        })}>
        <Tab.Screen name="Home" component={HomeScreen}
          options={{
            title: 'TE AMO',
            headerStyle: { backgroundColor: '#393E46' },
            headerTitleStyle: { color: '#ffffff' },
          }} />
        <Tab.Screen name="Game" component={PlayScreen}
          options={{
            title: 'JUEGA',
            headerStyle: { backgroundColor: '#393E46' },
            headerTitleStyle: { color: '#ffffff' },
          }} />
        <Tab.Screen name="Gallery" component={Gallery}
          options={{
            title: 'GALERIA',
            headerStyle: { backgroundColor: '#393E46' },
            headerTitleStyle: { color: '#ffffff' },
          }} />
        <Tab.Screen name="Credits" component={CreditsScreen}
          options={{
            title: 'CREDITOS',
            headerStyle: { backgroundColor: '#393E46' },
            headerTitleStyle: { color: '#ffffff' },
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}