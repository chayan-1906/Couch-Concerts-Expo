import {Tabs} from 'expo-router';
import React from 'react';
import TabBarIcon from '../../components/navigation/TabBarIcon';

function TabsLayout() {
  return (
      <Tabs screenOptions={{tabBarActiveTintColor: 'green', headerShown: false}}>
          <Tabs.Screen
              name='scout'
              options={{
                  title: 'Scout',
                  tabBarIcon: ({color, focused}) => (
                      <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color}/>
                  ),
              }}
          />

          <Tabs.Screen
              name='discover'
              options={{
                  title: 'Discover',
                  tabBarIcon: ({color, focused}) => (
                      <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color}/>
                  ),
              }}
          />

          <Tabs.Screen
              name='index'
              options={{
                  title: 'Profile',
                  tabBarIcon: ({color, focused}) => (
                      <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color}/>
                  ),
              }}
          />
    </Tabs>
  );
}

export default TabsLayout;
