import React from 'react';
import {HomeScreen} from '../../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const HomeStackScreen = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{inactiveTintColor: 'grey', activeTintColor: 'black'}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default HomeStackScreen;
