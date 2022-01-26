import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import GirlScreen from './GirlScreen'
import BoyScreen from './BoyScreen'
const HomeScreen: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false}}>
      <Tab.Screen name="Girl" component={GirlScreen} />
      <Tab.Screen name="Boy" component={BoyScreen} />
    </Tab.Navigator>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
})
export default HomeScreen
